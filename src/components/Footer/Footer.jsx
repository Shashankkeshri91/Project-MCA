// import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="mb-2">
            <strong>Address: </strong>Near North Vishwakarma Bhawan Sultanpur
            Danapur Cantt.
          </p>
          <p className="mb-2">
            <strong>City: </strong>Patna
          </p>
          <p className="mb-2">
            <strong>Pincode: </strong>801503
          </p>
          <p className="mb-2">
            <strong>Phone: </strong> (+91) 9110940489
          </p>
          <div className="flex space-x-4 mt-4">
            <Link to="/" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook">
                <FaFacebook />
              </i>
            </Link>
            <Link to="/" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter">
                <FaTwitter />
              </i>
            </Link>
            <Link
              to="https://www.instagram.com/shashank.keshri/profilecard/?igsh=MXBrbGw3dHdodXBkYw== "
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-instagram" >
              
                <FaInstagram />
              </i>
            </Link>
            <Link to="/" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin">
                <FaLinkedin />
              </i>
            </Link>
            <Link to="/" className="text-white hover:text-gray-400">
              <i className="fab fa-youtube">
                <FaYoutube />
              </i>
            </Link>
          </div>
        </div>

        {/* Company Section */}
        <div className="text-gray-400">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/home"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Join us
              </Link>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-4">Policies</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Cancellation & Refund Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
              >
                Shipping & Delivery Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
          <p className="mb-2">For Business Purpose mail us at:</p>
          <p className="mb-2">
            <Link
              to="mailto:shashankkeshri91109@gmail.com"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
            >
              shashankkeshri91109@gmail.com
            </Link>
          </p>
          <p className="mb-2">
            <Link
              to="mailto:sales@keshri.com"
              className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white"
            >
              sales@keshri.com
            </Link>
          </p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-400 mt-10">
        © Copyright{" "}
        <Link
          className="text-white relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-gray-400"
          to="https://www.linkedin.com/in/shashank-keshri-981993217/"
          title="ShashankKeshri"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Mr ShashankKeshri.
        </Link>{" "}
        All Rights Reserved. 2025
      </div>
    </footer>
  );
};

export default Footer;
