import { MdMail } from "react-icons/md"; // Importing the Mail icon from React Icons
import Carousel from "../Carousel/Carousel";

const Hero = () => {
  return (
    <section className="mt-10 sm:mt-12 lg:mt-16 px-5 sm:px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 max-w-[100rem] mx-auto">
        {/* Left section with heading, paragraph, and input */}
        <div className="lg:w-1/2 flex flex-col justify-start lg:pl-12 lg:pt-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Building digital products & brands.
          </h1>
          <p className="text-base font-sans text-gray-500 mb-6 text-justify">
            Here at Codebite, we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth. Our vision is to create digital solutions that inspire and empower businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-3/5 lg:w-96">
              {/* Input field with mail icon */}
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded-md pl-12 pr-4 py-3 w-full"
              />
              {/* Mail Icon inside the input field */}
              <MdMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md px-6 py-3 sm:w-1/3 lg:w-48 hover:from-purple-700 hover:to-blue-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Right section with Carousel */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="w-full sm:max-w-[400px] lg:max-w-[600px] lg:h-[500px]">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
