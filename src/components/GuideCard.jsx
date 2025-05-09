import React from "react";
import { Link } from "react-router-dom";

const GuideCard = ({ backgroundImage, title, subtitle, linkTo }) => {
  return (
    <Link to={linkTo}>
      <div
        className="relative w-full h-64 md:h-80 lg:h-96 bg-cover bg-center rounded overflow-hidden border-white cursor-pointer "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h3 className="text-sm md:text-base font-semibold uppercase">{subtitle}</h3>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">{title}</h1>
          </div>
        </div>
        <div className="absolute inset-0 border-2 border-white pointer-events-none"></div>
      </div>
    </Link>
  );
};

export default GuideCard;
