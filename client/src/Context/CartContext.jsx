import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    let cid;
    if (dataUser) {
      cid = dataUser.cart;
    }

    const fetchCart = async () => {
      const response = await fetch(`/api/carts/${cid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      let quantity = 0;
      if (data && data.products) {
        quantity = data.products.reduce(
          (total, product) => total + product.quantity,
          0
        );
      }
      setCart({ ...data, products: [], quantity: quantity });
    };

    if (dataUser) {
      fetchCart();
    }
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
