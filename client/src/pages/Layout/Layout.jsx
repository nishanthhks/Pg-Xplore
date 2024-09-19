import React from "react";
import NavBar from "../../components/NavBar/NavBar";
// import HomePage from "../HomePage/HomePage";
import { Outlet } from "react-router-dom";
import "./layout.scss";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
