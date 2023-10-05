import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cart.map((cat, index) => (
        <div key={index}>{/* Display cart item information */}</div>
      ))}
    </div>
  );
};

export default Cart;
