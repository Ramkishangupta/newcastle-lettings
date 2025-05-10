import React, { useEffect, useState } from 'react';

function HeroSection({ images, heading, subheading, buttonText }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {heading}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            {subheading}
          </p>
          <button className="bg-transparent text-white border-1 border-white px-8 py-3 font-medium hover:bg-opacity-90 transition-all duration-300 transform cursor-pointer hover:bg-[#273d5a9f]">
            {buttonText}
            <span className="text-white pl-3">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
