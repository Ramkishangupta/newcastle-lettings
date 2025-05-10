import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
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
      <HeroSection />
      <PropertySection />
      <CardsSection />
      <Footer/>
    </>
  );
}

export default Home;