import React from 'react';
import HeroSection from './HeroSection'; // Reusing the general component
import background1 from '../../../assets/Images/Home/background3.jpg';
import background2 from '../../../assets/Images/Home/background4.jpg';

const images = [background1, background2];

function HomeHeroSection() {
  return (
    <HeroSection
      images={images}
      heading="Services"
      subheading="Excellence in property services"
      buttonText="Who we are"
    />
  );
}

export default HomeHeroSection;