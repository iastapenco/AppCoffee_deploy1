import React from "react";
import "./list_item_container.css";

const ListItemContainer = () => {
  const user = JSON.parse(localStorage.getItem("dataUser"));

  if (user) {
    if (user.rol === "admin") {
      return (
        <div className="container d-flex justify-content-center">
          <h2 className="saludos">
            {`Bienvenido administrador ${user.first_name} ${user.last_name}`}
          </h2>
        </div>
      );
    } else {
      return (
        <div className="container d-flex">
          <h2 className="saludos">
            {`Bienvenido/a ${user.first_name} ${user.last_name} a nuestro coffee shop online!`}
          </h2>
        </div>
      );
    }
  } else null;
};

export default ListItemContainer;
