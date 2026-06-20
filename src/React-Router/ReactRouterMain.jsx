import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router";
import HomepageRouter from "./HomepageRouter";
import AboutRouter from "./AboutRouter";
import ProfileRouter from "./ProfileRouter";
import PageNotFound from "./PageNotFound";
import Collage from "./Collage";
import School from "./School";
import Class from "./Class";
import Student from "./Student";

function ReactRouterMain() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightpink",
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
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/collage">Collage</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomepageRouter />} />
        <Route path="/about" element={<AboutRouter />} />
        <Route path="/profile" element={<ProfileRouter />} />
        <Route path="/collage" element={<Collage />}>
          {/* <Route path="school" element={<School />} /> */}
          <Route index element={<School />} />
          <Route path="class" element={<Class />} />
          <Route path="student" element={<Student />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default ReactRouterMain;
