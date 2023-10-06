import React from "react";
import Modal from "react-modal";

const CartModal = ({ isOpen, onClose, addToCart, removeFromCart, cart }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((cat) => (
          <li key={cat.id}>
            {cat.name} - {cat.price}
            <button onClick={() => removeFromCart(cat.id)}>Remove</button>
            <button onClick={() => addToCart(cat.id)}>Add</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default CartModal;
