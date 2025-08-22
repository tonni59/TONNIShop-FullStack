// src/Components/Popular/Popular.jsx
import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import all_product from "../Assets/all_product";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const popular = all_product
      .filter(p => p.category === "women")
      .slice(0, 8);
    setPopularProducts(popular);
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
