import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItems from "../CartItems/CartItems";
import TotalAMount from "../TotalAmount/TotalAMount";
import { Link, useNavigate } from "react-router-dom";
import FinishPurchase from "../FinishPurchase/FinishPurchase";
import EmptyCart from "../EmptyCart/EmptyCart";

const ShoppingCart = () => {
  const [cart] = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="container d-flex justify-content-end align-items-center">
        {cart.length !== 0 ? (
          <Link to={"/logout"}>
            <button
              id="logout"
              type="button"
              className="btn btn-primary p-2 btn_logout m-3"
            >
              Logout
            </button>
          </Link>
        ) : null}

        <button
          type="button"
          className="btn btn-primary p-2 btn_logout m-3"
          onClick={() => navigate("/")}
        >
          Ir a Productos
        </button>
      </div>
      <div className="container-fluid d-flex flex-column justify-content-center gap-3">
        <h3 className="align-self-center">
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
