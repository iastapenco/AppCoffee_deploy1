import React, { useEffect, useState } from "react";

const DeleteUsers = () => {
  const [status, setStatus] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const deleteUsers = async () => {
      const response = await fetch("/api/users/", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      setStatus(response.status);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    };

    deleteUsers();
  }, []);

  if (showMessage && status === 200) {
    return (
      <div>
        <h3>
          <strong>Usuarios Eliminados</strong>
        </h3>
      </div>
    );
  } else if (showMessage) {
    return (
      <div>
        <h3>
          <strong>No hay usuarios para eliminar</strong>
        </h3>
      </div>
    );
  }

  return null;
};

export default DeleteUsers;
