function User1Input({ inputRef }) {
  return (
    <div>
      <h2>User1 Input Component</h2>
      <input type="text" placeholder="Enter something..." ref={inputRef} />
    </div>
  );
}

export default User1Input;
