import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";

const Card = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((card) => setCardData(card));
    const data = cardData.slice(0, 10);
    setCardData(data);
  });
  return (
    <div>
      <div>
        {cardData.map((card) => (
          <CardBox cards={card} />
        ))}
      </div>
    </div>
  );
};

export default Card;
