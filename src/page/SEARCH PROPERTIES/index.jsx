import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import HeroSection from "./HeroSection";
import SearchFilters from "./SearchFilters";
import PropertyCard from "./PropertyCard";
import propertyData from "./data";

import { useFilteredProperties } from "./hooks";

export default function SearchProperties() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredData = useFilteredProperties(propertyData, filters);

  // Get unique property types
  const availableTypes = Array.from(
    new Set(propertyData.map((p) => p.type))
  );

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <SearchFilters
          filters={filters}
          setFilters={setFilters}
          availableTypes={availableTypes}
        />

        {filteredData.length === 0 ? (
          <p className="text-center text-gray-400">No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
