import React, { Component } from "react";
import UserNav from "../components/UserNav.jsx";
import SideNav from "../components/SideNav.jsx";
import UserMessages from "../components/UserMessages.jsx";
import ComposeMessage from "../components/ComposeMessage.jsx";
import { Redirect } from "@reach/router";

class UserPage extends Component {
  state = {
    features: [
      { type: "Inbox", icon: "fa fa-inbox" },
      { type: "Sent", icon: "fa fa-send" },
      { type: "Unread", icon: "fa fa-circle-o" },
      { type: "Group", icon: "fa fa-group" },
      { type: "Create Group ", icon: "fa fa-user-plus" }
    ],
    info: "Inbox",
    showForm: false,
    redirect: false
  };
  SideNav = React.createRef();

  updateHeading = event => {
    let info;
    if (event.target.matches("li")) {
      info = event.target.childNodes[1].textContent;
      this.setState({ info, showForm: false });
    } else if (event.target.classList.contains("list-text")) {
      info = event.target.textContent;
      this.setState({ info, showForm: false });
    }
  };

  componentDidMount() {
    const { token, userEmail } = localStorage;
    if (!token || !userEmail) this.setState({ redirect: true });
    window.addEventListener("click", this.outside);
  }

  outside = e => {
    if (
      !e.target.classList.contains("sideNav") &&
      !e.target.classList.contains("openNav")
    ) {
      const sideNav = this.getSideNav();
      sideNav.style.width = "0";
    }
  };

  openSideNav = () => {
    const sideNav = this.getSideNav();
    sideNav.style.width = "250px";
  };

  getSideNav = () => {
    const node = this.SideNav.current.SideNav.current;
    return node;
  };

  componentWillUnmount() {
    window.removeEventListener("click", this.outside);
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
  }

  showForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/loginPage" />;
    return (
      <React.Fragment>
        <UserNav openNav={this.openSideNav} info={this.state.info} />
        <div className="lg-src">
          <div>
            <SideNav
              ref={this.SideNav}
              features={this.state.features}
              handleClick={this.updateHeading}
            />
          </div>
          <div className="messageDiv">
            {this.state.showForm ? (
              <ComposeMessage sendMessage={this.sendMessage} />
            ) : (
              <UserMessages component={this.state.info} />
            )}
          </div>
        </div>
        <button className="fa fa-pencil compose-pen" onClick={this.showForm} />
      </React.Fragment>
    );
  }
}

export default UserPage;
