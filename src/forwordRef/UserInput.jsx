import { useRef } from "react";
import User1Input from "./User1Input";

function UserInput() {
  const inputRef = useRef(null);
  const handleSubmit = () => {
    console.log("Input value:", inputRef.current.value);
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Amit Kumar";
      inputRef.current.style.backgroundColor = "lightblue";
      inputRef.current.placeholder = "Name updated!";
    }
  };
  return (
    <div>
      <h2>Forward Ref Example</h2>
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <User1Input inputRef={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default UserInput;
