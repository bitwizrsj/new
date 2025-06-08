import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { Menu, X } from 'lucide-react'; // Optional: use any icon lib you like

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-5 bg-white md:px-14 fixed top-0 w-full z-50">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-[10px]">In</span>
            </div>
            <span className="text-base font-semibold">Indync</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Home</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">About</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Service</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Pricing</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Testimonials</a>
            <AnimatedButton text="Get Started" textSize="14px" />
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 flex flex-col items-start">
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Home</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">About</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Service</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Pricing</a>
            <a href="#" className="text-base text-gray-600 hover:text-black transition duration-200">Testimonials</a>
            <AnimatedButton text="Get Started" textSize="14px" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
