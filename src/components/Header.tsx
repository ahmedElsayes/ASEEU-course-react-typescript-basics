import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>Notes Appication</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <ul className="navbar-nav mr-auto" id="navbarNavAltMarkup">
          <li className="nav-link">
            <Link to="/">Notes editing</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/register">Registration</Link>
          </li>
          <li className="nav-item nav-link">
            <Link to="/hooks">HookExamples</Link>
          </li>
        </ul>
        <hr />
      </nav>
    </>
  );
}

export default Header;
