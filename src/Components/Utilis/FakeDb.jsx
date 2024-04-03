const addToCart = (id) => {
  const shopping = {};

  const Quantity = shopping[id];
  if (Quantity) {
    const newQuantity = parseInt(Quantity) + 1;
    shopping[id] = newQuantity;
  } else {
    shopping[id] = 1;
  }

  localStorage.setItem("Shopping-cart", JSON.stringify(shopping));
};

export { addToCart };
