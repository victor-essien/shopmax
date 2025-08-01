import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBell } from "react-icons/fa";
const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [cartCount, setCartCount] = useState(null); //null
 
  console.log(cartCount)
  useEffect(() => {
    const updateCartCount = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        try {
          const cartArr = JSON.parse(storedCart);
          // Sum quantities if cart is array of items with quantity
          if (Array.isArray(cartArr)) {
            const total = cartArr.reduce(
              (sum, item) => sum + (item.quantity || 1),
              0
            );
            setCartCount(total);
          } else {
            setCartCount(null);
          }
        } catch {
          setCartCount(null);
        }
      } else {
        setCartCount(null);
      }
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);
  
  return (
    <header className=" border-b border-gray-200 bg-white sticky top-0 z-20">
      {/* Desktop Navbar */}
      <nav className="flex items-center justify-between md:justify-end ">
        {/* <div className="md:hidden">
           
            <button
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div> */}
        {/* Desktop Links */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          <Link
            to="/about"
            className="text-slate-600 text-sm font-medium hover:bg-gray-400 flex items-center gap-2 px-2 py-2"
          >
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            My Account
          </Link>
          <Link
            to="/support"
            className="text-slate-600  font-medium flex items-center gap-2 px-2 py-2 text-sm"
          >
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8zm-9 4v.01"
              />
            </svg>
            Help
          </Link>
          <div className="flex gap-4 pl-3 pr-3">
            <Link
              to="/login"
              className="text-white px-1 py-1 bg-blue-500 text-sm border rounded-lg font-medium "
            >
              SignIn
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${
            menuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Sidebar */}
        <nav
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 pt-16 transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="menu"
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link
            to="/"
            className="block py-2 text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block py-2 text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block py-2 text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/support"
            className="block py-2 text-slate-600 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link
            to="/signup"
            className="block py-2 text-blue-500 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            SignUp
          </Link>
          <Link
            to="/login"
            className="block py-2 text-blue-500 font-bold hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </nav>
      </div>
      {/* Mobile Nav */}
      <div className="pb-2 mt-1 mb-2 md:hidden">
        <div className="flex flex-row items-center justify-between px-2 py-2 gap-2">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-500 whitespace-nowrap"
          >
            ShopMax
          </Link>
          <div className="flex items-center gap-2">
            <button
              className="text-slate-600 "
              onClick={() => setShowMobileSearch((v) => !v)}
              aria-label="Show search"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="text-slate-600 font-medium relative hover:text-blue-500 p-2 ml-2 "
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartCount !== null ? (
                <span className="absolute bottom-7 right-0 w-3 h-3 text-center font-bold text-white bg-blue-300 rounded-full text-[9px]">
                  {cartCount}
                </span>
              ) : (
                <span/>
              )}
            </Link>
            <Link
              to="/cart"
              className="text-slate-600 font-medium hover:text-blue-500 p-2 rounded-full bg-white border border-gray-200 shadow-sm"
            >
              <FaBell className="w-5 h-5" />
            </Link>
            <button
              className=" rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7 text-slate-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Search Dropdown - should be here for mobile only */}
        {showMobileSearch && (
          <div className="animate-fade-in mt-2 px-2">
            <div className="flex flex-row border border-gray-300 rounded-lg overflow-hidden bg-white">
              <select className="border-0 rounded-none font-medium text-slate-600 py-2 px-2 bg-white focus:ring-0 focus:outline-none min-w-[110px] text-sm">
                <option value="">All Categories</option>
                <option value="item1">Dress</option>
                <option value="item2">Shoes</option>
                <option value="item3">Gadgets</option>
                <option value="item4">Men</option>
                <option value="item5">Women</option>
              </select>
              <div className="relative flex-1 min-w-0">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="w-full pl-9 pr-4 py-2 text-sm border-0 rounded-none bg-white focus:outline-none focus:ring-0 min-w-0"
                />
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="   hidden sm:block">
        <div className="flex flex-col sm:flex-row px-2 py-2 gap-2 sm:gap-0 items-stretch">
          <Link
            to="/"
            className="hidden md:block text-xl text-center font-bold text-blue-500 mr-0 sm:mr-4 whitespace-nowrap"
          >
            ShopMax
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden [@media(min-width:770px)]:flex flex-row flex-1 border border-gray-300 rounded-lg overflow-hidden bg-white min-w-0">
            <select className="border-0 rounded-none font-medium text-slate-600 py-2 px-2 bg-white focus:ring-0 focus:outline-none min-w-[110px] text-sm">
              <option value="">All Categories</option>
              <option value="item1">Dress</option>
              <option value="item2">Shoes</option>
              <option value="item3">Gadgets</option>
              <option value="item4">Men</option>
              <option value="item5">Women</option>
            </select>
            <div className="relative flex-1 min-w-0">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full pl-9 pr-4 py-2 text-sm sm:text-base border-0 rounded-none bg-white focus:outline-none focus:ring-0 min-w-0"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
          {/* Mobile Icons */}
          <div className=" items-center ml-0 sm:ml-auto gap-2 hidden [@media(min-width:770px)]:flex mt-2 sm:mt-0">
            <button
              className="sm:hidden text-slate-600 font-medium hover:text-blue-500 p-2 rounded-full bg-white border border-gray-200 shadow-sm"
              onClick={() => setShowMobileSearch((v) => !v)}
              aria-label="Show search"
            >
              <FaSearch className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="text-slate-600 font-medium relative hover:text-blue-500 p-2 ml-2 "
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartCount !== null ? (
                <span className="absolute bottom-7 right-0 w-3 h-3 text-center font-bold text-white bg-blue-300 rounded-full text-[9px]">
                  {cartCount}
                </span>
              ) : (
                <span/>
              )}
            </Link>
            <Link
              to="/cart"
              className="text-slate-600 font-medium hover:text-blue-500 p-2 rounded-full bg-white border border-gray-200 shadow-sm"
            >
              <FaBell className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
