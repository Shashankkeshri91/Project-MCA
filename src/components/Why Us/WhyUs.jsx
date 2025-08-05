import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const WhyUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.05 }} // 👈 FAST stagger
      className="text-black-700 font-satoshi px-5 py-12 sm:px-6 lg:px-16 bg-white"
    >
      {/* Heading */}
      <motion.h2
        variants={fadeInUp}
        transition={{ duration: 0.3, ease: "easeOut" }} // 👈 FAST transition
        className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-10"
      >
        Why Us?
      </motion.h2>

      {/* Cards */}
      <div className="container mx-auto flex flex-wrap text-center justify-center gap-y-10">
        {[
          {
            img: "https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp",
            title: "Cutting-Edge Technology",
          },
          {
            img: "https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp",
            title: "Reasonable Rates",
          },
          {
            img: "https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp",
            title: "Time Efficiency",
          },
          {
            img: "https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp",
            title: "Expertise in Industry",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            transition={{ duration: 0.2, ease: "easeOut", delay: idx * 0.05 }} // 👈 QUICK delay
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
          >
            <div className="px-4 py-6 transform transition duration-300 hover:scale-105 hover:shadow-xl rounded-lg bg-white">
              <div className="flex justify-center">
                <img src={item.img} alt={item.title} className="w-24 sm:w-28 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyUs;
