import React from "react";
import ClassComponent from "./ClassComponent";
import { StudentProvider } from "./StudentContext";

function Collage() {
  return (
    <StudentProvider>
      <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
        <h3>Collage</h3>
        <ClassComponent />
      </div>
    </StudentProvider>
  );
}

export default Collage;
