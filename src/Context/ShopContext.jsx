// src/Context/ShopContext.jsx
import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// Build a cart object with all product ids initialized to 0
const buildDefaultCart = (products) => {
  const cart = {};
  products.forEach(p => { cart[p.id] = 0; });
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [allProducts] = useState(all_product);
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("cartItems");
      if (saved) return JSON.parse(saved);
    } catch {}
    return buildDefaultCart(all_product);
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id, qty = 1) =>
    setCartItems(prev => ({ ...prev, [id]: (prev[id] || 0) + qty }));

  const removeFromCart = (id, qty = 1) =>
    setCartItems(prev => ({ ...prev, [id]: Math.max(0, (prev[id] || 0) - qty) }));

  const removeItemCompletely = (id) =>
    setCartItems(prev => ({ ...prev, [id]: 0 }));

  const getTotalCartAmount = () =>
    allProducts.reduce((sum, p) => sum + (cartItems[p.id] || 0) * Number(p.new_price || 0), 0);

  const getTotalCartItems = () =>
    Object.values(cartItems).reduce((a, b) => a + (b || 0), 0);

  const contextValue = {
    all_product: allProducts,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    removeItemCompletely,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
