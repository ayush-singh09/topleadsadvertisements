import React from "react";

const Header = () => {
  return (
    <header className="bg-transparent py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <img src="/path-to-logo" alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#case-studies" className="hover:text-gray-300">
              Case Studies
            </a>
          </li>
        </ul>

        {/* Call Now Button */}
        <a
          href="#call-now"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-6 rounded-full hover:opacity-90 transition"
        >
          Call Now
        </a>
      </nav>
    </header>
  );
};

export default Header;
