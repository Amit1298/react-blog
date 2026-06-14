import React, { useState } from "react";

function Student({ updateStudentName }) {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  function handleAddStudent() {
    setStudents([...students, studentName]);
    setStudentName("");
    updateStudentName(studentName);
  }
  return (
    <div>
      <h4>Student</h4>
      <input
        type="text"
        placeholder="Enter student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
}

export default Student;
