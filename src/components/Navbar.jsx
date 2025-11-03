import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50 transition-all duration-500 ${
        show ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <h1 className="text-white font-bold text-xl tracking-wider">
        Smile Lanka
      </h1>

      <ul className="flex space-x-10 text-sm text-white">
        {isHome ? (
          <>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="home" smooth duration={600} offset={-70}>
                Home
              </ScrollLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="packages" smooth duration={600} offset={-70}>
                Packages
              </ScrollLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="about" smooth duration={600} offset={-70}>
                About Us
              </ScrollLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="destinations" smooth duration={600} offset={-70}>
                Destinations
              </ScrollLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="contac" smooth duration={600} offset={-70}>
                Contact Us
              </ScrollLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <ScrollLink to="gallary" smooth duration={600} offset={-70}>
                Gallery
              </ScrollLink>
            </li>
          </>
        ) : (
          <>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/packages">Packages</RouterLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/about">About Us</RouterLink>
            </li>
              <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/destinations">Destinations</RouterLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/contact">Contact Us</RouterLink>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <RouterLink to="/gallery">Gallery</RouterLink>
            </li>
           
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
