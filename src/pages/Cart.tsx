import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// import ProductImage from '../components/ProductImage';
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { products, recentViewedProducts, popularProducts } from "../data/product";
import type { Product, CartItem } from "../types";
import ProductCard from "../components/ProductCard";
import { useAuth } from "../contexts/AuthContext";
// interface CartItem {
//   id: string;
//   slug: string
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { incrementCartItem, decrementCartItem, removeFromCart } = useAuth()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const updateCartItems = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      } else {
        setCartItems([]);
      }
    };
    updateCartItems();
    // Listen for custom cartUpdated event
    window.addEventListener("cartUpdated", updateCartItems);
    // Listen for localStorage changes (other tabs/windows)
    window.addEventListener("storage", (e) => {
      if (e.key === "cart") {
        updateCartItems();
      }
    });
    return () => {
      window.removeEventListener("cartUpdated", updateCartItems);
      window.removeEventListener("storage", updateCartItems);
    };
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto py-8 px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded shadow p-4">
              <div className="flex items-center justify-between mb-1 border-b border-slate-400">
                <h1 className="text-sm font-bold text-gray-800">
                  Cart ({totalItems})
                </h1>
              </div>
              {cartItems.length === 0 ? (
                <div className="text-center text-gray-500">
                  Your cart is empty.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b border-gray-100 py-4"
                  >
                    <Link to={`/products/${item.slug || item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded bg-gray-100 mr-4"
                    />
                    </Link>
                    <div className="flex-1">
                    
                      <div className="font-semibold text-gray-800">
                      
                          <Link to={`/products/${item.slug || item.id}`}>
                            {item.name}
                          </Link>
                        </div>
                      

                      <button className="flex items-center text-blue-500 text-sm mt-2 cursor-pointer"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <BiTrash w-4 h-4
                    />
                        Remove
                      </button>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-bold text-gray-800 text-sm mb-1">
                        ₦ {item.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400 line-through mb-1">
                        ₦ 11,077
                      </div>
                      <div className=" text-black mb-2 text-sm ">Qty: {item.quantity}</div>
                      <div className="text-xs text-blue-500 mb-2">-65%</div>
                      <div className="flex items-center">
                        <button className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded text-gray-600 font-bold text-lg"
                        onClick={() => decrementCartItem(item.id)}
                        >
                          -
                        </button>
                        <span className="mx-2 font-semibold">
                          {item.quantity}
                        </span>
                        <button className="w-7 h-7 flex items-center justify-center bg-blue-500 rounded text-white font-bold text-lg"
                        onClick={() => incrementCartItem(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          {/* Cart Summary */}
          <div className="bg-white rounded shadow p-4 h-fit">
            <h2 className="text-sm font-bold mb-2 text-gray-800">
              CART SUMMARY
            </h2>
            <div className="flex justify-between text-sm mb-1 text-gray-700">
              <span>Item's total ({totalItems})</span>
              <span className="font-bold">₦ {totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm mb-4 text-gray-700">
              <span>Subtotal</span>
              <span className="font-bold text-sm">₦ {totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-center mt-2">
              <button className="w-[70%] py-2 px-2 text-md bg-blue-500 text-white font-bold rounded cursor-pointer hover:bg-blue-600 transition">
                Checkout (₦ {totalPrice.toLocaleString()})
              </button>
            </div>
          </div>

         
        </div>
              {/* Recently Viewed */}
         <section className="py-6  ">
        <div className=" rounded-t-lg px-4 py-2 flex items-center">
          <h3 className="text-lg font-semibold text-slate-800 bg-white">
            Recently Viewd
          </h3>
        </div>
        <div className="bg-white rounded-b-lg p-4 max-w-full  md:max-w-6xl  mx-auto relative">
          {/* Desktop navigation buttons */}
          <button
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full p-2 hover:bg-orange-100 transition"
            style={{ pointerEvents: "auto" }}
            onClick={() => {
              const el = document.getElementById("sponsored-slider");
              if (el) el.scrollBy({ left: -300, behavior: "smooth" });
            }}
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div
            id="flash-sale-slider"
            className="flex overflow-x-auto gap-2  scrollbar-hide scroll-smooth px-1 py-2 md:px-8"
            style={{ scrollSnapType: "x mandatory", maxWidth: "100%" }}
          >
             {recentViewedProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full p-2 hover:bg-orange-100 transition"
            style={{ pointerEvents: "auto" }}
            onClick={() => {
              const el = document.getElementById("sponsored-slider");
              if (el) el.scrollBy({ left: 300, behavior: "smooth" });
            }}
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
        
        {/* Customer Also Viewed */}
       <section className="py-6  ">
        <div className=" rounded-t-lg px-4 py-2 flex items-center">
          <h3 className="text-lg font-semibold text-slate-800 bg-white">
            Recently Viewd
          </h3>
        </div>
        <div className="bg-white rounded-b-lg p-4 max-w-full  md:max-w-6xl  mx-auto relative">
          {/* Desktop navigation buttons */}
          <button
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full p-2 hover:bg-orange-100 transition"
            style={{ pointerEvents: "auto" }}
            onClick={() => {
              const el = document.getElementById("sponsored-slider");
              if (el) el.scrollBy({ left: -300, behavior: "smooth" });
            }}
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div
            id="flash-sale-slider"
            className="flex overflow-x-auto gap-2  scrollbar-hide scroll-smooth px-1 py-2 md:px-8"
            style={{ scrollSnapType: "x mandatory", maxWidth: "100%" }}
          >
             {popularProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full p-2 hover:bg-orange-100 transition"
            style={{ pointerEvents: "auto" }}
            onClick={() => {
              const el = document.getElementById("sponsored-slider");
              if (el) el.scrollBy({ left: 300, behavior: "smooth" });
            }}
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>


              
         {/* Products Suggesstions */}
          <div className="bg-white rounded-b-lg mt-2 max-w-full md:max-w-5xl mx-auto relative">
            <div className="grid grid-cols-2 grid-check  md:grid-cols-4 lg:grid-cols-5 gap-1">
              {products.slice(0, 48).map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
