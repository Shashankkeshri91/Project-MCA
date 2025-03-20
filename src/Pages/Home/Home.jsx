import Hero from '../../components/Hero/Hero'
import About from '../../components/About Us/About'
import WhyUs from '../../components/Why Us/WhyUs'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-[-30px] sm:mt-[-20px]"> 
        <About />
        <WhyUs />
      </div>
    </div>
  )
}

export default Home;