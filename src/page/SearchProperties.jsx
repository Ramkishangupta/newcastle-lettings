import React, { useState, useEffect } from 'react';

const SearchProperties = () => {
  const [purpose, setPurpose] = useState('for-rent');
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  // Dummy data to simulate an API response
  const mockData = [
    {
      id: 1,
      title: 'Modern Apartment in City Centre',
      price: '£950/month',
      beds: 2,
      baths: 1,
      area: '75 sqm',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      title: 'Cozy 1 Bedroom Flat',
      price: '£650/month',
      beds: 1,
      baths: 1,
      area: '45 sqm',
      image: 'https://via.placeholder.com/300x200'
    }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // In a real app, this is where you'd fetch from an API
      setProperties(mockData.filter(p => purpose === 'for-rent')); 
      setLoading(false);
    }, 1000);
  }, [purpose]);

  return (
    <div className="search-page" style={{ padding: '2rem' }}>
      <h2>Search Properties</h2>

      {/* Filter Bar */}
      <div style={{ marginBottom: '1rem' }}>
        <label>Purpose:&nbsp;</label>
        <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
          <option value="for-rent">For Rent</option>
          <option value="for-sale">For Sale</option>
        </select>
      </div>

      {/* Properties List */}
      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {properties.map((property) => (
            <div
              key={property.id}
              style={{
                border: '1px solid #ccc',
                padding: '1rem',
                width: '300px'
              }}
            >
              <img src={property.image} alt={property.title} style={{ width: '100%' }} />
              <h3>{property.title}</h3>
              <p>{property.price}</p>
              <p>{property.beds} Bed | {property.baths} Bath</p>
              <p>Area: {property.area}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProperties;
