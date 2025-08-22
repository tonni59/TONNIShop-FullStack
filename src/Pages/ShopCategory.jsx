import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      {/* Category Banner */}
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt={`${props.category} banner`}
      />

      {/* Sorting + Index */}
      <div className="shopcategory-indexshort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>

      {/* Products Grid */}
      <div className="shopcategory-products">
        {all_product
          .filter((item) => props.category === item.category)
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      {/* Load More Button */}
      <div className="shopcategory-loadmore">
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
