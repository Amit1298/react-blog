import { useRef } from "react";

const Uncontrolled = () => {
  const inputRef = useRef();

  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <p>Your name is: {inputRef.current ? inputRef.current.value : ""}</p>
      <button onClick={() => alert(`Your name is: ${inputRef.current.value}`)}>
        Show Name
      </button>
    </div>
  );
};

export default Uncontrolled;
