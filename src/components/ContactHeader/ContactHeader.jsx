import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const pageContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
};

const slideUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
};

const ContactHeader = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={pageContainer}
      className="relative pt-20 pb-16 px-4 md:px-8 text-center"
    >
      <motion.div variants={slideUp} className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg"
        >
          <FaCode className="text-sm" />
          Leading IT Solutions Provider
        </motion.div>
        
        <motion.h1 
          variants={slideUp}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Let's Build
          </span>
          <br />
          <span className="text-gray-800">Something Amazing</span>
          <motion.span 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block ml-4"
          >
            🚀
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={slideUp}
          className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
        >
          Ready to transform your digital presence? Our expert team is here to turn your vision into reality. 
          Get in touch and let's create something extraordinary together.
        </motion.p>
        
        <motion.div
          variants={slideUp}
          className="flex flex-wrap justify-center gap-4"
        >
          {["AI & ML", "Cloud Solutions", "Mobile Apps", "Web Development"].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-200"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactHeader;