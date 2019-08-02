import React, { Component } from "react";
import { Link } from "@reach/router";
import logo from "../../public/img/logo.png";

class UserNav extends Component {
  render() {
    return (
      <nav className="navbar nav row justify-content-sb">
        <span
          onClick={this.props.openNav}
          className="align-self cursor-pointer fa fa-bars openNav"
        />
        <span className="hidden-xs">
          <span className="navbar-brand">
            <img className="navbar-img" src={logo} alt="img" />
          </span>
          <span className="align-self brand-text">EPIC Mail</span>
        </span>
        <span className="align-self user-brand-text">{this.props.info}</span>
        <Link className="align-self" to="/">
          <span className="logout">
            <i className="fa fa-sign-out" />
            Logout
          </span>
        </Link>
      </nav>
    );
  }
}

export default UserNav;
