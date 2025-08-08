import { useState } from "react";
import { motion } from "framer-motion";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import ContactCards from "../../components/ContactCards/ContactCards";
import ContactForm from "../../components/ContactForm/ContactForm";
import NotificationToast from "../../components/ContactNotificationToast/ContactNotificationToast";
// import { HiSparkles } from "react-icons/hi";

const Contacts = () => {
  const [notification, setNotification] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setNotification({ type: "success", text: "Message sent successfully! We'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
      
      // Auto dismiss notification
      setTimeout(() => setNotification(null), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full opacity-20"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-200 to-green-200 rounded-full opacity-20"
        />
      </div>

      <NotificationToast notification={notification} />
      
      <ContactHeader />
      
      <ContactCards />
      
      <ContactForm 
        form={form}
        loading={loading}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Contacts;