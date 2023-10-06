import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CartModal = ({ isOpen, onClose, addToCart, removeFromCart, cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h1>Shopping Cart</h1>

      {cart.map((cat, index) => (
        <div key={index}>
          <p>{cat.name}</p> <p>£{cat.price}</p>
          <button onClick={() => removeFromCart(cat, index)}>Remove</button>
        </div>
      ))}

      <h3>Your Total: £{totalPrice}</h3>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default CartModal;
