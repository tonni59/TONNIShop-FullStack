// src/Components/RelatedProducts/RelatedProducts.jsx
import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import all_product from "../Assets/all_product";

const RelatedProducts = ({ category, excludeId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (!category) return;
    const related = all_product
      .filter(p => p.category === category && p.id !== excludeId)
      .slice(0, 8);
    setRelatedProducts(related);
  }, [category, excludeId]);

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item) => (
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

export default RelatedProducts;
