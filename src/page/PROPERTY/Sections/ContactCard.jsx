import React from "react";
import {
  FaPhone,
  FaFileAlt,
  FaBuilding,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";
import ActionButton from "../../../components/ActionButton";

const ContactCard = ({
  name = "Mark Convery",
  role = "Surveyor",
  phone = "0191 269 0103",
  imageUrl = "https://via.placeholder.com/100",
}) => {
  return (
    <section
      className="max-w-[400px] w-full mx-auto p-6 bg-white rounded-xl shadow-lg text-center space-y-6"
      aria-labelledby="contact-title"
    >
      <div className="border-t-4 border-blue-600 w-20 mx-auto mb-4" />

      <img
        className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
        src={imageUrl}
        alt={`Profile picture of ${name}`}
      />

      <div>
        <h2 id="contact-title" className="text-xl font-semibold">
          {name}
        </h2>
        <p className="text-sm text-gray-600">{role}</p>
        <a
          href={`tel:${phone}`}
          className="text-sm text-blue-600 flex items-center justify-center gap-1 mt-1"
        >
          <FaPhone /> {phone}
        </a>
      </div>

      <button
        className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm"
        aria-label="Contact Now"
      >
        CONTACT
      </button>

      <div className="space-y-3">
        <ActionButton icon={<FaFileAlt />} label="Brochure" />
        <ActionButton icon={<FaBuilding />} label="Floor Plan" />
        <ActionButton icon={<FaCalendarAlt />} label="Arrange a Viewing" />
        <ActionButton icon={<FaPaperPlane />} label="Send Details" />
      </div>

      <button
        className="w-full py-3 bg-[#0c1830] text-white font-bold rounded hover:bg-[#172a45] transition"
        aria-label="Register Your Requirement"
      >
        REGISTER YOUR REQUIREMENT
      </button>
    </section>
  );
};

export default ContactCard;
