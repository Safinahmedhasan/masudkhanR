import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";

const Card = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((card) => {
        const data = card.slice(0, 5);
        setCardData(data);
      });
  }, []);
  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-3 gap-5">
        {cardData.map((card) => (
          <CardBox cards={card} />
        ))}
      </div>
    </div>
  );
};

export default Card;
