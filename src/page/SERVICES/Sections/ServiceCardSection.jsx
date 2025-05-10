import React from "react";
import Card from "./ServiceCard";
import data from "./data/serviceCardData";

const ServiceCardSection = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center pt-30 pb-15">
      {data.map((service, index) => (
        <Card
          key={index}
          backgroundImage={service.backgroundImage}
          icon={service.icon}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default ServiceCardSection;
