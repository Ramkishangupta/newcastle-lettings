import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import HomeHeroSection from './Sections/HomeHeroSection';
import Footer from '../../components/Footer';
import CardsSection from './Sections/CardSection';
import PropertySection from './Sections/PropertySection';
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <HomeHeroSection />
      <CardsSection />
      <PropertySection />
      <Footer/>
    </>
  );
}

export default Home;