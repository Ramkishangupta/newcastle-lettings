import React from "react";
import { Link } from "react-router-dom";
import contactHeroBackground from "../../assets/Images/Home/background2.jpg";

const ContactHeroSection = () => {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactHeroBackground})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl mb-6">
          We’re here to assist you — let’s get in touch!
        </p>
        <Link
          to="#"
          className="px-6 py-2 border border-white hover:bg-white hover:text-black transition rounded"
        >
          Send a Message →
        </Link>
      </div>
    </div>
  );
};

export default ContactHeroSection;
