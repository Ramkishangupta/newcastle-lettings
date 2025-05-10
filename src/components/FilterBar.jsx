const FilterBar = ({ purpose, setPurpose }) => {
  return (
    <div className="flex gap-4 mb-6 items-center">
      <label className="text-lg">Purpose:</label>
      <select
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="for-rent">For Rent</option>
        <option value="for-sale">For Sale</option>
      </select>
    </div>
  );
};

export default FilterBar;
