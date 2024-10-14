import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

import Profile from "../../pages/Profile/Profile";
import Menu from "../../assets/icons/Menu";
import X from "../../assets/icons/X";
import Logo from "../../assets/icons/Logo";
import { AuthContext } from "../../context/AuthContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  // const user = false;

  return (
    <>
      <nav>
        {/* logo */}
        <div className="logo">
          <Link to="/" className="logo-container">
            <Logo /> <span className="anton-regular">pg X plore</span>
          </Link>
        </div>

        {/* page links */}
        <div className="page-links">
          <Link to="/" className="links">
            home
          </Link>
          <Link to="/" className="links">
            about
          </Link>
          <Link to="/" className="links">
            contact
          </Link>
          <Link to="/" className="links">
            agents
          </Link>
        </div>

        {/* loging */}
        <div className="signup-signin">
          {currentUser ? (
            <>
              <Link to="/" className="user sign-up">
                {currentUser.username}
              </Link>
              <Link to="/profile" className="profile-link sign-in">
                profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/register" className="sign-up">
                sign up
              </Link>
              <Link to="/login" className="sign-in">
                sign in
              </Link>
            </>
          )}
        </div>
        <div className="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
      </nav>
      
      <section className={`side-bar ${open ? "visible" : "not-visible"}`}>
        {/* <section className="side-bar"> */}
        <Link to="/" className="links">
          home
        </Link>
        <Link to="/" className="links">
          about
        </Link>
        <Link to="/" className="links">
          contact
        </Link>
        <Link to="/" className="links">
          agents
        </Link>

        <Link to="/" className="sign-up">
          sign up
        </Link>
        <Link to="/" className="sign-in">
          sign in
        </Link>
      </section>
    </>
  );
}
