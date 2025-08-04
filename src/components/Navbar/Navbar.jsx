import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, ArrowRight } from "lucide-react";
import Logo from "../../assets/BrahmLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "portfolio" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center group relative z-10"
            onClick={closeMenu}
          >
            <div className="relative h-36 w-48 ">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src={Logo}
                alt="Brahmica Logo"
                className="h-full w-auto relative z-10 transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=120&h=40&fit=crop";
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-5 py-3 text-base font-semibold transition-all duration-300 rounded-lg group ${
                  location.pathname === item.path
                    ? "text-blue-600 bg-blue-50/80"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50/80"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 scale-100"
                      : "bg-gradient-to-r from-blue-600/0 to-purple-600/0 scale-95 group-hover:scale-100 group-hover:from-blue-600/5 group-hover:to-purple-600/5"
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Desktop */}
            <Link
              to="/contact"
              className="hidden lg:flex items-center space-x-3 px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen
                      ? "rotate-180 opacity-0"
                      : "rotate-0 opacity-100"
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </span>
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen
                      ? "rotate-0 opacity-100"
                      : "rotate-180 opacity-0"
                  }`}
                >
                  <X className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 space-y-2 bg-white rounded-xl shadow-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-md text-base font-medium transition ${
                  location.pathname === item.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="block mt-2 w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 text-base font-semibold rounded-xl transition hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
