import React, { useState } from 'react';
import './Product_Card.css'
import { Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { CartContext } from './CartProvider';
import sidecart_product from './sidecart-product';
import Sidecart from './sidecart';
const ProductCard = ({ product,itemscount,setitemscount }) => {
    const {name, price, description, image, size } = product;
    const [selectedSize, setSelectedSize] = useState(Object.keys(size)[0]);

    const { addToCart } = useContext(CartContext);

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleimagehover = (event) => {
        event.target.src = image.back;
    };

    const handleimageunhover = (event) => {
        event.target.src = image.front;
    };

    const handleAddToCart = () => {
        setitemscount(itemscount+1);
        addToCart({ ...product, selectedSize , price: price[selectedSize]});
    };

    const totalPrice = price[selectedSize];

    return (
        <div className="product-card">
            <Typography className='header' variant="h6" component="h4">
                {name}
            </Typography>
            <img 
                onMouseOver={handleimagehover}
                onMouseOut={handleimageunhover}
            src={image.front} alt={name} />

            <div>
                <label className="sizelabel" htmlFor="size">Size: </label>
                <select id="size" value={selectedSize} onChange={handleSizeChange}>
                    {Object.entries(size).map(([sizeKey, available]) => (
                        available && <option key={sizeKey} value={sizeKey}>{sizeKey}</option>
                    ))}
                </select>
            </div>
            
            <p className='pricelabel'>Rs {totalPrice}</p>

            <button className="btn" type="button" onClick={handleAddToCart}>Add to Cart <ShoppingCartIcon className='icon'></ShoppingCartIcon></button>
        </div>
    );
};

export default ProductCard;
