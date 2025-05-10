import React from 'react';
import HeroSection from '../../../components/HeroSection'; // Reusing the general component
import background1 from '../../../assets/Images/Home/background1.jpg';
import background2 from '../../../assets/Images/Home/background2.jpg';

const images = [background1, background2];

function HomeHeroSection() {
  return (
    <HeroSection
      images={images}
      heading="Sanderson Weatherall"
      subheading="Excellence in property services"
      buttonText="Discover More"
    />
  );
}

export default HomeHeroSection;
