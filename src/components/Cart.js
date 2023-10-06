import React from "react";
import Modal from "react-modal";
import "./Cart.css";

Modal.setAppElement("#root");

const CartModal = ({
  isOpen,
  onClose,
  addToCart,
  removeFromCart,
  cart,
  checkout,
}) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <Modal className="random" isOpen={isOpen} onRequestClose={onClose}>
      <div id="closeButton">
        <h2>Shopping Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>

      {cart.map((cat, index) => (
        <div id="catStuffs" key={index}>
          <p>{cat.name}</p> <p>£{cat.price}</p>
          <button onClick={() => removeFromCart(cat, index)}>Remove</button>
        </div>
      ))}

      <h3>Your Total: £{totalPrice}</h3>

      <div id="buttonsDiv">
        <button onClick={onClose}>Continue shopping</button>
        <button onClick={() => checkout(cart)}>Checkout</button>
      </div>
    </Modal>
  );
};

export default CartModal;
