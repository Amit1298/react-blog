import React, { useState } from "react";

function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val) {
    console.log("val -->", val);
    if (typeof val !== "boolean") {
      setValue(value);
    } else {
      setValue(val);
    }
  }
  return [value, toggleValue];
}

export default useToggle;
