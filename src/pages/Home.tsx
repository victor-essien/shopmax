import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Photo1 from '../assets/photo1.jpg'
import Photo2 from '../assets/photo2.jpg'
import Photo3 from '../assets/photo3.jpg'
import Photo4 from '../assets/photo4.jpg'
import Photo5 from '../assets/photo5.jpg'
import Photo6 from '../assets/photo6.jpg'
import Photo7 from '../assets/photo7.jpg'
import Photo8 from '../assets/photo8.jpg'
const Home: React.FC = () => {
  const cards = [
     {
       hashTag: "#Big Fashion Sale",
       title: "Limited Time Offer! Up to ",
       highlight: "50% Off",
       note: "Redefine your everyday style",
       image: Photo1,
     },
     {
       hashTag: "#Tech Deals",
       title: "Upgrade Your Gadgets ",
       highlight: "Today!",
       note: "Latest electronics at unbeatable prices",
       image: Photo2,
     },
     {
       hashTag: "#Accessories",
       title: "Accessorize Your ",
       highlight: "Look!",
       note: "Trendy bags, watches, and more",
       image: Photo7,
     },
     {
       hashTag: "#New Arrivals",
       title: "Fresh Styles Just ",
       highlight: "Landed!",
       note: "Be the first to shop our new collection",
       image: Photo6,
     },
     {
       hashTag: "#Flash Sale",
       title: "Hurry! Limited Time Flash ",
       highlight: "Deals",
       note: "Grab your favorites before they're gone",
       image: Photo5,
     },
   ];
   const [current, setCurrent] = useState(0);
 
   useEffect(() => {
   const interval = setInterval(() => {
     setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
   }, 5000);
   return () => clearInterval(interval);
 }, [cards.length]);
   const goTo = (idx: number) => setCurrent(idx);
 
   const prev = () =>
     setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
   const next = () =>
     setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
 
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* NavBar */}
      <NavBar/>
      {/* Hero Section */}
      {/* Hero Slider Section */}
      <section className="bg-white py-8 px-2 md:px-20 flex flex-col items-center">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center bg-background">
            <img
              src={cards[current].image}
              alt={cards[current].title}
              className="w-full max-h-80 object-contain rounded-xl"
            />
          </div>
          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start p-6">
            <span className="text-accent font-semibold text-sm mb-2">
              {cards[current].hashTag}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
              {cards[current].title} {" "}
  <   span className="text-blue-500">{cards[current].highlight}</span>
            </h1>
            <p className="text-secondary text-lg mb-6">{cards[current].note}</p>
            <button className="bg-gray-600 hover:bg-accent text-white px-6 py-3 rounded-lg shadow font-semibold transition">
              Shop Now
            </button>
          </div>
          {/* Navigation Arrows */}
          
        </div>
        {/* Navigation Dots */}
        <div className="flex gap-2 mt-6">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-3 h-3 rounded-full border-1 border-primary transition ${
                current === idx ? "bg-slate-600" : "bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-14 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Men", "Women", "Electronics", "Accessories"].map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-md transition"
            >
              <img
                src={`/assets/categories/${cat.toLowerCase()}.png`}
                alt={cat}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="font-medium text-lg">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-14 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-gray-50 rounded-lg shadow hover:shadow-md p-4 transition"
            >
              <img
                src={`/assets/products/product-${item}.png`}
                alt="Product"
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="mt-3 text-gray-800 font-medium">Product Name</h4>
              <p className="text-orange-400">$29.99</p>
              <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-12 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Elevate Your Style?
        </h2>
        <p className="mb-6">
          Shop our latest collection and enjoy fast delivery and secure
          checkout.
        </p>
        <button className="bg-white text-blue-500 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold">
          Browse Products
        </button>
      </section>

      {/* Footer Preview */}
      <footer className="bg-slate-800 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} ShopMax. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
