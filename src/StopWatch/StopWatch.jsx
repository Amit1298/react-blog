import { useEffect, useState } from "react";

function StopWatch({ currentColor }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h2>Stop Watch</h2>
      <div
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          color:
            currentColor === "white" ||
            currentColor === "yellow" ||
            currentColor === "pink"
              ? "black"
              : "white",
          backgroundColor: currentColor,
          width: "150px",
          textAlign: "center",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {time}
      </div>
    </div>
  );
}

export default StopWatch;
