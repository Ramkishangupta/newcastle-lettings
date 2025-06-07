import React, { useState, useEffect } from "react";

const SearchFilters = ({ filters, setFilters, availableTypes }) => {
  const [localMin, setLocalMin] = useState(filters.minPrice);
  const [localMax, setLocalMax] = useState(filters.maxPrice);

  // Sync local price inputs with filter updates (e.g., when Reset is clicked)
  useEffect(() => {
    setLocalMin(filters.minPrice);
    setLocalMax(filters.maxPrice);
  }, [filters.minPrice, filters.maxPrice]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const confirmPrice = () => {
    setFilters((prev) => ({
      ...prev,
      minPrice: localMin,
      maxPrice: localMax,
    }));
  };

  const resetFilters = () => {
    setFilters({
      location: "",
      type: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  const inputStyle =
    "p-2 rounded bg-white text-black border border-gray-300 outline-none";

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Location"
          className={inputStyle}
        />

        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className={inputStyle}
        >
          <option value="">All Types</option>
          {availableTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={localMin}
          onChange={(e) => setLocalMin(e.target.value)}
          placeholder="Min Price"
          className={inputStyle}
        />
        <input
          type="number"
          value={localMax}
          onChange={(e) => setLocalMax(e.target.value)}
          placeholder="Max Price"
          className={inputStyle}
        />

        <button
          onClick={confirmPrice}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Confirm
        </button>
      </div>

      <div className="flex justify-end">
        <button
          onClick={resetFilters}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Reset Filters
        </button>
      </div>
    </>
  );
};

export default SearchFilters;
