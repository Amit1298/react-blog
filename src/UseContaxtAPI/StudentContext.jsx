import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [marks, setMarks] = useState(25);

  const increment = () => setMarks((m) => m + 1);
  const decrement = () => setMarks((m) => m - 1);

  return (
    <StudentContext.Provider value={{ marks, setMarks, increment, decrement }}>
      {children}
    </StudentContext.Provider>
  );
}
