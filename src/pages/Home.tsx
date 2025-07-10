import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";
import Photo5 from "../assets/photo5.jpg";
import Photo6 from "../assets/photo6.jpg";
import Photo7 from "../assets/photo7.jpg";
import Photo8 from "../assets/photo8.jpg";
import menImg from "../assets/catImg/men.png";
import aplianceImg from "../assets/catImg/appliances.png";
import gadgetImg from "../assets/catImg/gadgets.png";
import fashionImg from "../assets/catImg/fashion.png";
import beautImg from "../assets/catImg/beauty.png";
import flash from "../assets/flash.png";
import { products } from "../data/product";
import type { Product } from "../types";
import ProductCard from "../components/ProductCard";

const Home: React.FC = () => {
  const flashSale = [
    { img: Photo1, name: "Wireless Headphones", price: 49.99, left: 12 },
    { img: Photo2, name: "Smart Watch", price: 89.99, left: 7 },
    { img: Photo3, name: "Bluetooth Speaker", price: 29.99, left: 20 },
    { img: Photo4, name: "Sneakers", price: 59.99, left: 5 },
    { img: Photo5, name: "Sunglasses", price: 19.99, left: 15 },
    { img: Photo6, name: "Backpack", price: 39.99, left: 9 },
    { img: Photo7, name: "Fitness Tracker", price: 34.99, left: 11 },
    { img: Photo8, name: "Portable Charger", price: 24.99, left: 8 },
  ];
  const categories = [
    { name: "Men", img: menImg },
    { name: "Women", img: beautImg },
    { name: "Electronics", img: aplianceImg },
    { name: "Beauty", img: beautImg },
    { name: "Electronics", img: aplianceImg },
    { name: "Accessories", img: gadgetImg },
    { name: "Gadgets", img: gadgetImg },
    { name: "Fashion", img: fashionImg },
  ];
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
  const [timeLeft, setTimeLeft] = useState({
    hours: 96,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);
  const goTo = (idx: number) => setCurrent(idx);

  // const prev = () =>
  //   setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  // const next = () =>
  //   setCurrent((prev) => (prev === cards.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const end = new Date();
    end.setHours(end.getHours() + 96, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ hours, minutes, seconds });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* NavBar */}
      <NavBar />

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
              loading="lazy"
            />
          </div>
          {/* Text */}
          <div className="flex-1 flex flex-col justify-center items-start p-6">
            <span className="text-accent font-semibold text-sm mb-2">
              {cards[current].hashTag}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
              {cards[current].title}{" "}
              <span className="text-blue-500">{cards[current].highlight}</span>
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
      <section className="py-10 px-6">
        <div className="flex flex-row gap-8 flex-wrap justify-center">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center gap-2">
              <div className="relative w-11 h-11 cursor-pointer flex items-center justify-center">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-9 h-9 object-contain rounded-full"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-500/60 rounded-full pointer-events-none" />
              </div>
              <h3 className="font-medium text-sm text-center">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Flash Sales */}
      <section className="py-14 px-6 md:px-20 bg-white">
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="flex flex-row items-center flex-wrap gap-2 md:gap-4">
              <div className="relative bg-black rounded-full w-7 h-7 cursor-pointer flex items-center justify-center shadow-md">
                <img
                  src={flash}
                  alt={"flash image"}
                  className="w-5 h-5 object-contain rounded-full"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-center text-lg ml-2 text-gray-800">
                Flash Sale
              </h3>
              <div className="text-white rounded-lg px-2 py-1 flex items-center gap-1 font-mono text-base font-semibold w-fit bg-blue-50/60 shadow-inner">
                <div className="relative bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center shadow">
                  <span className="text-center w-full text-lg md:text-xl font-bold tracking-wider">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-extrabold text-xl text-blue-700">:</span>
                <div className="relative bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center shadow">
                  <span className="text-center w-full text-lg md:text-xl font-bold tracking-wider">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-extrabold text-xl text-blue-700">:</span>
                <div className="relative bg-blue-500 rounded-full w-9 h-9 flex items-center justify-center shadow">
                  <span className="text-center w-full text-lg md:text-xl font-bold tracking-wider">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-md transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300 w-12 h-12 md:w-auto md:h-auto"
                aria-label="Add to cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L7.5 15.75A2.25 2.25 0 009.664 18h7.672a2.25 2.25 0 002.164-1.813l1.286-7.715a1.125 1.125 0 00-1.107-1.322H6.343m0 0L5.106 4.272A1.125 1.125 0 004.02 3.75H2.25"
                  />
                </svg>
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-blue-500 rounded-full p-2 shadow-md transition flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-300 w-12 h-12 md:w-auto md:h-auto"
                aria-label="See more"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Flash Sale Products Horizontal Slider */}
          <div className="mt-8">
            <div className="relative max-w-full md:max-w-5xl mx-auto">
              {/* Desktop navigation buttons */}
              <button
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full p-2 hover:bg-blue-100 transition"
                style={{ pointerEvents: "auto" }}
                onClick={() => {
                  const el = document.getElementById("flash-sale-slider");
                  if (el) el.scrollBy({ left: -300, behavior: "smooth" });
                }}
                aria-label="Scroll left"
              >
                <svg
                  className="w-6 h-6 text-blue-500"
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
                className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-1 md:px-8"
                style={{ scrollSnapType: "x mandatory", maxWidth: "100%" }}
              >
                {flashSale.map((prod, idx) => (
                  <div
                    key={idx}
                    className="min-w-[200px] max-w-[220px] bg-white rounded-xl shadow flex-shrink-0 flex flex-col items-center scroll-snap-align-start border border-blue-50 hover:shadow-lg transition p-0"
                  >
                    <div
                      className="w-full flex justify-center items-center rounded-t-xl overflow-hidden bg-white"
                      style={{ padding: 0 }}
                    >
                      <img
                        src={prod.img}
                        alt={prod.name}
                        className="w-full h-36 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex flex-col items-center px-4 pt-2 pb-4">
                      <h5 className="font-medium text-base text-center mb-1 text-gray-900">
                        {prod.name}
                      </h5>
                      <p className="text-blue-500 font-bold text-lg mb-1">
                        ${prod.price.toFixed(2)}
                      </p>
                      <span className="text-xs text-gray-500 mb-2">
                        {prod.left} left
                      </span>
                      <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-2 rounded-md shadow">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 shadow rounded-full p-2 hover:bg-blue-100 transition"
                style={{ pointerEvents: "auto" }}
                onClick={() => {
                  const el = document.getElementById("flash-sale-slider");
                  if (el) el.scrollBy({ left: 300, behavior: "smooth" });
                }}
                aria-label="Scroll right"
              >
                <svg
                  className="w-6 h-6 text-blue-500"
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
          </div>
        </div>
      </section>

      {/* Choices */}
      <section className="py-14 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-6">Choices For You</h2>
        <div className="grid grid-cols-4 gap-6">
          {flashSale.map((prod, idx) => (
            <div
              key={idx}
              className=" rounded-xl shadow  flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={prod.img}
                alt={prod.name}
                className="w-34 h-34 object-contain rounded mb-2"
                loading="lazy"
              />
              <h4 className="font-medium text-base text-center text-gray-900">
                {prod.name}
              </h4>
            </div>
          ))}
        </div>
      </section>
      <section className="py-6 px-2 md:px-20">
        <div className="bg-orange-400 rounded-t-lg px-4 py-2 flex items-center">
          <h3 className="text-lg font-semibold text-white">
            Sponsored products
          </h3>
        </div>
        <div className="bg-white rounded-b-lg p-4 max-w-full md:max-w-5xl mx-auto relative">
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
            className="flex overflow-x-auto gap-2  scrollbar-hide scroll-smooth px-1 md:px-8"
            style={{ scrollSnapType: "x mandatory", maxWidth: "100%" }}
          >
            {products.slice(0, 20).map((product: Product) => (
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
{/* Limited Stock Deals */}
  <section className="py-6 px-2 md:px-20">
        <div className="bg-blue-400 rounded-t-lg px-4 py-2 flex items-center">
          <h3 className="text-lg font-semibold text-white">
            Limited Stock Deals
          </h3>
        </div>
        <div className="bg-white rounded-b-lg p-4 max-w-full md:max-w-5xl mx-auto relative">

          <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
             {products.slice(0, 48).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

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
                loading="lazy"
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
