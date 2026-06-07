function User({ user }) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        backgroundColor: user.bgColor,
        maxWidth: "300px",
      }}
    >
      <p>
        {user.name} is {user.age} years old.
      </p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default User;
