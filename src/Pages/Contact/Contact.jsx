import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {     
  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl hover:text-orange-500" />,
      title: "Address",
      description: `135-A Near North Vishwakarma Bhawan, Sultanpur Danapur Cantt, Patna, Bihar 801503`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl hover:text-orange-500" />,
      title: "Contact Number",
      description: `+91 9110940489`,
    },
    {
      icon: <FaPaperPlane className="text-4xl hover:text-orange-500" />,
      title: "Email Address",
      description: `shashankkeshri91109@gmail.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl hover:text-orange-500" />,
      title: "Website",
      description: "yoursite.com",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="text-center my-16 px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch with Us</h2>
        <p className="text-lg text-gray-600 mb-4">
          We’re excited to hear from you! Whether you have a question, need assistance, or are interested in collaborating, our team is here to help.
        </p>
        <p className="text-lg text-gray-600">
          Please fill out the form below, and we’ll respond as soon as possible. Alternatively, feel free to use the contact details provided.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contactTab.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-transparent hover:border-black">
                {item.title}
              </h3>
              <p className="text-gray-700 hover:text-orange-500 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 my-20">
        {/* Contact Form */}
        <div className="lg:w-1/2 w-full p-6 bg-white shadow-md rounded-lg">
          <form className="space-y-6">
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700 mb-2">What is your name?</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700 mb-2">Your Email Address</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Your message"
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="5"
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-md px-6 py-3 sm:w-1/3 lg:w-48 hover:from-purple-700 hover:to-blue-700 transition">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Google Map */}
        <div className="lg:w-1/2 w-full p-4">
          <div className="relative w-full h-72 lg:h-full rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.2319385735655!2d85.04494027539604!3d25.630426577434648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM3JzQ5LjUiTiA4NcKwMDInNTEuMSJF!5e0!3m2!1sen!2suk!4v1736082291953!5m2!1sen!2suk"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
