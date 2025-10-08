import React, { createContext, useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already in cart
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        //Increment quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        
      } else {
        toast.success("Product added to the cart")
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.success("Product was removed");
  };

  const updateCart = (updatedItems) => {
    setCart(updatedItems);
  };

  

  // const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalItems = cart.length;

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateCart,totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
