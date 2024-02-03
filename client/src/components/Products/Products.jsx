import { useState, useEffect, useContext } from "react";
import CardProducts from "../CardProducts/CardProducts";
import CartWidget from "../CartWidget/CartWidget";
import AddCart from "../AddCart/AddCart";
import { CartContext } from "../../Context/CartContext";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useContext(CartContext);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));
  let cid;
  if (dataUser) {
    cid = dataUser.cart;
  }

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch(`/api/carts/${cid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      let quantity = 0;
      if (data && data.products) {
        quantity = data.products.reduce(
          (total, product) => total + product.quantity,
          0
        );
      }
      setCart({ ...data, products: data.products, quantity: quantity });
    };

    if (dataUser) {
      fetchCart();
    }
  }, [cart.quantity]);

  return (
    <>
      <div>
        <CartWidget />
      </div>
      <div>
        <h2 className="d-flex justify-content-center">Lista de productos</h2>
      </div>
      <div className="container w-50 mx-auto row-gap-3 column-gap-3 d-flex flex-column justify-content-around align-content-around flex-wrap bg-primary mb-4">
        {products &&
          products.mensaje &&
          products.mensaje.docs &&
          products.mensaje.docs.map((product) => {
            return (
              <div
                key={product._id}
                className="product_container align-self-center "
              >
                <div className="card d-flex flex-column">
                  <CardProducts data={product} />
                  <AddCart data={product} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
