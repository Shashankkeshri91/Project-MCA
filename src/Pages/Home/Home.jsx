import Hero from "../../components/Hero/Hero";
import About from "../../components/About Us/About";
import WhyUs from "../../components/Why Us/WhyUs";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <WhyUs />
      <Team />
      {/* Remove negative margin and use standard spacing
      <div className="mt-10 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">

      </div> */}
    </div>
  );
};

export default Home;
