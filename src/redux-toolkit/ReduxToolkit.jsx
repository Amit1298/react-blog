import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAll,
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";
import { fetchUsers } from "../features/APICalling/userSlice";

function ReduxToolkit() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  console.log("users data =>", users, loading, error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      {users.map((item) => {
        return (
          <ul key={item.id} style={{ listStyle: "none" }}>
            <li>Name: {item.name}</li>
            <li>Username: {item.username}</li>
          </ul>
        );
      })}
      <h1>Redux Toolkit Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch(incrementByAmount(5))}
        style={{ marginLeft: "10px" }}
      >
        +5
      </button>
      <button
        onClick={() => dispatch(clearAll())}
        style={{ marginLeft: "10px" }}
      >
        Clear All
      </button>
    </div>
  );
}

export default ReduxToolkit;
