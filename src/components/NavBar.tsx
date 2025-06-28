import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBell } from "react-icons/fa";
const NavBar:React.FC = () => {
     const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  return (
  <header className="p-3 border-b border-gray-200 bg-white sticky top-0 z-20">
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
            <Link to="/" className="text-slate-600 font-medium ">
              Home
            </Link>
            <Link to="/products" className="text-slate-600 font-medium ">
              Products
            </Link>
            <Link to="/about" className="text-slate-600 font-medium ">
              About Us
            </Link>
            <Link to="/support" className="text-slate-600 font-medium ">
              Support
            </Link>
            <div className="flex gap-4 pl-3 pr-3">
              <Link
                to="/signup"
                className="text-blue-500 font-bold hover:underline"
              >
                SignUp
              </Link>
              <Link
                to="/login"
                className="text-blue-500 font-bold hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-white rounded shadow-lg py-2 px-4 absolute left-2 right-2 top-14 z-30 animate-fade-in">
            <Link
              to="/"
              className="block py-2 text-slate-600 font-medium "
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
              className="block py-2 text-slate-600 font-medium "
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/support"
              className="block py-2 text-slate-600 font-medium "
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
            <div className="border-t border-gray-200 my-2"></div>
            <Link
              to="/signup"
              className="block py-2 text-blue-500 font-bold "
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
          </div>
        )}
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
        className="text-slate-600 font-medium hover:text-blue-500 p-2 rounded-full bg-white border border-gray-200 shadow-sm"
      >
        <FaShoppingCart className="w-5 h-5" />
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
</div>
        <div className="pb-2 mt-1 mb-2 hidden sm:block">
          <div className="flex flex-col sm:flex-row px-2 py-2 gap-2 sm:gap-0 items-stretch">
            <Link
              to="/"
              className="hidden md:block text-2xl text-center font-bold text-blue-500 mr-0 sm:mr-4 whitespace-nowrap"
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
            className="text-slate-600 font-medium hover:text-blue-500 p-2 ml-2 rounded-full bg-white border border-gray-200 shadow-sm"
              >
            <FaShoppingCart className="w-5 h-5" />
              </Link>
              <Link
            to="/cart"
            className="text-slate-600 font-medium hover:text-blue-500 p-2 rounded-full bg-white border border-gray-200 shadow-sm"
              >
            <FaBell className="w-5 h-5" />
              </Link>
            </div>
          </div>

          
          {/* Mobile Search Dropdown */}
          {showMobileSearch && (
            <div className="sm:hidden animate-fade-in mt-2 px-2">
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
      </header>
  )
}

export default NavBar