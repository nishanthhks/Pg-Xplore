import React, { useContext, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
// import HomePage from "../HomePage/HomePage";
import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import { AuthContext } from "../../context/AuthContext";
function Layout() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!currentUser) {
  //     // navigate("/login");
  //     <Navigate to="/login" />;
  //   }
  // }, [currentUser]);

  return (
    !currentUser ? <Navigate to="/login" /> : (
      <>
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
      </>
    )
  );
};

export { Layout, RequireAuth };
