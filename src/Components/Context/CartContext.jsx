import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);

   Swal.fire({
  toast: true,
  position: "top-end",
  icon: "success",
  title: "Added to cart!",
  text: `${product.name} has been added.`,
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  background: "#e6fffa",
  color: "#065f46",
});

  };

  // Remove item (remove one only)
  const removeFromCart = (id) => {
    setCart((prev) => {
      const index = prev.findIndex((item) => item.id === id);
      if (index === -1) return prev;

      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
