import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm.jsx";
import Navbar from "../components/Navbar.jsx";
import Loader from "../components/Loader.jsx";
import { navigate } from "@reach/router";

class RegisterPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleInputChange = ({ target }) => {
    const stateType = target.name;
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
        <RegisterForm
          feedback={this.props.feedback.error}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

export default RegisterPage;
