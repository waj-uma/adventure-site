import React from "react";

const About = () => {
  return (
    <section 
    id="about"
    className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        
        backgroundImage:
          "url('https://i.pinimg.com/736x/f5/dc/ad/f5dcade41729a230001a5b1d03ead500.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl font-bold mb-6">
          ABOUT <span className="text-yellow-400">US</span>
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Welcome to <span className="text-yellow-400 font-semibold">Smile Lanka</span> — your
          ultimate adventure travel partner! We are a passionate team of explorers and travel
          enthusiasts who believe that the best way to experience life is through adventure.
        </p>

        <p className="text-gray-300 mt-6 leading-relaxed max-w-3xl mx-auto">
          Our mission is to help travelers discover the untamed beauty of Sri Lanka — from misty
          mountain hikes and breathtaking waterfalls to thrilling safaris and coastal escapes. Each
          journey we plan is crafted with care, ensuring authentic local experiences, comfort, and
          unforgettable memories.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🌄 Our Vision</h3>
            <p>
              To inspire people to explore the world responsibly and embrace adventure while
              protecting nature and local cultures.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🧭 Our Mission</h3>
            <p>
              To offer meaningful and sustainable travel experiences that connect travelers with the
              soul of Sri Lanka.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-yellow-400/20 transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🤝 Our Promise</h3>
            <p>
              We promise unforgettable adventures, professional guides, eco-friendly practices, and
              a true sense of connection with every destination we visit.
            </p>
          </div>
        </div>

        <button className="mt-10 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default About;
