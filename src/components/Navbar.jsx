import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.qanak, 0);

  return (
    <nav className="navbar">
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/cart">Cart ({totalItems})</NavLink>
    </nav>
  );
}

export default Navbar;
