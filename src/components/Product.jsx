import React from "react";

function Product({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name} - ${product.price}</h3>
      <button onClick={() => addToCart(product)}>Buy</button>
    </div>
  );
}

export default Product;
