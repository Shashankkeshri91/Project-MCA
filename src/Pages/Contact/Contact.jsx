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
      <div className="text-center my-24 px-4 md:px-8 mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get in Touch with Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-500 mb-6">
          We’re excited to hear from you! Whether you have a question, need
          assistance, or are interested in collaborating, our team is here to
          help. At Codebite, we pride ourselves on creating lasting connections
          and delivering solutions tailored to your specific needs. Reach out
          today to learn more about how we can support you, discuss your
          project, or simply start a conversation!
        </p>
        <p className="text-lg sm:text-xl text-gray-500 mb-6">
          Please fill out the form below, and we’ll respond as soon as possible.
          Alternatively, feel free to use the contact details provided. We look
          forward to connecting with you!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="container mx-auto my-12 hover:shadow-2xl">
        {/* Grid container for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {contactTab.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 cursor-pointer "
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-black">
                {item.title}
              </h3>
              <p className="text-gray-700 hover:text-orange-500 hover:font-semibold  ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Form and Map Section */}
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 my-20">
        {/* Contact Form */}
        <div className="lg:w-1/2 w-full p-4 bg-white shadow-lg rounded-lg">
          <form className="space-y-6">
            <div className="form-control w-full">
              <label className="label text-lg font-medium">
                <span className="label-text">What is your name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-lg font-medium">
                <span className="label-text ">Your Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label text-lg font-medium">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Your message"
                className="textarea textarea-bordered w-full"
              ></textarea>
            </div>
            <div className="w-full flex justify-center">
              <button className="btn bg-gradient-to-r from-purple-600 to-blue-600 text-white w-full sm:w-auto rounded-full py-3 px-8">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Google Map */}
        <div className="lg:w-1/2 w-full p-4">
          <div className="relative w-full h-72 lg:h-full rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
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
