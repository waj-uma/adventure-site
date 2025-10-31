import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contac";

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
       <About />
       <Contact/>
    </div>
  );
};

export default App;
