function Student({ student, studentIndex }) {
  return (
    <div>
      <h1>Student Component</h1>
      <ul key={studentIndex}>
        <li>Name: {student.name}</li>
        <li>Age: {student.age}</li>
        <li>Email: {student.email}</li>
      </ul>
    </div>
  );
}

export default Student;
