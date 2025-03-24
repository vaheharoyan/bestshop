import React from "react";
import { NavLink } from "react-router-dom";

function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const qanakiavelacum = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qanak: item.qanak + 1 } : item
      )
    );
  };

  const qanakinvazecum = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.qanak > 1
            ? { ...item, qanak: item.qanak - 1 }
            : item
        )
        .filter((item) => item.qanak > 0)
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="cart-controls">
                <button className="cart-btn" onClick={() => qanakinvazecum(item.id)}>-</button>
                <span>{item.qanak}</span>
                <button className="cart-btn" onClick={() => qanakiavelacum(item.id)}>+</button>
              </div>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <NavLink to="/" className="back-to-shop">Back to Shop</NavLink>
    </div>
  );
}

export default Cart;
