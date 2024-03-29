import { useRef, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const AddCart = ({ data }) => {
  const formRef = useRef(null);
  const [cart, setCart] = useContext(CartContext);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  const { _id } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datForm = new FormData(formRef.current);
    const dataForm = Object.fromEntries(datForm);
    const quantity = Number(dataForm.quantity);

    if (dataUser) {
      const response = await fetch(
        `/api/carts/${dataUser.cart}/products/${_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity }),
        }
      );

      if (response.status == 200) {
        const respuesta = await response.json();
        const updatedProducts = respuesta.mensaje.products.map((prod) =>
          prod.id_prod._id == _id ? { ...prod, quantity } : prod
        );

        const updatedQuantity = updatedProducts.reduce(
          (total, prod) => total + prod.quantity,
          0
        );

        setCart({
          ...cart,
          products: updatedProducts,
          quantity: updatedQuantity,
        });
        return alert("Producto agregado al carrito");
      }
    } else alert("Inicie sesión para agregar productos al carrito");
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="quantity">Introduzca la cantidad que desea comprar</label>
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
        Agregar al carrito
      </button>
    </form>
  );
};

export default AddCart;
