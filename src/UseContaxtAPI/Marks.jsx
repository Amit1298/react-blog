import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

function Marks() {
  const { marks, setMarks, increment, decrement } = useContext(StudentContext);
  return (
    <div style={{ backgroundColor: "lightsalmon", padding: "20px" }}>
      <h3>Marks {marks}</h3>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement} style={{ marginRight: 8, marginLeft: 8 }}>
          -
        </button>
        <button onClick={() => setMarks(0)}>Clear</button>
      </div>
    </div>
  );
}

export default Marks;
