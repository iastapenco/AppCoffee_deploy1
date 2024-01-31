import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./cart_widget.css";

const CartWidget = () => {
  const [cart] = useContext(CartContext);
  let [quantity, setQuantity] = useState(cart.quantity);

  useEffect(() => {
    setQuantity(cart.quantity);
  }, [cart.quantity]);

  return (
    <Link to={"/cart"} style={{ textDecoration: "none" }}>
      <div className="carrito">
        <ShoppingCartIcon sx={{ fontSize: "200%" }} />
        <p className="number">{quantity}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
