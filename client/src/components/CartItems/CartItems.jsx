import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import CardCartItems from "../CardCartItems/CardCartItems";
import UpdateCart from "../UpdateCart/UpdateCart";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

const CartItems = () => {
  const [cart, setCart] = useContext(CartContext);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(`/api/carts/${dataUser.cart}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setData(data);
    };
    if (dataUser) {
      fetchCart();
    }
  }, [cart]);
  return (
    <div className="container d-flex flex-column">
      {data &&
        data.products &&
        data.products.map((product) => {
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
