import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const DeleteProduct = ({ data }) => {
  const [cart, setCart] = useContext(CartContext);
  const cid = cart._id;
  const pid = data.id_prod._id;

  const submit = async () => {
    const updatedProducts = cart.products.filter(
      (item) => item.id_prod._id !== pid
    );

    const totalQuantity = updatedProducts.reduce(
      (total, prod) => total + prod.quantity,
      0
    );

    const response = await fetch(`/api/carts/${cid}/products/${pid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setCart({ ...cart, products: updatedProducts, quantity: totalQuantity });
      return alert("Se elimino el producto del carrito");
    }
  };

  return (
    <button type="submit" class="btn btn-danger mt-3" onClick={submit}>
      Eliminar
    </button>
  );
};

export default DeleteProduct;
