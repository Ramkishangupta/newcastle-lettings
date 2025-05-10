import { FaKey, FaTag, FaRulerCombined } from 'react-icons/fa';

const PropertyInfoTable = ({ type, price, size }) => {
  return (
    <div className="overflow-hidden">
      <h2 className="text-2xl font-semibold text-[#0C1635] mb-4">Key Selling Points</h2>
      <div className="grid grid-cols-3 bg-[#0C1635] text-white text-center font-semibold shadow-md">
        <div className="flex items-center justify-center gap-2 py-3 border-r"><FaKey /> TYPE</div>
        <div className="flex items-center justify-center gap-2 py-3 border-r"><FaTag /> PRICE</div>
        <div className="flex items-center justify-center gap-2 py-3"><FaRulerCombined /> SIZE</div>
      </div>
      <div className="grid grid-cols-3 text-center text-[#4A5568] bg-[#F7FAFC] font-medium">
        <div className="py-4 border-r">{type}</div>
        <div className="py-4 border-r">For Sale: £{price.toLocaleString()}</div>
        <div className="py-4">{size}</div>
      </div>
    </div>
  );
};

export default PropertyInfoTable;
