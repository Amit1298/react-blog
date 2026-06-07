function Wrapper({ children }) {
  return (
    <div style={{ padding: "20px", color: "white", border: "1px solid red" }}>
      {children}
    </div>
  );
}

export default Wrapper;
