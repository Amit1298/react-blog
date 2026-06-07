import { useState } from "react";

function Input() {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>Clear Input</button>
    </div>
  );
}

export default Input;
