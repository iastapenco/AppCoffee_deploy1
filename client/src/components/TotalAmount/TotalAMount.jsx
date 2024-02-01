import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const TotalAMount = () => {
  const [cart, setCart] = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const user_premium = dataUser ? dataUser.user_premium : false;

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(`/api/carts/${dataUser.cart}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      //setCart(data);
      if (data && data.products) {
        const total = data.products.reduce(
          (total, product) => total + product.id_prod.price * product.quantity,
          0
        );
        setTotalAmount(total);
      }
    };
    if (dataUser) {
      fetchCart();
    }
  }, [cart]);

  // useEffect(() => {
  //   if (cart && cart.products) {
  //     const total = cart.products.reduce(
  //       (total, product) => total + product.id_prod.price * product.quantity,
  //       0
  //     );
  //     setTotalAmount(total);
  //   }
  // }, [cart]);

  return (
    <div d-flex flex-column gap-3 justify-content-center>
      {user_premium ? (
        <h2 className=" text-center text-bg-success">
          Monto total ${0.9 * totalAmount}{" "}
        </h2>
      ) : (
        <h2 className="text-center text-bg-success">
          Monto total ${totalAmount}
        </h2>
      )}
      {user_premium ? (
        <h3 className=" text-center text-bg-info">
          Usted tiene 10% de descuento por ser usuario premium
        </h3>
      ) : (
        <h3 className="text-center text-bg-info">
          Hagase usuario premium y consiga un 10% de descuento en su compra
        </h3>
      )}
    </div>
  );
};

export default TotalAMount;
