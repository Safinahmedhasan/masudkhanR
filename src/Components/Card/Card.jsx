import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";

const Card = () => {
  const [cardData, setCardData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((card) => setCardData(card));
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="container mx-auto my-5">
      <div className="grid grid-cols-3 gap-5">
        {showAll
          ? cardData.map((card) => (
              <CardBox key={card.id} cards={card}></CardBox>
            ))
          : cardData
              .slice(0, 5)
              .map((card) => <CardBox key={card.id} cards={card}></CardBox>)}
      </div>
      <div className="flex justify-center items-center mt-20">
        {!showAll && (
          <button className="btn btn-primary" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
