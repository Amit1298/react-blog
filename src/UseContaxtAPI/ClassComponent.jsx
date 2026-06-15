import React from "react";
import StudentComponent from "./StudentComponent";

function ClassComponent() {
  return (
    <div style={{ backgroundColor: "pink", padding: "20px" }}>
      <h3>ClassComponent</h3>
      <StudentComponent />
    </div>
  );
}

export default ClassComponent;
