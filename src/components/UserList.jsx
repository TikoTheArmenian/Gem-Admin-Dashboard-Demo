import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./UserList.css";

function UserList() {
  const [users, setUsers] = useState([]);
  const { darkMode } = useContext(ThemeContext); // Accessing darkMode from context
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [editUsername, setEditUsername] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const fetchUsers = () => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  const addUser = () => {
    if (!username.trim()) {
      alert("Username cannot be empty");
      return;
    }

    const newUser = {
      username,
      email: email.trim() ? email : "None",
      description: description.trim() ? description : "None",
    };

    console.log(JSON.stringify(newUser));

    fetch("http://localhost:8080/addUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(fetchUsers);
  };

  const clearUsers = () => {
    fetch("http://localhost:8080/clearUsers", {
      method: "POST",
    }).then(fetchUsers);
  };

  const startEdit = (username) => {
    console.log("here");
    setEditUser(username);
    const user = users.find((user) => user.username === username);
    setEditUsername(user.username);
    setEditEmail(user.email);
    setEditDescription(user.description);
  };

  const submitEdit = (username) => {
    fetch(`http://localhost:8080/editUser/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: editUsername,
        email: editEmail,
        description: editDescription,
      }),
    }).then(() => {
      setEditUser(null);
      fetchUsers();
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <input
        type="text"
        className={` ${darkMode ? "dark" : ""}`}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        className={` ${darkMode ? "dark" : ""}`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        className={` ${darkMode ? "dark" : ""}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button className={`button ${darkMode ? "dark" : ""}`} onClick={addUser}>
        Add New User
      </button>
      <button
        className={`button ${darkMode ? "dark" : ""}`}
        onClick={clearUsers}
      >
        Clear Users
      </button>
      <table className={`table ${darkMode ? "dark" : ""}`}>
        <thead>
          <tr>
            <th className={`th ${darkMode ? "dark" : ""}`}>Username</th>
            <th className={`th ${darkMode ? "dark" : ""}`}>Email</th>
            <th className={`th ${darkMode ? "dark" : ""}`}>Description</th>
            <th className={`th ${darkMode ? "dark" : ""}`}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className={`tr ${darkMode ? "dark" : ""}`} key={index}>
              <td className={`td ${darkMode ? "dark" : ""}`}>
                {user.username}
              </td>
              <td className={`td ${darkMode ? "dark" : ""}`}>{user.email}</td>
              <td className={`td ${darkMode ? "dark" : ""}`}>
                {user.description}
              </td>
              <td className={`td ${darkMode ? "dark" : ""}`}>
                {editUser === user.username ? (
                  <>
                    <input
                      type="text"
                      value={editUsername}
                      onChange={(e) => setEditUsername(e.target.value)}
                      placeholder="Username"
                    />
                    <input
                      type="text"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Description"
                    />
                    <button onClick={() => submitEdit(user.username)}>
                      Submit
                    </button>
                  </>
                ) : (
                  <button onClick={() => startEdit(user.username)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
