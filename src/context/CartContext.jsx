import {  createContext, useContext, useEffect, useState } from "react";

//Cart Context
const CartContext = createContext();

//Custom hook for accessing context
export const useCart = () => useContext(CartContext);

//Context provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem("Cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(()=>{
        localStorage.setItem("Cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (newProduct) => {
        setCart((prev) => {
            const existingProduct = prev.find((product) => product.id === newProduct.id);
            if (existingProduct) {
                return prev.map((product) =>
                    product.id === existingProduct.id ? { ...product, quantity: product.quantity + 1 } : product
                );
            }
            return [...prev, { ...newProduct, quantity: 1 }];
        });
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    }

    const incrementQuantity = (productId) => {
        setCart(cart.map(
            (product) => product.id === productId
                ? { ...product, quantity: product.quantity + 1 }
                : product
        ));
    }

    const decrementQuantity = (productId) => {
        setCart(cart.map(
            (product) => product.id === productId
                ? { ...product, quantity: Math.max(1, product.quantity - 1) }
                : product
        ));
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity}} >
            {children}
        </CartContext.Provider>
    )
}