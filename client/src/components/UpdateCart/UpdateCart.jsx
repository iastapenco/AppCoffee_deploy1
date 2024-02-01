import React, { useContext, useRef } from "react";
import { CartContext } from "../../Context/CartContext";

const UpdateCart = ({ data }) => {
  const [cart, setCart] = useContext(CartContext);
  const formRef = useRef(null);
  const cid = cart._id;
  const pid = data.id_prod._id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const dataForm = Object.fromEntries(datForm);
    const quantity = Number(dataForm.quantity);

    const updatedProducts = cart.products.map((item) =>
      item.id_prod._id === pid ? { ...item, quantity } : item
    );

    const totalQuantity = updatedProducts.reduce(
      (total, product) => total + product.quantity,
      0
    );

    const response = await fetch(`/api/carts/${cid}/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    });

    if (response.ok) {
      setCart({ ...cart, products: updatedProducts, quantity: totalQuantity });
      return alert("Se modificó la cantidad del carrito");
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="quantity">Modificar la cantidad</label>
      <input
        id="quantity"
        type="number"
        placeholder="1"
        defaultValue={1}
        name="quantity"
        autocomplete="off"
        min="1"
      />
      <button type="submit" class="btn btn-primary mt-3">
        Modificar
      </button>
    </form>
  );
};

export default UpdateCart;
