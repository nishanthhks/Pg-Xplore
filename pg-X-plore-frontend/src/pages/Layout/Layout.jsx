import React from "react";
import NavBar from "../../components/NavBar/NavBar";
// import HomePage from "../HomePage/HomePage";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
