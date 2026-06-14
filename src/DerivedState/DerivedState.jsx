import React from "react";

function DerivedState() {
  const [inputValue, setInputValue] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const handleClick = () => {
    setUsers((prevUsers) => [...prevUsers, inputValue]);
  };

  console.log("Users:", users);
  const totalUsers = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUsers = [...new Set(users)];

  return (
    <div>
      <h3>DerivedState</h3>
      <h4>Total Users: {totalUsers}</h4>
      <h4>Last User: {lastUser}</h4>
      <h4>Unique Users: {uniqueUsers.length}</h4>
      <input
        type="text"
        placeholder="Enter something"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Click me</button>
      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
}

export default DerivedState;
