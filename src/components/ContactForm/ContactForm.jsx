import { motion } from "framer-motion";
import { FaPaperPlane, FaRocket } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const pageContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    } 
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    } 
  },
};

const ContactForm = ({ form, loading, handleInputChange, handleSubmit }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={pageContainer}
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <motion.div variants={slideInLeft} className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 opacity-10 rounded-full" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                  Start Your Project
                </h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Ready to bring your ideas to life? Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    What's your name? *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Your email address *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@company.com"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Tell us about your project *
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="I'm looking for help with..."
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all bg-white/50 backdrop-blur-sm resize-none"
                    rows="6"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4"
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl px-8 py-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                          Send Message
                          <FaRocket className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div variants={slideInRight} className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative">
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  📍 Find Us Here
                </div>
              </div>
              <div className="h-96 relative">
                <iframe
                  className="w-full h-full border-none"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.2319385735655!2d85.04494027539604!3d25.630426577434648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM3JzQ5LjUiTiA4NcKwMDInNTEuMSJF!5e0!3m2!1sen!2suk!4v1736082291953!5m2!1sen!2suk"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brahmica IT Solutions Location"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white opacity-10 rounded-full" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
                <div className="space-y-3">
                  {[
                    "24/7 Technical Support",
                    "Agile Development Process", 
                    "Scalable Solutions",
                    "Competitive Pricing"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <HiSparkles className="text-yellow-300" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;