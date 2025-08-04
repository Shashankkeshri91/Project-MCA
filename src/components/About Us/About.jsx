import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="text-black-700 bold-font bg-white -mt-40 sm:-mt-24 md:mt-0 pt-2 sm:pt-5 md:pt-12 lg:pt-16 pb-16 px-5 sm:px-6 lg:px-16"
>

      <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-6 sm:mb-10">
        About Us
      </div>

      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us"
              className="object-cover rounded-lg w-full sm:max-w-md shadow-lg hover:shadow-2xl transition-shadow duration-500"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left p-4"
          >
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna
              quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis.
              Donec sagittis velit et magna euismod, vel aliquet nulla malesuada.
            </p>
            <div className="mt-6">
              <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                Learn more about us <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
