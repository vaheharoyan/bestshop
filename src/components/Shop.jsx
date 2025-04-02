import React from "react";
import { useCart } from "../context/CartContext";
import Product from "./Product";

const products = [
  { id: 1, name: "Laptop", price: 999, image: "https://img.mta.ua/image/cache/data/foto/z868/868176/photos/Lenovo-82K2028DPB-57-Shadow-Black-02-600x600.jpg" },
  { id: 2, name: "Smartphone", price: 499, image: "https://redstore.am/uploads/shop/products/large/bd83857a96d13219cc96ac83c54c3b74.png" },
  { id: 3, name: "Headphones", price: 199, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1741643688229" },
  { id: 4, name: "Tablet", price: 349, image: "https://www.jbhifi.com.au/cdn/shop/files/776198-Product-0-I-638646416412601254.jpg?v=1729044914" },
  { id: 5, name: "Gaming Mouse", price: 89, image: "https://images.evga.com/products/gallery/png/903-W1-17BK-KR_LG_1.png" },
  { id: 6, name: "Keyboard", price: 129, image: "https://image.made-in-china.com/155f0j00KgnqBYiWfPcv/Computer-Mini-Keyboard-Colorful-LED-Backlit-61-Keys-RGB-Gaming-60-Mechanical-Keyboard.webp" },
  { id: 7, name: "Monitor", price: 279, image: "https://i5.walmartimages.com/seo/LG-27-UltraGear-FHD-1ms-165Hz-Gaming-Monitor-with-AMD-FreeSync-Premium-Black-Stabilizer-1920-x-1080-27GQ40W-B_e4036b67-de28-4cab-b2d4-ba2a820d6c88.28d9140e64afac9f20c8c102a5e91468.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" },
  { id: 8, name: "Smartwatch", price: 149, image: "https://en-pk.svestonwatches.com/cdn/shop/files/Zenvibe_Ad_1_Blue_1800x1800.jpg?v=1742081253" },
];

function Shop() {
  const { addToCart } = useCart(); 

  return (
    <div className="shop-container">
      <h2>Shop</h2>
      <div className="shop-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
