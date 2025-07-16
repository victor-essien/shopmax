import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {products} from "../data/product";
import NavBar from '../components/NavBar';
import {useAuth} from '../contexts/AuthContext';

type Product = typeof products[number];

const  seller = {
    name: "Energy Tech",
    score: 78,
    followers: 1250,
    shippingSpeed: "Good",
    qualityScore: "Average",
    customerRating: "Good",
  }


 const location = {
    state: "Osun",
    city: "OSOGBO"
  }

const ProductDetails: React.FC = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
   const { addToCart } = useAuth();
  
    const handleAddToCart = () => {
      if (!product) return;
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    };

  useEffect(() => {
    if (slug) {
      const found = products.find((p) => p.slug === slug);
      setProduct(found || null);
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="py-8 px-2 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 bg-white rounded shadow p-6">
          {/* Left: Product Image & Info */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-gray-200 rounded flex items-center justify-center mb-4">
                {/* Replace with actual image */}
                {/* <span className="text-gray-400 text-6xl">★</span> */}
              </div>
              <div className="flex gap-2 mt-2">
                <div className="w-12 h-12 bg-gray-100 rounded" />
                <div className="w-12 h-12 bg-gray-100 rounded" />
              </div>
            </div>
            {/* Product Info */}
            <div>
              <h1 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="text-sm text-gray-500 mb-1">Brand: <span className="text-orange-600 font-semibold">{product.brand}</span></div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-blue-600">₦ {product.price.toLocaleString()}</span>
                <span className="text-gray-400 line-through text-sm">₦ {product.price.toLocaleString()}</span>
                <span className="text-blue-500 text-sm font-bold">-{product.discount}%</span>
              </div>
              <div className="text-green-600 font-semibold mb-2">In stock</div>
              <div className="text-xs text-gray-500 mb-2">+ shipping from ₦ Lagos to {location.city}</div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
                {/* <span className="font-bold text-gray-700">{product.rating}</span> */}
                <span className="text-xs text-gray-500">({product.rating} verified ratings)</span>
              </div>
              <button className="w-full py-3 bg-blue-500 text-white font-bold rounded mt-4 hover:bg-blue-600 transition" onClick={handleAddToCart}>Add to cart</button>
              {/* Promotions */}
              <div className="mt-6">
                <h3 className="text-sm font-bold mb-2 text-gray-800">PROMOTIONS</h3>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>📞 Call  To Place Your Order</li>
                  <li>💸 Need extra money? Loan up to .</li>
                  <li>🚚 Enjoy cheaper shipping fees when you select a PickUp Station at checkout.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right: Seller & Delivery Info */}
          <div className="w-full lg:w-80 flex flex-col gap-4 mt-8 lg:mt-0">
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-sm font-bold mb-2 text-gray-800">DELIVERY & RETURNS</h3>
              <div className="mb-2">
                <div className="text-xs text-gray-700">Choose your location</div>
                <div className="flex gap-2 mt-1">
                  <select className="border rounded px-2 py-1 text-xs">
                    <option>{location.state}</option>
                  </select>
                  <select className="border rounded px-2 py-1 text-xs">
                    <option>{location.city}</option>
                  </select>
                </div>
              </div>
              <div className="text-xs text-gray-700 mb-1">Pickup Station</div>
              <div className="text-xs text-gray-500 mb-2">Delivery Fees ₦ 1200</div>
              <div className="text-xs text-gray-700 mb-1">Return Policy</div>
              <div className="text-xs text-gray-500">Free return within 7 days for ALL eligible items</div>
            </div>
            <div className="bg-white rounded shadow p-4">
              <h3 className="text-sm font-bold mb-2 text-gray-800">SELLER INFORMATION</h3>
              <div className="text-xs text-gray-700 mb-1">{seller.name}</div>
              <div className="text-xs text-gray-500 mb-1">{seller.score}% Seller Score</div>
              <div className="text-xs text-gray-500 mb-1">{seller.followers} Followers</div>
              <div className="flex gap-2 mt-2">
                <div className="text-xs text-gray-700">Shipping speed: <span className="font-bold text-green-600">{seller.shippingSpeed}</span></div>
                <div className="text-xs text-gray-700">Quality Score: <span className="font-bold text-yellow-600">{seller.qualityScore}</span></div>
                <div className="text-xs text-gray-700">Customer Rating: <span className="font-bold text-green-600">{seller.customerRating}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
