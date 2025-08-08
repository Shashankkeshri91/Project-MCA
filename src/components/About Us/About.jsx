import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      // 🔧 White space fix: remove top padding & margin issues
      className="bg-white pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-20 -mt-10 sm:-mt-14 md:-mt-16"
    >
      {/* Heading */}
      <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-6 sm:mb-10">
        About Us
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-2">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
            alt="About Us"
            className="rounded-lg w-full sm:max-w-md max-h-[320px] object-cover shadow-lg hover:shadow-2xl transition duration-500"
            loading="lazy"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left px-2"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat
            hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend
            velit a pretium iaculis.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Learn more about us <span className="ml-2">&#8594;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
