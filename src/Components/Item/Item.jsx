import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`} className="item-link">
        {/* Image with scroll-to-top fix */}
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name || "Product image"}
          className="item-image"
        />

        {/* Product Name */}
        <p className="item-name">{props.name}</p>

        {/* Product Prices */}
        <div className="item-prices">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
