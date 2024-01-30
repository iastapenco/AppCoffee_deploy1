import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";

const TotalAMount = () => {
  const [cart] = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const user_premium = dataUser ? dataUser.user_premium : false;

  useEffect(() => {
    if (cart && cart.products) {
      const total = cart.products.reduce(
        (total, product) => total + product.id_prod.price,
        0
      );
      setTotalAmount(total);
    }
  }, [cart]);

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
