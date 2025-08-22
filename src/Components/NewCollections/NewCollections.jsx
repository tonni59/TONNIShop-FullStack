// src/Components/NewCollections/NewCollections.jsx
import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import new_collections from "../Assets/new_collections";


const NewCollections = () => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection(new_collections);
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {collection.map((item) => (
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

export default NewCollections;
