import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
    const {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems,
        getTotalCartAmount
    } = useContext(ShopContext);

    const removeCompletely = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    };

    const filteredProducts = all_product.filter((product) => cartItems[product.id] > 0);

    const handleCheckout = () => {
        // You can integrate Stripe/Razorpay here
        alert("✅ Order placed successfully!\nThank you for shopping 🛍️");
        setCartItems({});
        localStorage.removeItem("cartItems");
    };

    return (
        <div className="cartitems">
            <h1>Your Cart</h1>

            {filteredProducts.length === 0 ? (
                <p style={{ textAlign: "center", marginTop: "2rem" }}>🛒 Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items-format-main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr />

                    {filteredProducts.map((item) => (
                        <div className="cart-items-format cart-items-format-main" key={item.id}>
                            <img src={item.image} alt={item.name} className="carticon-product-icon" />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <div className="cart-quantity-controls">
                                <button onClick={() => removeFromCart(item.id)}>-</button>
                                <span>{cartItems[item.id]}</span>
                                <button onClick={() => addToCart(item.id)}>+</button>
                            </div>
                            <p>${item.new_price * cartItems[item.id]}</p>
                            <img
                                className="cartitems-remove-icon"
                                src={remove_icon}
                                alt="Remove"
                                onClick={() => removeCompletely(item.id)}
                            />
                        </div>
                    ))}

                    <hr />

                    <div className="cartitems-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                            <button className="checkout-btn" onClick={handleCheckout}>
                                🛒 Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItems;
