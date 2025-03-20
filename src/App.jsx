import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./index.css"; 

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
  
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {

        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qanak: item.qanak + 1 } : item
        );
      } else {
     
        return [...prevCart, { ...product, qanak: 1 }];
      }
    });
  };

  return (
    <section>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </section>
      

  );
}

export default App;
