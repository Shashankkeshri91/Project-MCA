// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaPaperPlane, 
//   FaCode, 
//   FaRocket, 
//   FaShieldAlt,
//   FaChevronRight,
//   FaPhone,
//   FaEnvelope,
//   FaGlobe,
//   FaMapMarkerAlt
// } from "react-icons/fa";
// import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
// import { HiSparkles } from "react-icons/hi";

// // Enhanced Animation Variants
// const pageContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2
//     },
//   },
// };

// const slideUp = {
//   hidden: { 
//     opacity: 0, 
//     y: 60,
//     scale: 0.95
//   },
//   show: { 
//     opacity: 1, 
//     y: 0,
//     scale: 1,
//     transition: { 
//       duration: 0.8, 
//       ease: [0.25, 0.46, 0.45, 0.94]
//     } 
//   },
// };

// const slideInLeft = {
//   hidden: { opacity: 0, x: -100 },
//   show: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { 
//       duration: 0.7, 
//       ease: "easeOut" 
//     } 
//   },
// };

// const slideInRight = {
//   hidden: { opacity: 0, x: 100 },
//   show: { 
//     opacity: 1, 
//     x: 0, 
//     transition: { 
//       duration: 0.7, 
//       ease: "easeOut" 
//     } 
//   },
// };

// const cardContainer = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariant = {
//   hidden: { 
//     opacity: 0, 
//     y: 50,
//     rotateY: -15
//   },
//   show: { 
//     opacity: 1, 
//     y: 0,
//     rotateY: 0,
//     transition: { 
//       duration: 0.6,
//       ease: "easeOut"
//     } 
//   },
// };

// const Contact = () => {
//   const [flippedCards, setFlippedCards] = useState(new Set());
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [loading, setLoading] = useState(false);
//   const [notification, setNotification] = useState(null);

//   const contactTab = [
//     {
//       id: 1,
//       icon: <FaMapMarkerAlt className="text-3xl" />,
//       title: "Our Location",
//       subtitle: "Visit Us",
//       frontContent: "Global Headquarters",
//       backContent: "135-A Near North Vishwakarma Bhawan, Sultanpur Danapur Cantt, Patna, Bihar 801503",
//       gradient: "from-blue-500 to-purple-600",
//       bgPattern: "bg-gradient-to-br from-blue-50 to-purple-50"
//     },
//     {
//       id: 2,
//       icon: <FaPhone className="text-3xl" />,
//       title: "Call Us",
//       subtitle: "24/7 Support",
//       frontContent: "Get Instant Help",
//       backContent: "+91 9110940489",
//       gradient: "from-green-500 to-blue-500",
//       bgPattern: "bg-gradient-to-br from-green-50 to-blue-50"
//     },
//     {
//       id: 3,
//       icon: <FaEnvelope className="text-3xl" />,
//       title: "Email Us",
//       subtitle: "Quick Response",
//       frontContent: "Drop a Message",
//       backContent: "shashankkeshri91109@gmail.com",
//       gradient: "from-orange-500 to-red-500",
//       bgPattern: "bg-gradient-to-br from-orange-50 to-red-50"
//     },
//     {
//       id: 4,
//       icon: <FaGlobe className="text-3xl" />,
//       title: "Website",
//       subtitle: "Online Presence",
//       frontContent: "Explore More",
//       backContent: "www.brahmica.com",
//       gradient: "from-purple-500 to-pink-500",
//       bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50"
//     },
//   ];

//   const handleCardClick = (cardId) => {
//     setFlippedCards(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(cardId)) {
//         newSet.delete(cardId);
//       } else {
//         newSet.add(cardId);
//       }
//       return newSet;
//     });
//   };

//   const handleInputChange = (field, value) => {
//     setForm(prev => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setNotification({ type: "success", text: "Message sent successfully! We'll get back to you soon." });
//       setForm({ name: "", email: "", message: "" });
//       setLoading(false);
      
//       // Auto dismiss notification
//       setTimeout(() => setNotification(null), 5000);
//     }, 2000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div 
//           animate={{ 
//             rotate: 360,
//             scale: [1, 1.1, 1]
//           }}
//           transition={{ 
//             duration: 20, 
//             repeat: Infinity, 
//             ease: "linear" 
//           }}
//           className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20"
//         />
//         <motion.div 
//           animate={{ 
//             rotate: -360,
//             scale: [1, 0.8, 1]
//           }}
//           transition={{ 
//             duration: 25, 
//             repeat: Infinity, 
//             ease: "linear" 
//           }}
//           className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-20"
//         />
//       </div>

//       {/* Notification Toast */}
//       <AnimatePresence>
//         {notification && (
//           <motion.div
//             initial={{ y: -100, opacity: 0, scale: 0.8 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ y: -100, opacity: 0, scale: 0.8 }}
//             className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-2xl shadow-2xl text-sm font-semibold backdrop-blur-lg border
//               ${notification.type === "success" 
//                 ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-300" 
//                 : "bg-gradient-to-r from-red-500 to-pink-600 text-white border-red-300"}`}
//           >
//             <div className="flex items-center gap-3">
//               {notification.type === "success" ? <HiSparkles className="text-lg" /> : <FaShieldAlt className="text-lg" />}
//               {notification.text}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Header Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={pageContainer}
//         className="relative pt-20 pb-16 px-4 md:px-8 text-center"
//       >
//         <motion.div variants={slideUp} className="max-w-6xl mx-auto">
//           <motion.div 
//             initial={{ scale: 0, rotate: -180 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg"
//           >
//             <FaCode className="text-sm" />
//             Leading IT Solutions Provider
//           </motion.div>
          
//           <motion.h1 
//             variants={slideUp}
//             className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
//           >
//             <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               Let's Build
//             </span>
//             <br />
//             <span className="text-gray-800">Something Amazing</span>
//             <motion.span 
//               animate={{ rotate: [0, 10, -10, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               className="inline-block ml-4"
//             >
//               🚀
//             </motion.span>
//           </motion.h1>
          
//           <motion.p 
//             variants={slideUp}
//             className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
//           >
//             Ready to transform your digital presence? Our expert team is here to turn your vision into reality. 
//             Get in touch and let's create something extraordinary together.
//           </motion.p>
          
//           <motion.div
//             variants={slideUp}
//             className="flex flex-wrap justify-center gap-4"
//           >
//             {["AI & ML", "Cloud Solutions", "Mobile Apps", "Web Development"].map((tech, index) => (
//               <motion.span
//                 key={tech}
//                 initial={{ opacity: 0, scale: 0 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1 + index * 0.1 }}
//                 className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md border border-gray-200"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Interactive Contact Cards */}
//       <motion.section
//         initial="hidden"
//         whileInView="show"
//         variants={pageContainer}
//         viewport={{ once: true, amount: 0.2 }}
//         className="py-20 px-4 md:px-8"
//       >
//         <motion.div variants={slideUp} className="max-w-7xl mx-auto">
//           <motion.h2 
//             variants={slideUp}
//             className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
//           >
//             Get In Touch
//           </motion.h2>
//           <motion.p 
//             variants={slideUp}
//             className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto"
//           >
//             Click on any card below to reveal detailed contact information
//           </motion.p>
          
//           <motion.div
//             variants={cardContainer}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {contactTab.map((item) => (
//               <motion.div
//                 key={item.id}
//                 variants={cardVariant}
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="relative h-64 cursor-pointer perspective-1000"
//                 onClick={() => handleCardClick(item.id)}
//               >
//                 <motion.div
//                   animate={{ rotateY: flippedCards.has(item.id) ? 180 : 0 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                   className="relative w-full h-full transform-style-preserve-3d"
//                 >
//                   {/* Front of Card */}
//                   <div className="absolute inset-0 w-full h-full backface-hidden">
//                     <div className={`w-full h-full ${item.bgPattern} rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col justify-between relative overflow-hidden`}>
//                       <div className="relative z-10">
//                         <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} text-white mb-4 shadow-lg`}>
//                           {item.icon}
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
//                         <p className="text-gray-600 text-sm mb-4">{item.subtitle}</p>
//                         <p className="text-lg font-semibold text-gray-700">{item.frontContent}</p>
//                       </div>
//                       <div className="flex items-center text-sm text-gray-500 relative z-10">
//                         <span>Click to reveal</span>
//                         <FaChevronRight className="ml-2" />
//                       </div>
//                       <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r ${item.gradient} opacity-10 rounded-full`} />
//                     </div>
//                   </div>

//                   {/* Back of Card */}
//                   <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
//                     <div className={`w-full h-full bg-gradient-to-r ${item.gradient} rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center text-white relative overflow-hidden`}>
//                       <div className="text-center relative z-10">
//                         <div className="mb-6">
//                           {item.icon}
//                         </div>
//                         <h3 className="text-xl font-bold mb-4">{item.title}</h3>
//                         <p className="text-lg font-medium leading-relaxed break-words">
//                           {item.backContent}
//                         </p>
//                       </div>
//                       <div className="absolute -top-8 -left-8 w-32 h-32 bg-white opacity-10 rounded-full" />
//                       <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white opacity-10 rounded-full" />
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </motion.section>

//       {/* Contact Form & Map Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="show"
//         variants={pageContainer}
//         viewport={{ once: true, amount: 0.1 }}
//         className="py-20 px-4 md:px-8"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-start">
            
//             {/* Contact Form */}
//             <motion.div variants={slideInLeft} className="relative">
//               <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 relative overflow-hidden">
//                 <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 opacity-10 rounded-full" />
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
//                     Start Your Project
//                   </h3>
//                   <p className="text-gray-600 mb-8 text-lg">
//                     Ready to bring your ideas to life? Fill out the form below and our team will get back to you within 24 hours.
//                   </p>
//                 </motion.div>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     <label className="block text-lg font-semibold text-gray-700 mb-3">
//                       What's your name? *
//                     </label>
//                     <input
//                       type="text"
//                       value={form.name}
//                       onChange={(e) => handleInputChange("name", e.target.value)}
//                       placeholder="John Doe"
//                       className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
//                       required
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     <label className="block text-lg font-semibold text-gray-700 mb-3">
//                       Your email address *
//                     </label>
//                     <input
//                       type="email"
//                       value={form.email}
//                       onChange={(e) => handleInputChange("email", e.target.value)}
//                       placeholder="john@company.com"
//                       className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all bg-white/50 backdrop-blur-sm"
//                       required
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     <label className="block text-lg font-semibold text-gray-700 mb-3">
//                       Tell us about your project *
//                     </label>
//                     <textarea
//                       value={form.message}
//                       onChange={(e) => handleInputChange("message", e.target.value)}
//                       placeholder="I'm looking for help with..."
//                       className="w-full border-2 border-gray-200 rounded-xl p-4 text-lg focus:border-purple-500 focus:ring-4 focus:ring-purple-100 focus:outline-none transition-all bg-white/50 backdrop-blur-sm resize-none"
//                       rows="6"
//                       required
//                     />
//                   </motion.div>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 }}
//                     className="pt-4"
//                   >
//                     <button
//                       type="submit"
//                       disabled={loading}
//                       className="group w-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl px-8 py-4 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
//                     >
//                       <span className="relative z-10 flex items-center justify-center gap-3">
//                         {loading ? (
//                           <>
//                             <motion.div
//                               animate={{ rotate: 360 }}
//                               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//                               className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                             />
//                             Sending...
//                           </>
//                         ) : (
//                           <>
//                             <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
//                             Send Message
//                             <FaRocket className="group-hover:translate-x-1 transition-transform" />
//                           </>
//                         )}
//                       </span>
//                       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//                     </button>
//                   </motion.div>
//                 </form>
//               </div>
//             </motion.div>

//             {/* Map & Additional Info */}
//             <motion.div variants={slideInRight} className="space-y-8">
//               <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative">
//                 <div className="absolute top-4 right-4 z-10">
//                   <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
//                     📍 Find Us Here
//                   </div>
//                 </div>
//                 <div className="h-96 relative">
//                   <iframe
//                     className="w-full h-full border-none"
//                     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.2319385735655!2d85.04494027539604!3d25.630426577434648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM3JzQ5LjUiTiA4NcKwMDInNTEuMSJF!5e0!3m2!1sen!2suk!4v1736082291953!5m2!1sen!2suk"
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="Brahmica IT Solutions Location"
//                   />
//                 </div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.7 }}
//                 className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl"
//               >
//                 <div className="absolute -top-6 -right-6 w-32 h-32 bg-white opacity-10 rounded-full" />
//                 <div className="relative z-10">
//                   <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
//                   <div className="space-y-3">
//                     {[
//                       "24/7 Technical Support",
//                       "Agile Development Process", 
//                       "Scalable Solutions",
//                       "Competitive Pricing"
//                     ].map((feature, index) => (
//                       <motion.div
//                         key={feature}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.8 + index * 0.1 }}
//                         className="flex items-center gap-3"
//                       >
//                         <HiSparkles className="text-yellow-300" />
//                         <span>{feature}</span>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Contact;