import { useState, useEffect } from "react";
import ChangeUserRol from "../ChangeUserRol/ChangeUserRol";

const UsersList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("/api/users/userslist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      {users &&
        users.mensaje &&
        Array.isArray(users.mensaje) &&
        users.mensaje.map((user) => {
          return (
            <ul key={user._id} className="list-group">
              <li className="list-group-item">
                Usuario: {user.first_name} {user.last_name}
              </li>
              <li className="list-group-item">Email: {user.email}</li>
              <li className="list-group-item">Rol: {user.rol}</li>
              <ChangeUserRol dataUser={user} />
            </ul>
          );
        })}
    </div>
  );
};

export default UsersList;
