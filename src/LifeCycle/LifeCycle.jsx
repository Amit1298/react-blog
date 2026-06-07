import { useEffect, useState } from "react";

function LifeCycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Component Updated", count);
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Life Cycle</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifeCycle;
