import React from 'react';
import Card from '../../../components/Card';
import cardsData from './Data/cardsData';

const CardsSection = () => {
  return (
    <div className="flex flex-wrap gap-4 p-6 justify-center">
      {cardsData.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          location={item.location}
          place={item.Place}
          price={item.price}
          beds={item.beds}
          baths={item.baths}
          floors={item.floors}
        />
      ))}
    </div>
  );
};

export default CardsSection;
