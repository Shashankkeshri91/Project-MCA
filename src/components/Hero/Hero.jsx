import { useEffect, useState } from "react";
import { MdMail } from "react-icons/md";
import Carousel from "../Carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  //useEffect for backend message
  useEffect(() => {
  if (message) {
    const timer = setTimeout(() => {
      setMessage(""); // Clear message after 3 sec
    }, 5000);

    return () => clearTimeout(timer); // Clean up
  }
}, [message]);

  const handleSubscribe = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/subscribe", {
        email: email,
      });

      if (response.data && response.data.message) {
        setMessage(response.data.message); // Success message from backend
        setEmail(""); // Clear input after success
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Please enter a valid email addres."); // Show fallback message
    }
  };

  return (
    <section className="bg-white px-5 sm:px-6 lg:px-16 pt-20 pb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 max-w-[100rem] mx-auto">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight"
          >
            Where Creation Meets Innovation.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-600 font-medium max-w-2xl"
          >
            <span className="text-purple-600 font-semibold">Brahmica</span> is where timeless ideas
            blend with modern technology. We craft digital products, experiences, and brands that
            move the world forward — one creation at a time.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative w-full sm:w-3/5 lg:w-96">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 pr-4 py-3 border border-gray-300 rounded-md w-full shadow-sm focus:shadow-lg focus:border-purple-500 transition-shadow"
              />
              <MdMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
            </div>
            <button
              onClick={handleSubscribe}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md px-6 py-3 sm:w-1/3 lg:w-48 hover:scale-105 transition-transform"
            >
              Subscribe Now
            </button>
          </div>

          {/* Message */}
          {message && (
            <p
              className="text-sm text-purple-600 font-medium mt-2 animate-fade-in"
            >
              {message}
            </p>
          )}
        </div>

        {/* Right Section */}
        <div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <div className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
