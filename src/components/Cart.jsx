import React from "react";
import { NavLink } from "react-router-dom";

function Cart({ cart }) {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} className="cart-image" />
            <p>{item.name} - ${item.price} (x{item.quantity})</p>
          </div>
        ))
      )}
      <NavLink to="/" className="back-link">Back to Shop</NavLink>
    </div>
  );
}

export default Cart;
