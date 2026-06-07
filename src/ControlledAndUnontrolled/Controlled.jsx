import { useState } from "react";

export function Controlled() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Controlled Component</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}
