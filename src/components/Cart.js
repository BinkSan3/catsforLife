import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, onClose, addToCart, removeFromCart, cart }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((cat, index) => (
          <li key={index}>
            {cat.name} - {cat.price}
            <button onClick={() => removeFromCart(cat, index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default CartModal;
