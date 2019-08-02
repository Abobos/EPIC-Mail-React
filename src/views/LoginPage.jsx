import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Loader from "../components/Loader.jsx";
import { navigate } from "@reach/router";

class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = ({ target }) => {
    const stateType = target.type;
    const value = target.value;
    this.setState({ [stateType]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let userData = {};
    Object.assign(userData, this.state);
    this.props.handleSubmit(userData);
  };

  componentDidUpdate() {
    if (this.props.feedback.status === "success") {
      navigate("/userPage");
      this.props.clearState();
    }
  }

  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    return (
      <React.Fragment>
        <Navbar />
        <LoginForm
          feedback={this.props.feedback.error}
          password={this.state.password}
          email={this.state.email}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

export default LoginPage;
