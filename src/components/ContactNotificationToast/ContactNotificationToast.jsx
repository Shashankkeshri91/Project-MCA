import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import { FaShieldAlt } from "react-icons/fa";

const NotificationToast = ({ notification }) => {
  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0, scale: 0.8 }}
          className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-2xl shadow-2xl text-sm font-semibold backdrop-blur-lg border
            ${notification.type === "success" 
              ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-300" 
              : "bg-gradient-to-r from-red-500 to-pink-600 text-white border-red-300"}`}
        >
          <div className="flex items-center gap-3">
            {notification.type === "success" ? <HiSparkles className="text-lg" /> : <FaShieldAlt className="text-lg" />}
            {notification.text}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationToast;