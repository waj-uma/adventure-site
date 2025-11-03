import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Contact from "./pages/Contac";
import Animation from "./components/Animation";
import Gallery from "./pages/Gallary";
import GalleryUpload from "./pages/GallaryUp";
import ReadMoreAbout from "./pages/ReadMoreAbout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const [showAnimation, setShowAnimation] = useState(true);
  
  // if (showAnimation) {
  //   return <Animation onFinish={() => setShowAnimation(false)} />;
  // }

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <div id="home">
                <Hero />
              </div>
              <div id="packages" className="min-h-screen bg-black text-white flex items-center justify-center py-20">
                {/* <div className="max-w-6xl mx-auto text-center">
                  <h1 className="text-4xl font-bold mb-10">Adventure Packages</h1>
                  <p className="text-xl text-gray-300">Explore our exciting adventure packages.</p>
                </div> */}
              </div>
              <div id="about">
                <About />
              </div>
              <div id="destinations" className="min-h-screen bg-black text-white flex items-center justify-center py-20">
                {/* <div className="max-w-6xl mx-auto text-center">
                  <h1 className="text-4xl font-bold mb-10">Popular Destinations</h1>
                  <p className="text-xl text-gray-300">Discover amazing destinations around Sri Lanka.</p>
                </div> */}
              </div>
              <div id="contac">
                <Contact />
              </div>
              <div id="gallary">
                <Gallery />
              </div>
              <div id="gallery-upload">
                <GalleryUpload />
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-upload" element={<GalleryUpload />} />
          <Route path="/about-more" element={<ReadMoreAbout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;