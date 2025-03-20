import React from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "Lenovo ideapad gaming 3", price: 999, image: "https://tv-it.com/storage/shada/lenovo/lenovo-ideapadgaming3-15imh05-1-p1.webp" },
  { id: 2, name: "iphone 14", price: 499, image: "https://redstore.am/uploads/shop/products/large/bd83857a96d13219cc96ac83c54c3b74.png" },
  { id: 3, name: "Headphones bBeats Studio Pro Wireless Headphones - Navy", price: 199, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1741643688229" },
];

function Shop({ addToCart }) {
  return (
    <div className="container">
      <h2>Shop</h2>
      <div className="products-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
