import React from "react";
import useToggle from "./Toggle";

function ToggleHeading() {
  const [value, setValue] = useToggle(true);
  return (
    <div>
      <button onClick={() => setValue(!value)}>toggle heading</button>
      <button onClick={() => setValue(false)}>hide heading</button>
      <button onClick={() => setValue(true)}>show heading</button>
      {value && <h3>ToggleHeading</h3>}
    </div>
  );
}

export default ToggleHeading;
