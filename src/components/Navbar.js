import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/Link.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md">
      <nav className="navbar bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left side items */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-10 w-15" />
            <button className="hidden md:block bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600">
              Courses
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-black hover:text-gray-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰ {/* Simple hamburger icon */}
            </button>
          </div>

          {/* Right side items */}
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row space-x-0 md:space-x-4 items-center`}>
            <Link to="#" className="text-black hover:text-gray-300 mt-4 md:mt-0">
              Refer and earn
            </Link>
            <Link to="#" className="text-black hover:text-gray-300 mt-4 md:mt-0">
              Resources
            </Link>
            <Link to="#" className="text-black hover:text-gray-300 mt-4 md:mt-0">
              About Us
            </Link>
            <a
              href="https://accredian.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-gray-300 p-2 rounded-sm hover:text-gray-500 mt-4 md:mt-0"
            >
              Login
            </a>
            <button className="bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-600 mt-4 md:mt-0">
              Try for Free
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
