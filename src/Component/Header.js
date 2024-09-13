import React, { useState } from "react";
import Logo from "../Assets/Images/Logo/Logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800 w-14 h-14">
            <img src={Logo} alt="logo" className="w-full h-full " />
          </div>

          {/* Navbar Links */}
          <nav className="hidden md:flex gap-x-24">
            <Link to="/posters" className="text-gray-800 hover:text-gray-600">
              Poster
            </Link>
            <Link to="/project" className="text-gray-800 hover:text-gray-600">
              Project
            </Link>
            <Link to="/service" className="text-gray-800 hover:text-gray-600">
              Service
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">
              About Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden">
            <div className="flex flex-col space-y-2 pb-4">
            <Link to="/posters" className="text-gray-800 hover:text-gray-600">
            Poster
            </Link>
            <Link to="/project" className="text-gray-800 hover:text-gray-600">
              Project
            </Link>
            <Link to="/service" className="text-gray-800 hover:text-gray-600">
              Service
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">
              About Me
            </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
