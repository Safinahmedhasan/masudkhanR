import React from "react";

const CardBox = (props) => {
  const { image_url, name, description } = props.cards;
  return (
    <div className="w-96">
      <img className="w-96" src={image_url} alt="" />
      <h2 className="text-xl font-bold py-2">{name}</h2>
      <p className="py-2 text-base">{description}</p>
      <button className="w-full btn btn-success text-white text-xl">
        Open
      </button>
    </div>
  );
};

export default CardBox;
