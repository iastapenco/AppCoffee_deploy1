import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Register = () => {
  const formRef = useRef(null);
  const loginNavigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(formRef.current));

    const response = await fetch("/api/sessions/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    e.target.reset();

    if (response.status == 200) {
      setLoading(false);
      loginNavigate("/login");
    } else {
      new Error("Error al registrar usuario");
    }
  };

  return (
    <div>
      <h2>Registro de usuario</h2>
      <p>
        Los campos marcados con <span style={{ color: "red" }}>*</span> son
        obligatorios
      </p>
      {loading ? (
        <Spinner />
      ) : (
        <form id="register_form" onSubmit={handleSubmit} ref={formRef}>
          <div class="mb-3">
            <label htmlFor="first_name" class="form-label">
              Nombre <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="string"
              class="form-control"
              id="first_name"
              name="first_name"
              placeholder="Nombre"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="last_name" class="form-label">
              Apellido <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="string"
              class="form-control"
              id="last_name"
              name="last_name"
              placeholder="Apellido"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="inputEmail" class="form-label">
              email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              name="email"
              aria-describedby="emailHelp"
              placeholder="example@example.com"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="age" class="form-label">
              Edad <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              class="form-control"
              id="age"
              name="age"
              placeholder="Edad"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="inputPassword" class="form-label">
              Contraseña <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              name="password"
              placeholder="ingresa tu contraseña"
            />
          </div>

          <div class="d-flex flex-column">
            <button
              type="submit"
              class="btn btn-primary btn-lg align-self-center"
            >
              Registrarse
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
