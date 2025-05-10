import React from 'react'
import Navbar from '../../components/Navbar';
import ServiceHeroSection from "./Sections/ServiceHeroSection"
import ServiceCardSections from './Sections/ServiceCardSection';
import Footer from '../../components/Footer';

function Service() {
  return (
    <>
        <Navbar />
        <ServiceHeroSection/>
        <ServiceCardSections/>
        <Footer/>
    </>
  )
}

export default Service
