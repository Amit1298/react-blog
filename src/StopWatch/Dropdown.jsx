import { useState } from "react";
import StopWatch from "./StopWatch";

function Dropdown() {
  const [currentColor, setCurrentColor] = useState("red");
  return (
    <div>
      <h2>Dropdown</h2>
      <select
        value={currentColor}
        onChange={(e) => setCurrentColor(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="orange">Orange</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
        <option value="brown">Brown</option>
        <option value="black">Black</option>
        <option value="white">White</option>
      </select>
      <p>Selected Color: {currentColor}</p>
      <StopWatch currentColor={currentColor} />
    </div>
  );
}

export default Dropdown;
