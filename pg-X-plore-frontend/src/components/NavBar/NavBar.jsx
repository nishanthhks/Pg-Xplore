import React, { useState } from "react";

import "./NavBar.scss";

import Menu from "../../assets/icons/Menu";
import X from "../../assets/icons/X";
export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        {/* logo */}
        <div className="logo">
          <a href="/">pg-x-plore</a>
        </div>

        {/* page links */}
        <div className="page-links">
          <a href="/" className="links">
            home
          </a>
          <a href="/" className="links">
            about
          </a>
          <a href="/" className="links">
            contact
          </a>
          <a href="/" className="links">
            agents
          </a>
        </div>

        {/* loging */}
        <div className="signup-signin">
          <a href="/" className="sign-up">
            sign up
          </a>
          <a href="/" className="sign-in">
            sign in
          </a>
        </div>
        <div className="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </div>
      </nav>
      <section className={open ? "side-bar visible" : "side-bar"}>
        {/* <section className="side-bar"> */}
        <a href="/" className="links">
          home
        </a>
        <a href="/" className="links">
          about
        </a>
        <a href="/" className="links">
          contact
        </a>
        <a href="/" className="links">
          agents
        </a>

        <a href="/" className="sign-up">
          sign up
        </a>
        <a href="/" className="sign-in">
          sign in
        </a>
      </section>
    </>
  );
}
