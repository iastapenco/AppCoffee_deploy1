import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import CardCartItems from "../CardCartItems/CardCartItems";
import UpdateCart from "../UpdateCart/UpdateCart";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

const CartItems = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="container d-flex flex-column">
      {cart &&
        cart.products &&
        cart.products.map((product) => {
          return (
            <div key={product._id} className="product_container">
              <div className="card d-flex flex-column">
                <CardCartItems data={product} />
                <UpdateCart data={product} />
                <DeleteProduct data={product} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartItems;
