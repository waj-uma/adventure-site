import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, img: "https://i.pinimg.com/1200x/44/c3/c3/44c3c36798711d7f91f1eec2e1d09ba0.jpg" },
  { id: 2, img: "https://i.pinimg.com/736x/7b/97/1c/7b971c3754a345667c8105e902ef305a.jpg" },
  { id: 3, img: "https://i.pinimg.com/736x/a5/47/de/a547de5c2c5de7e2e527861d2cf04706.jpg" },
  { id: 4, img: "https://i.pinimg.com/736x/ff/ed/bd/ffedbd1c6de62f65fcd82bee539aa289.jpg" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section
    id="home"
      className="relative h-screen w-full flex items-center justify-start overflow-hidden">
       <img
    src="https://images.unsplash.com/photo-1598152642931-bf0e8635fdf8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
    alt="hero bg"
    className="absolute inset-0 w-full h-full object-cover"
  />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl ml-16">
        <p className="uppercase text-sm tracking-widest text-gray-300">
          Embark On The Journey Of A Lifetime
        </p>
        <h1 className="text-5xl font-bold mt-3 leading-tight">
          TRAVEL FAR, <br />
          <span className="text-yellow-400">FIND YOURSELF</span>
        </h1>
        <p className="text-gray-300 mt-4 text-sm">
          Explore the world’s most stunning destinations across mountains,
          jungles, deserts and oceans. Experience unforgettable adventures and
          stories to cherish forever.
        </p>
        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
          START YOUR ADVENTURE
        </button>
      </div>

      {/* Slider */}
      <div className="absolute bottom-20 right-10 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-white/20 rounded-full hover:bg-yellow-400"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex space-x-3">
          {slides.map((slide, index) => (
            <img
              key={slide.id}
              src={slide.img}
              alt="slide"
              className={`w-20 h-52 object-cover rounded-md transition-all duration-500 ${
                index === current
                  ? "ring-4 ring-yellow-400 scale-105"
                  : "opacity-60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-white/20 rounded-full hover:bg-yellow-400"
        >
          <ChevronRight size={20} />
        </button>
        <span className="text-sm ml-2">0{current + 1}</span>
      </div>
    </section>
  );
};

export default Home;
