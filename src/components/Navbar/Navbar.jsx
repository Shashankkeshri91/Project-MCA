import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa"; // For Hamburger Icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200">
      <nav className="w-full flex items-center justify-between px-4 py-3 md:px-10">
        {/* Logo */}
        <Link to={"/"}><div className="text-2xl font-semibold hover:cursor-pointer hover:text-blue-500"> Logo</div></Link>

        {/* Hamburger Menu */}
        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute lg:static lg:flex lg:items-center lg:space-x-6 text-xl left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "top-14 bg-white w-full flex flex-col items-center py-4 shadow-md border-t border-gray-200"
              : "hidden lg:flex"
          }`}
        >
          <li className="my-2 lg:my-0">
            <Link
              to="/"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <Link
              to="/portfolio"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <Link
              to="/blog"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <Link
              to="/contact"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="my-2 lg:my-0">
            <Link
              to="/services"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
