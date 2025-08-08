import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home"
// import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Services/Service";
import Blog from "./Pages/Blog/Blog";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Carousel from "./components/Carousel/Carousel";
// import About from "./components/About Us/About";

function App() {
  return (
    <Router>
      {/* Add padding to account for the fixed Navbar */}
      <div className="pt-16">
        <Navbar />
        {/* Main Content */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/services" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/carousel" element={<Carousel />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

