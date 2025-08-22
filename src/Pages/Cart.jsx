import React from "react";
import CartItems from '../Components/CartItems/CartItems'
import Checkout from "../Components/Checkout/Checkout";

const Cart = () => {
    return (
        <div>
            <CartItems></CartItems>
            <Checkout></Checkout>
        </div>
    )
}

export default Cart