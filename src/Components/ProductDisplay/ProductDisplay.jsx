import React, { useContext } from "react";
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // 🛡️ Handle case when product is not loaded yet
    if (!product) {
        return <div className="productdisplay">Loading product details...</div>;
    }

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_icon} alt="star" />
                    <img src={star_dull_icon} alt="star" />
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Stay warm and stylish this winter with our premium insulated hooded winter coat. Designed for extreme cold weather, this coat features a water-resistant outer shell, ultra-soft fleece lining, and high-density synthetic insulation to keep you cozy in temperatures as low as -20°C. 
                    <br /><br />
                    <strong>Key Features:</strong><br />
                    Windproof and water-resistant outer shell<br />
                    Thermal insulation with breathable fleece lining<br />
                    Adjustable drawstring hood and waist<br />
                    Zipper and button front closure<br />
                    Multiple deep pockets for storage<br />
                    Available in multiple colors and sizes<br />
                    <br />
                    <strong>Ideal for:</strong><br />
                    Daily wear, winter travel, snow sports, hiking, and outdoor work.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category: </span>Women, T-Shirt, Crop-Top</p>
                    <p className="productdisplay-right-category"><span>Tags: </span>Modern, Latest</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
