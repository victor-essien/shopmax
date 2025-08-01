import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface CartItem {
  id: string;
  slug?: string; // Optional slug for product detail links
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface WishList {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: CartItem[];
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avaterUrl?: string;
  cart: CartItem[];
  orders: Order[];
  wishlist: WishList[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  googleLogin: (token: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (itemId: string) => void;
  incrementCartItem: (itemId: string) => void;
  decrementCartItem: (itemId: string) => void;
  clearCart: () => void;
  addToWishList(item: WishList): void;
  removeFromWishList: (itemId: string) => void;
  clearWishList: () => void;
  createOrder: (order: Order) => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wishList, setWishList] = useState<WishList[]>(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });
  const [orders, setOrders] = useState<Order[]>([]);
  console.log(isLoading, orders);

  const navigate = useNavigate();

  useEffect(() => {
    // Check for user in localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // LOGIN
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
      const user = {
        id: "1,234",
        name: email.split("@")[0], // or any default name logic
        email: email,
        role: "customer",
        avaterUrl: "",
        orders: [],
        cart: [],
        wishlist: [],
      };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error("Login failed!");
    } finally {
      setIsLoading(false);
    }
  };
const incrementCartItem = (itemId: string) => {

  const stored = localStorage.getItem("cart");
    let guestCart: CartItem[] = stored ? JSON.parse(stored) : [];
    guestCart = guestCart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(guestCart));
    window.dispatchEvent(new Event("cartUpdated"));
}

const decrementCartItem = (itemId: string) => {
 const stored = localStorage.getItem("cart");
    let guestCart: CartItem[] = stored ? JSON.parse(stored) : [];
    guestCart = guestCart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(guestCart));
    window.dispatchEvent(new Event("cartUpdated"));
}
  // GOOGLE LOGIN
  const googleLogin = async (token: string) => {
    console.log(token);
    setIsLoading(true);
    try {
      // Simulate Google login
      const fakeUser: User = {
        id: "2",
        name: "Google User",
        email: "googleuser@example.com",
        role: "customer",
        avaterUrl: "",
        cart: [],
        orders: [],
        wishlist: [],
      };
      setUser(fakeUser);
      localStorage.setItem("user", JSON.stringify(fakeUser));
      toast.success("Google login successful!");
      navigate("/");
    } catch (err) {
      toast.error("Google login failed!");
    } finally {
      setIsLoading(false);
    }
  };

  // LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Logged out.");
    navigate("/login");
  };

  // UPDATE USER
  const updateUser = (userData: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...userData };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
    toast.success("Profile updated!");
  };

  // CART
  const addToCart = (
    item: Omit<CartItem, "quantity"> & { quantity?: number }
  ) => {
    const quantity = item.quantity || 1;
    console.log('items', item)
    console.log('quantity', quantity)
    console.log('user', user)
    if (!user) {
      // Guest cart in localStorage
      const stored = localStorage.getItem("cart");
      console.log('stored', stored)
      let guestCart: CartItem[] = stored ? JSON.parse(stored) : [];
      console.log('guestCart', guestCart)
      const existingIndex = guestCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (existingIndex >= 0) {
        guestCart[existingIndex].quantity += quantity;
      } else {
        guestCart.push({ ...item, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(guestCart));
      window.dispatchEvent(new Event("cartUpdated"));
      toast.success(`Product has been added to your cart`);
      return;
    }
    // User cart
    const existingItemIndex = user.cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    let updatedCart;
    if (existingItemIndex >= 0) {
      updatedCart = [...user.cart];
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      updatedCart = [...user.cart, { ...item, quantity }];
    }
    const updatedUser = { ...user, cart: updatedCart };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success(`${item.name} has been added to your cart`);
  };
  const removeFromCart = (itemId: string) => {
    if (!user) {
      // Guest cart
      const stored = localStorage.getItem("cart");
      
      let guestCart: CartItem[] = stored ? JSON.parse(stored) : [];
      guestCart = guestCart.filter((i) => i.id !== itemId);
      console.log('guestCart', guestCart)
      localStorage.setItem("cart", JSON.stringify(guestCart));
        window.dispatchEvent(new Event("cartUpdated"));
      toast.info("Product removed from cart.");
      return;
    }
    // User cart
    const updatedCart = user.cart.filter((i) => i.id !== itemId);
    const updatedUser = { ...user, cart: updatedCart };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.info("Removed from cart.");
  };
  const clearCart = () => {
    if (!user) {
      localStorage.removeItem("cart");
      toast.info("Cart cleared.");
      return;
    }
    const updatedUser = { ...user, cart: [] };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.info("Cart cleared.");
  };

  // WISHLIST
  const addToWishList = (item: WishList) => {
    if (!user) {
      // Guest wishlist
      let guestWishList: WishList[] = wishList;
      if (guestWishList.find((i) => i.id === item.id)) return;
      guestWishList = [...guestWishList, item];
      setWishList(guestWishList);
      localStorage.setItem("wishlist", JSON.stringify(guestWishList));
      toast.success("Added to wishlist!");
      return;
    }
    // User wishlist
    if (user.wishlist.find((i) => i.id === item.id)) return;
    const updatedUser = { ...user, wishlist: [...user.wishlist, item] };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success("Added to wishlist!");
  };
  const removeFromWishList = (itemId: string) => {
    if (!user) {
      let guestWishList: WishList[] = wishList.filter((i) => i.id !== itemId);
      setWishList(guestWishList);
      localStorage.setItem("wishlist", JSON.stringify(guestWishList));
      toast.info("Removed from wishlist.");
      return;
    }
    const updatedUser = {
      ...user,
      wishlist: user.wishlist.filter((i) => i.id !== itemId),
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.info("Removed from wishlist.");
  };
  const clearWishList = () => {
    if (!user) {
      setWishList([]);
      localStorage.removeItem("wishlist");
      toast.info("Wishlist cleared.");
      return;
    }
    const updatedUser = { ...user, wishlist: [] };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.info("Wishlist cleared.");
  };

  // ORDER
  const createOrder = (order: Order) => {
    if (!user) {
      toast.error("You must be signed in to place an order.");
      navigate("/login");
      return;
    }
    setOrders((prev) => [...prev, order]);
    const updatedUser = { ...user, orders: [...user.orders, order], cart: [] };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success("Order placed!");
    clearCart();
  };

  // PASSWORD
  const forgotPassword = async (email: string) => {
    console.log(email);
    toast.info("Password reset link sent to your email (simulated).");
    return Promise.resolve();
  };
  const resetPassword = async (token: string, newPassword: string) => {
    console.log(token, newPassword);
    toast.success("Password reset successful (simulated).");
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        googleLogin,
        logout,
        updateUser,
        addToCart,
        removeFromCart,
        clearCart,
        incrementCartItem,
        decrementCartItem,
        addToWishList,
        removeFromWishList,
        clearWishList,
        createOrder,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
