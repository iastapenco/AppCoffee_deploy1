import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./cart_widget.css";

const CartWidget = () => {
  const [cart] = useContext(CartContext);

  return (
    <Link to={"/cart"} style={{ textDecoration: "none" }}>
      <div className="carrito">
        <ShoppingCartIcon sx={{ fontSize: "200%" }} />
        <p className="number">{cart && cart.quantity ? cart.quantity : 0}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
