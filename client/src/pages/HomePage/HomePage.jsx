import React, { useContext } from "react";
import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Heading from "../../components/Heading/Heading";
import SearchBar from "../../components/SearchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";

export default function HomePage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      <div className="left"></div>
      <div className="right"></div>

      {/* <div
        style={{
          position: "relative",
          zIndex: "10",
          display: "flex",
          flexDirection: "column",
        }} className="home-page"> */}
      <Heading />
      <SearchBar />
      {/* </div> */}
    </>
  );
}
