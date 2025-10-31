import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 z-50 transition-all duration-500 ${
        show
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-white font-bold text-xl tracking-wider">
        Smile Lanka
      </h1>

      {/* Links */}
      <ul className="flex space-x-10 text-sm text-white">
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="home" smooth={true} duration={600} offset={-70}>
            Home
          </Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="packages" smooth={true} duration={600} offset={-70}>
            Packages
          </Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="about" smooth={true} duration={600} offset={-70}>
            About Us
          </Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="destinations" smooth={true} duration={600} offset={-70}>
            Destinations
          </Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="contac" smooth={true} duration={600} offset={-70}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
