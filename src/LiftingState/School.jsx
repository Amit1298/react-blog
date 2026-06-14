import React, { useState } from "react";
import Student from "./Student";

function School() {
  const [updateArr, setUpdateArr] = useState([]);
  const updateStudentName = (name) => {
    console.log("Student name updated:", name);
    setUpdateArr([...updateArr, name]);
  };
  return (
    <div>
      <h4>School</h4>
      <Student updateStudentName={updateStudentName} />
      {updateArr.length > 0 && (
        <div>
          <h5>Updated Student Names:</h5>
          <ul>
            {updateArr.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default School;
