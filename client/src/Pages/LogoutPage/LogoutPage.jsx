import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const LogoutPage = () => {
  const [cart, setCart] = useContext(CartContext);
  const inicioNavigate = useNavigate();
  const logout = async () => {
    try {
      await fetch(`/api/sessions/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      localStorage.removeItem("dataUser");
      setCart([]);
      inicioNavigate("/");
    } catch (error) {
      console.error("Hubo un error al cerrar la sesión:", error);
    }
  };

  return (
    <div>
      <h2>Cerrar sesión</h2>
      <p>Haga click para cerrar sesión</p>
      <button type="button" className="btn btn-dark" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default LogoutPage;
