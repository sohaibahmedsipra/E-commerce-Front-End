import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children, itemscount, setItemscount }) => {
    const [cartItems, setCartItems] = useState([]);

    const [carttotal, setCartTotal] = useState(0);
    const addToCart = (item) => {
        const existingItem = cartItems.find(
            (cartItem) => cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
        );

        if (existingItem) {
            const updatedItems = cartItems.map((cartItem) =>
                cartItem.id === item.id && cartItem.selectedSize === item.selectedSize
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            setCartItems(updatedItems);
            setCartTotal(carttotal + item.price);
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
            setCartTotal(carttotal + item.price);
        }
    };

    const removeFromCart = (productId, selectedSize, quantity) => {

        let exist = false;

        exist = cartItems.find(
            (cartItem) => cartItem.id === productId && cartItem.selectedSize === selectedSize
        );
        const updatedCartItems = cartItems.filter(
            (item) => item.id !== productId || item.selectedSize !== selectedSize
        );
        setCartItems(updatedCartItems);
        if (exist) {
            setItemscount(itemscount - quantity);
            setCartTotal(carttotal - exist.price * quantity);
        }

    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart , carttotal}}>
            {children}
        </CartContext.Provider>
    );
};
