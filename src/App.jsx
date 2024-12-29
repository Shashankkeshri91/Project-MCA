// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Add padding to account for the fixed Navbar */}
      <div className="pt-16">
        <Navbar />
        {/* Main Content */}
        <main className="min-h-screen">
          {/* Add your content or routes here */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

