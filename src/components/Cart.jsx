import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, qanakiAvelacum, qanakinvazecum, removeFromCart } = useCart();

  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.qanak, 0);

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
              <p>Price: ${item.price}</p>
              <p>Total: ${item.price * item.qanak}</p>
              <div className="cart-controls">
                <button className="cart-btn" onClick={() => qanakinvazecum(item.id)}>-</button>
                <span>{item.qanak}</span>
                <button className="cart-btn" onClick={() => qanakiAvelacum(item.id)}>+</button>
              </div>
            </div>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3 className="total-price">Total Price: ${totalCartPrice}</h3>
      <Link to="/" className="back-to-shop">Back to Shop</Link>
    </div>
  );
}

export default Cart;
