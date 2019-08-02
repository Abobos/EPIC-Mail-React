import React from "react";
import { Link } from "@reach/router";
import logo from "../../public/img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar row justify-content-sb">
      <Link to="/">
        <div className="row">
          <span className="navbar-brand">
            <img className="navbar-img" src={logo} alt="img" />
          </span>
          <span className="align-self brand-text">EPIC Mail</span>
        </div>
      </Link>
      <Link to="/loginPage">
        <h4 className=" navbar-text align-self">Login</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
