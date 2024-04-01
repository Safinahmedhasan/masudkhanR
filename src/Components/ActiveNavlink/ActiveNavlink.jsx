import React from "react";
import { NavLink } from "react-router-dom";
import "./ActiveNavlink.css";

const ActiveNavlink = ({ to, children }) => {
  return (
    <div>
      <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveNavlink;
