import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/users";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // GET — saare users fetch karo
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // POST — naya user add karo
  const handleCreate = async () => {
    try {
      await axios.post(API_URL, formData);
      setFormData({ name: "", email: "", age: "" });
      fetchUsers();
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  // PUT — existing user update karo
  const handleUpdate = async () => {
    try {
      await axios.put(`${API_URL}/${editId}`, formData);
      setFormData({ name: "", email: "", age: "" });
      setEditId(null);
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  // DELETE — user delete karo
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const handleEditClick = (user) => {
    setEditId(user.id);
    setFormData({ name: user.name, email: user.email, age: user.age });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  return (
    <div
      style={{ maxWidth: 600, margin: "20px auto", fontFamily: "sans-serif" }}
    >
      <h2>User Management (json-server CRUD)</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="age"
          placeholder="Age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"} User</button>
        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setFormData({ name: "", email: "", age: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      {/* LIST */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => handleEditClick(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersList;
