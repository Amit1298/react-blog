import User from "./User";

function MapLooping() {
  const userData = [
    {
      id: 1,
      name: "John",
      age: 30,
      email: "john@example.com",
      bgColor: "lightblue",
    },
    {
      id: 2,
      name: "Jane",
      age: 25,
      email: "jane@example.com",
      bgColor: "lightgreen",
    },
    {
      id: 3,
      name: "Bob",
      age: 35,
      email: "bob@example.com",
      bgColor: "lightyellow",
    },
  ];
  return (
    <div>
      <h1>Reuse component</h1>
      {userData.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}

      <h1>Map Looping</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {userData.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <p>
                {user.name} is {user.age} years old.
              </p>
              <p>Email: {user.email}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MapLooping;
