import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cart }) {
 
  const totalItems = cart.reduce((sum, item) => sum + item.qanak, 0);

  return (
    <nav>
      <NavLink to="/">Shop</NavLink> 
       <NavLink to="/cart">Cart ({totalItems})</NavLink>
    </nav>
  );
}

export default Navbar;
