import { useEffect } from "react";
import { MdMail } from "react-icons/md";
import Carousel from "../Carousel/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white px-5 sm:px-6 lg:px-16 pt-20 pb-0 mb-0 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 max-w-[100rem] mx-auto">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Where Creation Meets Innovation.
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-lg text-gray-600 font-medium max-w-2xl"
          >
            <span className="text-purple-600 font-semibold">Brahmica</span> is where timeless ideas blend with modern technology. We craft digital products, experiences, and brands that move the world forward — one creation at a time.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative w-full sm:w-3/5 lg:w-96">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded-md pl-12 pr-4 py-3 w-full shadow-sm transition-shadow duration-300 ease-out focus:shadow-lg focus:border-purple-500"
              />
              <MdMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md px-6 py-3 sm:w-1/3 lg:w-48 hover:from-purple-700 hover:to-blue-700 transition-transform duration-500 ease-out hover:scale-105">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <div className="w-full sm:max-w-[400px] lg:max-w-[600px] h-[500px] lg:h-[500px] overflow-hidden">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
