import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import PropertyBanner from '../../components/PropertyBanner';
import Footer from '../../components/Footer';
import Card from '../../components/Card';
import cardsData from './Sections/Data/cardsData';
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />

      <PropertyBanner
        title="Find Properties in Newcastle"
        description="Ideal Properties offer a variety of professional lettings in Newcastle, with our decades of combined experience we can help you find the perfect home in the North East. Our team are talented and dedicated to providing a reliable and professional services that you can trust."
      />
      <div className="flex flex-wrap gap-4 p-6 justify-center">
      {cardsData.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          location={item.location}
          place={item.Place}
          price={item.price}
          beds={item.beds}
          baths={item.baths}
          floors={item.floors}
        />
      ))}
    </div>
    <Footer></Footer>
    </>
  );
}

export default Home;