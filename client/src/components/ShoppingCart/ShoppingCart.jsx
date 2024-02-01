import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItems from "../CartItems/CartItems";
import TotalAMount from "../TotalAmount/TotalAMount";
import { Link } from "react-router-dom";
import FinishPurchase from "../FinishPurcahse/FinishPurchase";
import EmptyCart from "../EmptyCart/EmptyCart";

const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const cid = dataUser.cart;

  useEffect(() => {
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
      setCart({ ...data, quantity: quantity });
    };

    fetchCart();
  }, []);

  return (
    <>
      <div>
        <Link to={"/logout"}>
          <button
            id="logout"
            type="button"
            className="btn btn-primary p-2 btn_logout m-3"
          >
            Logout
          </button>
        </Link>
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center gap-3">
        <h3 className="center">
          Total de productos en el carrito:
          {cart && cart.quantity ? cart.quantity : 0}
        </h3>
        <CartItems />
        <TotalAMount />
        <FinishPurchase />
        <EmptyCart />
      </div>
    </>
  );
};

export default ShoppingCart;
