const addToCart = (id) => {
  let shopping = JSON.parse(localStorage.getItem("shopping-cart")) || {};
  shopping[id] = (shopping[id] || 0) + 1;
  localStorage.setItem("shopping-cart", JSON.stringify(shopping));
};

const removeFromCart = (id) => {
  let shopping = JSON.parse(localStorage.getItem("shopping-cart")) || {};
  if (shopping[id]) {
    shopping[id] = shopping[id] - 1;
    if (shopping[id] === 0) {
      delete shopping[id];
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shopping));
  }
};

export { addToCart, removeFromCart };
