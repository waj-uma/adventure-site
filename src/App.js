import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contac";
import Animation from "./components/Animation";
import Gallery from "./pages/Gallary";
import GalleryUpload from "./pages/GallaryUp";
import ReadMoreAbout from "./pages/ReadMoreAbout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Simple placeholder components for the new routes
const Packages = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <h1 className="text-4xl font-bold">Adventure Packages</h1>
  </div>
);

const Destinations = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <h1 className="text-4xl font-bold">Popular Destinations</h1>
  </div>
);

const Home = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <h1 className="text-4xl font-bold">Home Page</h1>
  </div>
);

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  if (showAnimation) {
    return <Animation onFinish={() => setShowAnimation(false)} />;
  }

  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
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