"use client";  // Ensure this is a Client Component if you're using React hooks

import { useState } from "react";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top Links */}
      <div className="hidden md:flex justify-end text-xs space-x-6 py-2 px-4 bg-gray-100 text-gray-600">
        <a href="#x" className="hover:underline">Find a Store</a>
        <span>|</span>
        <a href="#" className="hover:underline">Help</a>
        <span>|</span>
        <a href="#" className="hover:underline">Join Us</a>
        <span>|</span>
        <a href="#" className="hover:underline">Sign In</a>
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/">
            <img src="/logo.png" alt="Nike" className="h-8" />
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Center Navigation (Desktop) */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:justify-center md:space-x-6 md:text-sm font-medium space-x-6`}
        >
          <a href="Components/Allproducts.tsx" className="block px-4 py-2 hover:text-gray-800">New & Featured</a>
          <a href="#" className="block px-4 py-2 hover:text-gray-800">Men</a>
          <a href="#" className="block px-4 py-2 hover:text-gray-800">Women</a>
          <a href="#" className="block px-4 py-2 hover:text-gray-800">Kids</a>
          <a href="#" className="block px-4 py-2 hover:text-gray-800">Sale</a>
          <a href="#" className="block px-4 py-2 hover:text-gray-800">SNKRS</a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full px-4 py-1 w-40 md:w-64 text-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Icons */}
          <div className="flex space-x-4 text-gray-600">
            <button>
              <img src="/fav.png" alt="Favorite" className="w-8 h-8" />
            </button>
            <button>
              <img src="/cart.png" alt="Shopping Cart" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white shadow-md space-y-4 py-4 px-6`}
      >
        <a href="#" className="block text-lg hover:text-gray-800">New & Featured</a>
        <a href="#" className="block text-lg hover:text-gray-800">Men</a>
        <a href="#" className="block text-lg hover:text-gray-800">Women</a>
        <a href="#" className="block text-lg hover:text-gray-800">Kids</a>
        <a href="#" className="block text-lg hover:text-gray-800">Sale</a>
        <a href="#" className="block text-lg hover:text-gray-800">SNKRS</a>
      </div>

      <div className="bg-gray-50 w-full h-[50px] flex items-center justify-center flex-col">
        <p className=" text-xs text-gray-800 font-bold mb-2">Hello Nike App</p>
        <p className=" text-xs text-gray-800 ">Download the App to access everything Nike.</p>
        
      </div>
    </header>
  );
};

export default Header;
