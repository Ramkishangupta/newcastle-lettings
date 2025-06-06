import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white text-black rounded-xl shadow hover:shadow-lg overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p className="text-gray-700">{property.location} • {property.type}</p>
        <p className="text-blue-600 font-bold mt-2">₹{property.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
