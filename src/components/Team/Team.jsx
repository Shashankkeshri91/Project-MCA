import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import ShashankPic from "../../assets/ShashankPic.jpg";
import GauravPic from "../../assets/Gaurav.jpg";
import RohitRanjan from "../../assets/RohitRanjan.jpg";
import AdityaPic from "../../assets/AdityPic.jpg";
import AnkitPic from "../../assets/AnkitJha.jpg";

const teamMembers = [
  {
    name: "Shashank Keshri",
    role: "Founder & CEO",
    image:  ShashankPic,
    link: "https://www.linkedin.com/in/shashank-keshri-981993217/",
  },
  {
    name: "Gaurav Daware",
    role: "Digital Art Specialist",
    image: GauravPic,
    link: "https://www.linkedin.com/in/gaurav-daware/",
  },
  {
    name: "Rohit Ranjan",
    role: "Software Engineer",
    image: RohitRanjan,
    link: "https://www.linkedin.com/in/rohit-ranjan-816545258/",
  },
  {
    name: "Aditya Anand",
    role: "Sales Lead",
    image: AdityaPic,
    link: "https://www.linkedin.com/in/adityasince2k/",
  },

  {
    name: "Ankit Jha",
    role: "Video Editing Specialist",
    image: AnkitPic,
    link: "https://www.linkedin.com/in/ankit-jha-0a61b8252/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Team = () => {
  return (
    <section className="bg-white py-14 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-10">
        Meet Our Team
      </h2>

      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover
        className="whitespace-nowrap"
      >
        {teamMembers.map((member, idx) => (
          <Link
            key={idx}
            to={member.link}
            className="inline-block w-64 sm:w-72 mx-4 sm:mx-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-blue-200 shadow-sm mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-blue-500">{member.role}</p>
              <p className="text-xs text-gray-400 mt-1">Tap to view profile</p>
            </motion.div>
          </Link>
        ))}
      </Marquee>
    </section>
  );
};

export default Team;
