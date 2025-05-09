import React from "react";
import GuideCard from "../../../components/GuideCard";
import guideCardsData from "./Data/guideCardsData"; 

function GuideSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {guideCardsData.map(card => (
        <GuideCard
          key={card.id}
          backgroundImage={card.backgroundImage}
          title={card.title}
          subtitle={card.subtitle}
          linkTo={card.linkTo}
        />
      ))}
    </div>
  );
}

export default GuideSection;
