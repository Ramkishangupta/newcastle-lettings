import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import GallerySection from "./Sections/GallerySection";
import Footer from "../../components/Footer"
// import PropertyDetails from "./Sections/PropertyDetails";
// import ContactCard from "./Sections/ContactCard";
function property() {
  return (
    <div>
      <Header />
      <GallerySection></GallerySection>
      <Footer></Footer>
    </div>
  );
}

export default property;
