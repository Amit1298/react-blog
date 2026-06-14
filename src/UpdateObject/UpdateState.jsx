import React, { useState } from "react";

function UpdateState() {
  const [name, setName] = useState("John");
  const [data, setData] = useState({
    name: "John",
    address: {
      city: "New York",
      country: "USA",
    },
  });
  //   const handleUpdateName = () => {
  //     setName(name === "Jane" ? "John" : "Jane");
  //   };
  //   const handleUpdateCity = () => {
  //     setData({
  //       ...data,
  //       name: data.name === "Jane" ? "John" : "Jane",
  //     });
  //   };
  const handleUpdateCity = () => {
    setData({
      ...data,
      name,
      address: {
        ...data.address,
        city: data.address.city === "New York" ? "Los Angeles" : "New York",
      },
    });
  };
  return (
    <div>
      <h3>Update Object in State</h3>
      <p>Name: {data.name}</p>
      <p>
        Address: {data.address.city}, {data.address.country}
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* <button onClick={handleUpdateName}>Update Name</button> */}
      <button onClick={handleUpdateCity}>Update City</button>
    </div>
  );
}

export default UpdateState;
