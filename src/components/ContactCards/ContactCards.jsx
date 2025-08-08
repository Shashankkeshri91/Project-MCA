import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaGlobe,
  FaChevronRight
} from "react-icons/fa";

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

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateY: -15
  },
  show: { 
    opacity: 1, 
    y: 0,
    rotateY: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  },
};

const ContactCards = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());

  const contactTab = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Our Location",
      subtitle: "Visit Us",
      frontContent: "Global Headquarters",
      backContent: "135-A Near North Vishwakarma Bhawan, Sultanpur Danapur Cantt, Patna, Bihar 801503",
      gradient: "from-blue-500 to-purple-600",
      bgPattern: "bg-gradient-to-br from-blue-50 to-purple-50"
    },
    {
      id: 2,
      icon: <FaPhone className="text-3xl" />,
      title: "Call Us",
      subtitle: "24/7 Support",
      frontContent: "Get Instant Help",
      backContent: "+91 9110940489",
      gradient: "from-green-500 to-blue-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-blue-50"
    },
    {
      id: 3,
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Us",
      subtitle: "Quick Response",
      frontContent: "Drop a Message",
      backContent: "shashankkeshri91109@gmail.com",
      gradient: "from-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50"
    },
    {
      id: 4,
      icon: <FaGlobe className="text-3xl" />,
      title: "Website",
      subtitle: "Online Presence",
      frontContent: "Explore More",
      backContent: "www.brahmica.com",
      gradient: "from-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
  ];

  const handleCardClick = (cardId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={pageContainer}
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 px-4 md:px-8"
    >
      <motion.div variants={slideUp} className="max-w-7xl mx-auto">
        <motion.h2 
          variants={slideUp}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          variants={slideUp}
          className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto"
        >
          Click on any card below to reveal detailed contact information
        </motion.p>
        
        <motion.div
          variants={cardContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactTab.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative h-64 cursor-pointer perspective-1000"
              onClick={() => handleCardClick(item.id)}
            >
              <motion.div
                animate={{ rotateY: flippedCards.has(item.id) ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full transform-style-preserve-3d"
              >
                {/* Front of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className={`w-full h-full ${item.bgPattern} rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} text-white mb-4 shadow-lg`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.subtitle}</p>
                      <p className="text-lg font-semibold text-gray-700">{item.frontContent}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 relative z-10">
                      <span>Click to reveal</span>
                      <FaChevronRight className="ml-2" />
                    </div>
                    <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r ${item.gradient} opacity-10 rounded-full`} />
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className={`w-full h-full bg-gradient-to-r ${item.gradient} rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-white relative overflow-hidden`}>
                    <div className="text-center relative z-10">
                      <div className="mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                      <p className="text-lg font-medium leading-relaxed break-words">
                        {item.backContent}
                      </p>
                    </div>
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-white opacity-10 rounded-full" />
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white opacity-10 rounded-full" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactCards;