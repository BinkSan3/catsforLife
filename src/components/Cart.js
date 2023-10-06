import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

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
    <ModalDiv isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <h1>Shopping Cart</h1>
        <button onClick={onClose}>Close</button>
      </div>

      {cart.map((cat, index) => (
        <div key={index}>
          <p>{cat.name}</p> <p>£{cat.price}</p>
          <button onClick={() => removeFromCart(cat, index)}>Remove</button>
        </div>
      ))}

      <h3>Your Total: £{totalPrice}</h3>
      <button onClick={onClose}>Continue shopping</button>
      <button onClick={() => checkout(cart)}>Checkout</button>
    </ModalDiv>
  );
};

export default CartModal;

const ModalDiv = styled.Modal`
  width: 33%;
`;
