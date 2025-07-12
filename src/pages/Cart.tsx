import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
// import ProductImage from '../components/ProductImage';
import { BiTrash } from "react-icons/bi";
import { products } from "../data/product";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
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
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded bg-gray-100 mr-4"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        {item.name}
                      </div>

                      <button className="flex items-center text-blue-500 text-xs mt-2 hover:underline">
                        <BiTrash w-4 h-4 />
                        Remove
                      </button>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="font-bold text-gray-800 text-sm mb-1">
                        ₦ {item.price}
                      </div>
                      <div className="text-xs text-gray-400 line-through mb-1">
                        ₦ 11,077
                      </div>
                      <div className="text-xs text-blue-500 mb-2">-65%</div>
                      <div className="flex items-center">
                        <button className="w-7 h-7 flex items-center justify-center bg-gray-200 rounded text-gray-600 font-bold text-lg">
                          -
                        </button>
                        <span className="mx-2 font-semibold">
                          {item.quantity}
                        </span>
                        <button className="w-7 h-7 flex items-center justify-center bg-blue-500 rounded text-white font-bold text-lg">
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
              <span className="font-bold">₦ {totalPrice}</span>
            </div>
            <div className="flex justify-between text-sm mb-4 text-gray-700">
              <span>Subtotal</span>
              <span className="font-bold text-sm">₦ {totalPrice}</span>
            </div>

            <div className="flex justify-center mt-2">
              <button className="w-[70%] py-2 px-2 text-md bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition">
                Checkout (₦ {totalPrice})
              </button>
            </div>
          </div>

         
        </div>

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
