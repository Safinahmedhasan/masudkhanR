import React from "react";

const CardBox = (props) => {
  console.log(props);

  return (
    <div>
      <div>
        <h2>{props.cards.altSpellings[0]}</h2>
      </div>
    </div>
  );
};

export default CardBox;
