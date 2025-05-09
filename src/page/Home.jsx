import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import background from '../assets/Images/Home/background1.jpg';

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <div 
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Sanderson Weatherall
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            Excellence in property services
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Discover More
          </button>
        </div>
      </div>

      {/* Rest of your page content */}
      <div className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        {/* Add your content sections here */}
      </div>
    </>
  );
}

export default Home;