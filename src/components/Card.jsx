import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ image, title, location, Place, price, beds, baths, floors }) => {
  return (
    <div className="w-[320px] h-auto rounded-lg shadow-md overflow-hidden border border-gray-200 bg-white flex flex-col">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center text-blue-900 flex-grow">
        <h2 className="text-base sm:text-lg font-medium leading-relaxed ">
          {title}
          <br />
          {location}
        </h2>
        <h3 className="text-xl font-bold mt-2 underline uppercase">{Place}</h3>
        <p className="text-lg font-semibold mt-2">
          ${price}
          <span className="text-base font-normal">pcm</span>
        </p>
        <p className="text-sm mt-2">
          Beds: <span className="font-medium">{beds}</span>{' '}
          Baths: <span className="font-medium">{baths}</span>{' '}
          Floors: <span className="font-medium">{floors}</span>
        </p>
      </div>
      <button
        type="button"
        className="w-full bg-green-600 hover:bg-white rounded-b-lg hover:text-green-600 hover:border-2 border-green-600 text-white font-semibold py-2 text-center cursor-pointer"
      >
        View
      </button>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  baths: PropTypes.number.isRequired,
  floors: PropTypes.number.isRequired,
};

export default Card;
