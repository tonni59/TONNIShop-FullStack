import React, { useContext, useState } from "react";
import "./Checkout.css";
import { ShopContext } from "../../Context/ShopContext";

const Checkout = () => {
    const { cartItems, all_product, getTotalCartAmount, setCartItems } = useContext(ShopContext);
    const [coupon, setCoupon] = useState("");
    const [discount, setDiscount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("Bkash");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleApplyCoupon = () => {
        if (coupon === "SAVE10") {
            setDiscount(0.1);
        } else {
            alert("❌ Invalid Coupon Code");
            setDiscount(0);
        }
    };

    const handleConfirmOrder = () => {
        if (!phoneNumber) {
            alert("⚠️ Please enter your " + paymentMethod + " number.");
            return;
        }

        const orderDetails = {
            items: all_product.filter(p => cartItems[p.id] > 0).map(item => ({
                name: item.name,
                quantity: cartItems[item.id],
                total: item.new_price * cartItems[item.id]
            })),
            subtotal: subtotal.toFixed(2),
            discount: (subtotal * discount).toFixed(2),
            total: total.toFixed(2),
            paymentMethod,
            phoneNumber,
        };

        console.log("✅ Order Placed:", orderDetails);

        alert("✅ Order Confirmed! Thank you for shopping.");
        setCartItems({});
    };

    const filteredProducts = all_product.filter(product => cartItems[product.id] > 0);
    const subtotal = getTotalCartAmount();
    const total = subtotal - subtotal * discount;

    return (
        <div className="checkout">
            <h1>Checkout</h1>

            <div className="checkout-summary">
                <h2>Order Summary</h2>
                {filteredProducts.map((item) => (
                    <div className="checkout-item" key={item.id}>
                        <p>{item.name} x {cartItems[item.id]}</p>
                        <p>${item.new_price * cartItems[item.id]}</p>
                    </div>
                ))}
                <hr />
                <div className="checkout-totals">
                    <p>Subtotal: ${subtotal}</p>
                    <p>Discount: -${(subtotal * discount).toFixed(2)}</p>
                    <p><strong>Total: ${total.toFixed(2)}</strong></p>
                </div>
            </div>

            <div className="checkout-coupon">
                <h3>Apply Coupon</h3>
                <input
                    type="text"
                    placeholder="Enter coupon"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                />
                <button onClick={handleApplyCoupon}>Apply</button>
            </div>

            <div className="checkout-payment">
                <h3>Select Payment Method</h3>
                <div className="payment-options">
                    {["Bkash", "Nagad", "Rocket"].map((method) => (
                        <label key={method}>
                            <input
                                type="radio"
                                name="payment"
                                value={method}
                                checked={paymentMethod === method}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            {method}
                        </label>
                    ))}
                </div>
                <input
                    type="text"
                    placeholder={`Enter your ${paymentMethod} number`}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="payment-input"
                />
            </div>

            <button className="checkout-confirm" onClick={handleConfirmOrder}>
                Confirm Order
            </button>
        </div>
    );
};

export default Checkout;
