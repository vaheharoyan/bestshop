import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const qanakiAvelacum = (id) => {
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

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, qanakiAvelacum, qanakinvazecum, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
