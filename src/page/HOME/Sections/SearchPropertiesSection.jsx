import SearchProperties from '../../../components/SearchProperties';
import React, { useState } from "react";

const SearchPropertiesSection = () => {
  const properties = [
    { id: 1, title: "2 Bed Apartment", location: "Jesmond", price: 1200, type: "Apartment" },
    { id: 2, title: "3 Bed House", location: "Heaton", price: 1600, type: "House" },
    { id: 3, title: "Studio Flat", location: "City Centre", price: 900, type: "Flat" },
    { id: 4, title: "1 Bed Flat", location: "Sandyford", price: 1000, type: "Flat" },
    { id: 5, title: "Luxury Apartment", location: "City Centre", price: 1800, type: "Apartment" },
  ];

  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredData = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchText.toLowerCase()) ||
      property.location.toLowerCase().includes(searchText.toLowerCase());

    const matchesType = selectedType === "All" || property.type === selectedType;

    const matchesMin = minPrice === "" || property.price >= parseInt(minPrice);
    const matchesMax = maxPrice === "" || property.price <= parseInt(maxPrice);

    return matchesSearch && matchesType && matchesMin && matchesMax;
  });

  return (
    <section className="px-6 py-10 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Find Your Ideal Property</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search title or location"
            className="col-span-2 p-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:ring-2 shadow-sm"
          />

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="col-span-1 p-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:ring-2 shadow-sm"
          >
            <option value="All">All Types</option>
            <option value="Flat">Flat</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
          </select>

          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min Price"
            className="p-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:ring-2 shadow-sm"
          />

          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max Price"
            className="p-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:ring-2 shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.map((property) => (
            <div
              key={property.id}
              className="p-6 bg-white rounded-2xl border border-gray-200 shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">{property.title}</h3>
              <p className="text-gray-500">{property.location}</p>
              <p className="text-lg text-blue-600 font-semibold mt-2">£{property.price} / month</p>
              <span className="inline-block mt-2 text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {property.type}
              </span>
            </div>
          ))}

          {filteredData.length === 0 && (
            <p className="col-span-full text-center text-gray-500 text-lg">No matching properties found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchPropertiesSection;

