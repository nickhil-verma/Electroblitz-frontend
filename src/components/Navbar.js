import React, { useState } from 'react';
import { RiAdminFill } from "react-icons/ri";
import LOGO from "../assets/logoinverted.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  top-4 left-0 w-full  text-[#F0F3FF] p-4 z-10">
      <div className="container mx-auto flex  rounded-full  items-center justify-between relative">
        {/* Logo (Top Left) */}
        <div className="text-xl font-bold text-[#15F5BA]">
         <img className='h-20' src={LOGO}></img>
        </div>

        {/* Admin Icon (Top Right) */}
        <div className="absolute top-4 right-4 text-[#F0F3FF] hidden lg:block">
          <button className="text-[#F0F3FF] focus:outline-none">
          <RiAdminFill  size={30} />
          </button>
        </div>

        {/* Centered Navbar Links (For Large Screens) */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1   bg-black bg-opacity-10 backdrop-blur-sm rounded-full border-[1px] border-[#15F5BA] hover:border-[#836FFF] transition-all">
          <div className="flex items-center justify-center space-x-6">
            <a href="#" className="text-white  hover:text-[#15F5BA]">Home</a>
            <a href="#" className="text-white hover:text-[#15F5BA]">Events</a>
            <a href="#" className="text-white hover:text-[#15F5BA]">Gallery</a>
            <a href="#" className="text-white hover:text-[#15F5BA]">About</a>
            <button className="bg-transparent text-white  px-2 py-1 rounded-3xl hover:bg-[#836FFF]">
              Contact
            </button>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden absolute right-4 top-4">
          <button onClick={toggleMenu} className="text-[#F0F3FF] focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Visible when hamburger is clicked) */}
        <div
          className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-[#211951] text-[#F0F3FF] p-6`}
        >
          <a href="#" className="block py-2 px-4 text-white hover:text-[#15F5BA]">Home</a>
          <a href="#" className="block py-2 px-4 text-white hover:text-[#15F5BA]">Events</a>
          <a href="#" className="block py-2 px-4 text-white hover:text-[#15F5BA]">Gallery</a>
          <a href="#" className="block py-2 px-4 text-white hover:text-[#15F5BA]">About</a>
          <button className="w-full mt-4 bg-[#15F5BA] text-[#211951] px-4 py-2 rounded-lg hover:bg-[#836FFF]">
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
