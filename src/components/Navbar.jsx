import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50 bg-transparent">
      <h1 className="text-white font-bold text-xl tracking-wider">
        ADVENTURE
      </h1>
      <ul className="flex space-x-10 text-sm">
        <li className="hover:text-yellow-400 cursor-pointer">Home</li>
        <li className="hover:text-yellow-400 cursor-pointer">Packages</li>
        <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
        <li className="hover:text-yellow-400 cursor-pointer">Destinations</li>
        <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
