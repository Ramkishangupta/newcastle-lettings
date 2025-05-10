import React from 'react';
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Reusable BackButton
const BackButton = ({ to = -1, label = "BACK TO LISTINGS" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="text-left m-8 text-sm font-semibold text-[#0C1635] flex items-center gap-2 cursor-pointer font-roboto-condensed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0C1635]"
      aria-label={label}
    >
      <FaArrowLeft />
      <span>{label}</span>
    </button>
  );
};

// Reusable TitleSection
const TitleSection = ({ title, subtitle, address }) => (
  <div className="text-center font-sans text-[#0C1635] px-6 py-10">
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight font-plusJakarta">
      {title}
      <br />
      {subtitle}
    </h1>

    <div className="my-4 flex justify-center text-[#0C1635]">
      <FaMapMarkerAlt className="text-xl" />
    </div>

    <p className="text-[#64748B] text-base md:text-lg border-t border-dotted border-[#CBD5E1] inline-block pt-2 mt-2">
      {address}
    </p>
  </div>
);

// Main Header Component
const Header = ({
  title = 'Former Community Centre For Sale',
  subtitle = 'in Byker',
  address = 'Former Community Centre For Sale in Byker Byker Community Centre, Headlam Green Newcastle upon Tyne Tyne and Wear NE6 2DX',
  backTo = -1,
  backLabel = 'BACK TO LISTINGS'
}) => {
  return (
    <div>
      <BackButton to={backTo} label={backLabel} />
      <TitleSection title={title} subtitle={subtitle} address={address} />
    </div>
  );
};

export default Header;
