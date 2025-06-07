import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHeroSection from "./herosection.jsx";

const Contact = () => {
  return (
    <div className="bg-white text-black">
      <Navbar />

      <ContactHeroSection />

      {/* Contact Form Section */}
      <div id="contact-form" className="px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#233366]">
          Send Us a Message
        </h2>
        <form className="max-w-2xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 px-4 py-3 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#233366]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 px-4 py-3 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#233366]"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="border border-gray-300 px-4 py-3 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#233366]"
          />
          <button
            type="submit"
            className="bg-[#233366] text-white font-semibold py-3 rounded-md hover:bg-[#1b2a4d] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
