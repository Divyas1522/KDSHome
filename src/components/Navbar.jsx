


import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] text-black px-6 py-7 flex justify-between items-center shadow-md relative">
      {/* Logo - Stays Left */}
      {/* <div className="flex items-center">
        <Link to="/">
          <img src="public/706cd66e1ce6710352d36dfe43aa4d584ae01a89(1).png" alt="Logo" className="h-15 w-48 ml-22" />
        </Link>
      </div> */}
      <div className="flex items-center mr-auto lg:ml-0">
        <Link to="/">
          <img
            src="public/706cd66e1ce6710352d36dfe43aa4d584ae01a89(1).png"
            alt="Logo"
            className="h-15 w-48"
          />
        </Link>
      </div>


      {/* Mobile Menu Toggle Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Right Side - Nav Links */}
      <div className={`lg:flex space-x-8 text-xl pr-22 ${isMobileMenuOpen ? 'flex flex-col absolute top-20 right-0 bg-white w-full p-4 z-90' : 'hidden lg:flex'}`}>
        <Link
          to="/"
          className={`px-4 py-2 ${currentPath === '/' ? 'bg-[#3C83CB] text-white rounded-none' : 'hover:text-black'}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`px-4 py-2 ${currentPath === '/about' ? 'bg-[#3C83CB] text-white rounded-none' : 'hover:text-black'}`}
        >
          About Us
        </Link>
        <Link
          to="/services"
          className={`px-4 py-2 ${currentPath === '/services' ? 'bg-[#3C83CB] text-white rounded-none' : 'hover:text-black'}`}
        >
          Services
        </Link>
        <Link
          to="/portfolio"
          className={`px-4 py-2 ${currentPath === '/portfolio' ? 'bg-[#3C83CB] text-white rounded-none' : 'hover:text-black'}`}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={`px-6 py-3 border-2 rounded-full border-black ${currentPath === '/contact' ? 'bg-[#3C83CB] text-gray-900 rounded-full border-2 border-white' : 'hover:text-black'}`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
