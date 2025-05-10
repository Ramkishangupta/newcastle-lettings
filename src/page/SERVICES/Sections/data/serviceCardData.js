import { FaHome, FaSearch, FaRegBuilding, FaHandshake } from "react-icons/fa";

const serviceCardData = [
  {
    backgroundImage: "https://ezadxdiarsm.exactdn.com/wp-content/uploads/2019/10/North_Elevation_as_proposed-preview.jpg", // Replace with actual image URL
    icon: FaHome,
    title: "Buy a Home",
    description: "Explore a wide variety of homes for sale that meet your budget and needs.",
    link: "/buy-home",
  },
  {
    backgroundImage: "https://ezadxdiarsm.exactdn.com/wp-content/uploads/2019/03/SWnewcastle-127-1.jpg", // Replace with actual image URL
    icon: FaRegBuilding,
    title: "Rent a Property",
    description: "Find rental properties with flexible terms and great amenities.",
    link: "/rent-property",
  },
  {
    backgroundImage: "https://ezadxdiarsm.exactdn.com/wp-content/uploads/2019/01/Asset-valuation-480x660.jpg", // Replace with actual image URL
    icon: FaSearch,
    title: "Commercial Listings",
    description: "Browse commercial spaces for rent or sale in prime locations.",
    link: "/commercial-listings",
  },
  {
    backgroundImage: "https://ezadxdiarsm.exactdn.com/wp-content/uploads/2019/03/Whisky-3.jpg", // Replace with actual image URL
    icon: FaHandshake,
    title: "Sell Your Property",
    description: "Get the best deal when selling your property with our expert services.",
    link: "/sell-property",
  },
];

export default serviceCardData;
