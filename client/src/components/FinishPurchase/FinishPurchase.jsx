import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

const FinishPurchase = () => {
  const [cart, setCart] = useContext(CartContext);
  const _id = cart._id;

  const MessageSuccess = () => {
    return Swal.fire({
      position: "center",
      width: "300px",
      icon: "success",
      title: "Su compra fue exitosa",
      html: `<h4>En breve le llegará un email con los datos de su compra. Recuerde guardarlo por cualquier consulta</h4>`,
      showConfirmButton: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        window.location.reload();
      } else {
        window.location.reload();
      }
    });
  };

  const onSubmit = async () => {
    const response = await fetch(`/api/carts/${_id}/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setCart({ ...cart, products: [], quantity: 0 });
      MessageSuccess();
    } else {
      alert("Error al finalizar compra");
    }
  };

  return (
    <div>
      {cart.length !== 0 ? (
        <button
          className="btn btn-success"
          type="submit"
          onClick={() => {
            onSubmit();
          }}
        >
          Finalizar compra
        </button>
      ) : null}
    </div>
  );
};

export default FinishPurchase;
