import React from "react";
import { addToCart, removeFromCart } from "../Utilis/FakeDb";

const CardBox = (props) => {
  const { id, image_url, name, description } = props.cards;

  const handleAddCart = () => {
    addToCart(id);
  };
  const handleRemoveCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="w-96">
      <img className="w-96" src={image_url} alt="" />
      <h2 className="text-xl font-bold py-2">{name}</h2>
      <p className="py-2 text-base">{description}</p>
      <p>{id}</p>
      <button
        onClick={() => handleAddCart(id)}
        className="w-full btn btn-success text-white text-xl"
      >
        AddCart
      </button>
      <button
        onClick={() => handleRemoveCart(id)}
        className="w-full btn btn-success text-white text-xl"
      >
        remove
      </button>
    </div>
  );
};

export default CardBox;
