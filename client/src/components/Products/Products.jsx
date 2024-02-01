import { useState, useEffect, useContext } from "react";
import CardProducts from "../CardProducts/CardProducts";
import CartWidget from "../CartWidget/CartWidget";
import AddCart from "../AddCart/AddCart";
import { CartContext } from "../../Context/CartContext";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useContext(CartContext);
  const dataUser = JSON.parse(localStorage.getItem("dataUser"));

  useEffect(() => {
    const fetchCart = async () => {
      const cid = dataUser.cart;
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
      setCart({ ...data, quantity: quantity });
    };

    if (dataUser) {
      fetchCart();
    }
  }, []);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <>
      <div>
        <CartWidget />
      </div>
      <div>
        <h2 className="d-flex">Lista de productos</h2>
      </div>
      <div className="container row-gap-3 column-gap-3 d-flex flex-row justify-content-around align-content-around flex-wrap bg-primary mb-4">
        {products &&
          products.mensaje &&
          products.mensaje.docs &&
          products.mensaje.docs.map((product) => {
            return (
              <div key={product._id} className="product_container ">
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
