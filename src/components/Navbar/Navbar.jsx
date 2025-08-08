import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-md ${
          scrolled
            ? "bg-white/80 shadow-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center" onClick={closeMenu}>
              <div className="relative h-40 w-48">
                <img
                  src={Logo}
                  alt="Brahmica Logo"
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
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

            {/* CTA Button */}
            <div className="hidden lg:flex">
              {/* CTA Button - Desktop */}
              <Link
                to="/contact"
                className="hidden lg:flex items-center space-x-3 px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Modern Animated Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-2 rounded-xl focus:outline-none text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Modern Mobile Menu */}
      <div
        className={`lg:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 z-40 transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 visible transform translate-y-0 scale-100"
            : "opacity-0 invisible transform -translate-y-4 scale-95"
        }`}
      >
        <div className="p-6">
          {/* Mobile Navigation Links */}
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                  location.pathname === item.path
                    ? "text-blue-600 bg-blue-50 shadow-sm"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
                style={{
                  animationDelay: isMenuOpen ? `${index * 0.1}s` : "0s",
                  animation: isMenuOpen
                    ? "slideInFromRight 0.5s ease-out forwards"
                    : "none",
                }}
              >
                <span className="font-medium text-lg">{item.name}</span>
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    location.pathname === item.path
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                ></div>
              </Link>
            ))}
          </div>

          {/* Mobile CTA Button */}
          <div className="mt-6 pt-4 border-t border-gray-200/50">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="group relative overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Modern Menu Indicator */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-4 bg-white/95 backdrop-blur-xl border border-gray-200/50 transform rotate-45"></div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
