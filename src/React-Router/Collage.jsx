import React from "react";
import { NavLink, Outlet } from "react-router";

function Collage() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightsalmon",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "12px",
            paddingRight: "12px",
          }}
        >
          <li>
            {/* <NavLink to="school">School</NavLink> */}
            <NavLink to="">School</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="class">Class</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="student">Student</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Collage;
