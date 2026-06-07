import Student from "./Student";

function NestedLoop() {
  const colleageData = [
    {
      name: "IET Lucknow",
      city: "Lucknow",
      website: "www.ietlucknow.ac.in",
      students: [
        { name: "Alice", age: 20, email: "alice@example.com" },
        { name: "Bob", age: 21, email: "bob@example.com" },
        { name: "Charlie", age: 22, email: "charlie@example.com" },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "www.iitd.ac.in",
      students: [
        { name: "David", age: 23, email: "david@example.com" },
        { name: "Eve", age: 24, email: "eve@example.com" },
        { name: "Frank", age: 25, email: "frank@example.com" },
      ],
    },
    {
      name: "IIT Bombay",
      city: "Mumbai",
      website: "www.iitb.ac.in",
      students: [
        { name: "Grace", age: 26, email: "grace@example.com" },
        { name: "Heidi", age: 27, email: "heidi@example.com" },
        { name: "Ivan", age: 28, email: "ivan@example.com" },
      ],
    },
    {
      name: "IIT Kanpur",
      city: "Kanpur",
      website: "www.iitk.ac.in",
      students: [
        { name: "Jack", age: 29, email: "jack@example.com" },
        { name: "Karl", age: 30, email: "karl@example.com" },
        { name: "Leo", age: 31, email: "leo@example.com" },
      ],
    },
    {
      name: "IIT Madras",
      city: "Chennai",
      website: "www.iitm.ac.in",
      students: [
        { name: "Mallory", age: 32, email: "mallory@example.com" },
        { name: "Nina", age: 33, email: "nina@example.com" },
        { name: "Oscar", age: 34, email: "oscar@example.com" },
      ],
    },
  ];
  return (
    <div>
      <h1>Nested Loop</h1>
      {colleageData.map((college, index) => (
        <div
          key={index}
          style={{
            borderBottom: "2px solid #000",
            margin: "10px",
            backgroundColor: "lightgray",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <h2>{college.name}</h2>
          <p>City: {college.city}</p>
          <p>Website: {college.website}</p>
          {college.students.map((student, studentIndex) => (
            <Student
              key={studentIndex}
              student={student}
              studentIndex={studentIndex}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default NestedLoop;
