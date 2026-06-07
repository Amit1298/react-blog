import { useState } from "react";
import { Apple } from "./fruits/Apple";
import Wrapper from "./Wrapper";

function App() {
  const [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    if (count > 0) setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <h1>Welcome to Vite + React</h1>
      <h3>Count: {count >= 0 ? count : "not set"}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <Wrapper>
        <Apple />
      </Wrapper>
    </>
  );
}

export default App;
