import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const EmptyCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const cid = cart._id;

  const submit = async () => {
    const emptyCart = { ...cart, products: [], quantity: 0 };
    setCart(emptyCart);

    const response = await fetch(`/api/carts/${cid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return alert("Se vació el carrito");
    }
  };

  return (
    <div>
      {cart.length !== 0 ? (
        <button type="submit" class="btn btn-danger mt-3" onClick={submit}>
          Vaciar carrito
        </button>
      ) : null}
    </div>
  );
};

export default EmptyCart;
