import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contac";
import Animation from "./components/Animation";
import Home from "./components/Hero";
import Gallery from "./pages/Gallary";

const App = () => {
   const [showAnimation, setShowAnimation] = useState(true);
  return (
    <div className="bg-black text-white min-h-screen font-sans">
   
       {showAnimation ? (
        <Animation onFinish={() => setShowAnimation(false)} />
      ) : (
        <Home />
      )}
         <Navbar />
       <About />
       <Contact/>
       <Gallery/>
       {/* <Animation/> */}
    </div>
  );
};

export default App;
