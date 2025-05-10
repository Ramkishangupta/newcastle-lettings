import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({
  id,
  image,
  title,
  location,
  place,
  price,
  beds,
  baths,
  floors
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property`); 
  };

  return (
    <div className="w-[320px] h-auto rounded-lg shadow-md overflow-hidden border border-gray-200 bg-white flex flex-col">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      {/* Text Content Section */}
      <div className="p-4 text-center text-blue-900 flex-grow">
        <h2 className="text-base sm:text-lg font-medium leading-relaxed">
          {title}
          <br />
          <span className="text-sm text-blue-900">{location}</span>
        </h2>
        <h3 className="text-xl font-bold mt-2 underline uppercase">{place}</h3>
        <p className="text-lg font-semibold mt-2">
          ${price}
          <span className="text-base font-normal"> pcm</span>
        </p>
        <p className="text-sm mt-2">
          <span className="font-medium">Beds:</span> {beds}{' '}
          <span className="font-medium">Baths:</span> {baths}{' '}
          <span className="font-medium">Floors:</span> {floors}
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center p-4">
        <button
          type="button"
          onClick={handleClick}
          className="w-[200px] text-[#233366] border-2 border-[#233366] font-semibold py-2 text-center cursor-pointer transition-colors duration-300 hover:bg-[#233366] hover:text-white"
          aria-label={`View details for ${title}`} 
        >
          View
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  floors: PropTypes.number.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Card;
