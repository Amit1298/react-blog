import React, { useReducer } from "react";

const emptyDate = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
  phoneNo: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

function MultipleInputField() {
  const [state, dispatch] = useReducer(reducer, emptyDate);

  console.log("usereducer", state);

  return (
    <div style={{ marginLeft: "50px" }}>
      <h3>Use Reducer</h3>
      <input
        placeholder="name"
        name="name"
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
      />
      <br />
      <br />
      <input
        placeholder="password"
        name="password"
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "password" })}
      />
      <br />
      <br />
      <input
        placeholder="email"
        name="email"
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
      />
      <br />
      <br />
      <input
        placeholder="city"
        name="city"
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
      />
      <br />
      <br />
      <input
        placeholder="address"
        name="address"
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "address" })}
      />
      <br />
      <br />
      <input
        placeholder="phoneNo"
        name="phoneNo"
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "phoneNo" })}
      />
      <br />
      <br />
    </div>
  );
}

export default MultipleInputField;
