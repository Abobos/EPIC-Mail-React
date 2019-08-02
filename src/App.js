import React, { Component } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import "../public/font-awesome/css/font-awesome.min.css";
import IndexPage from "./views/IndexPage.jsx";
import RegisterPage from "./views/RegisterPage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import UserPage from "./views/UserPage.jsx";
import ErrorHandler from "./components/ErrorHandler.jsx";
import Error from "./components/Error.jsx";

class App extends Component {
  state = {
    loginLoading: false,
    registerLoading: false,
    loginResponse: [],
    registerResponse: [],
    hasError: false
  };

  handleLogin = userData => {
    this.setState({ loginLoading: true });
    const url = "https://epicmail11.herokuapp.com/api/v1/auth/login";
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(response => {
        if (response.error) {
          this.setState({ loginResponse: response, loginLoading: false });
        } else {
          this.setState({
            loginResponse: response,
            loginLoading: false
          });
          localStorage.token = response.data[0].token;
          localStorage.userEmail = userData.email;
        }
      })
      .catch(e => {
        this.setState({ hasError: true });
      });
  };

  handleRegister = userData => {
    this.setState({ registerLoading: true });
    const { firstName, lastName, email, password, confirmPassword } = userData;
    if (password !== confirmPassword) {
      this.setState({
        registerLoading: false,
        registerResponse: { error: "Passwords do not match" }
      });
    } else {
      const userDetails = { firstName, lastName, email, password };
      const url = "https://epicmail11.herokuapp.com/api/v1/auth/signup";
      fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(userDetails)
      })
        .then(res => res.json())
        .then(response => {
          if (response.error) {
            this.setState({
              registerResponse: response,
              registerLoading: false
            });
          } else {
            this.setState({
              registerResponse: response,
              registerLoading: false
            });
            localStorage.token = response.data[0].token;
            localStorage.userEmail = userDetails.email;
          }
        })
        .catch(e => {
          this.setState({ hasError: true });
        });
    }
  };

  clearLoginResponse = () => {
    this.setState({ loginResponse: [] });
  };

  clearRegisterResponse = () => {
    this.setState({ registerResponse: [] });
  };

  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    return (
      <ErrorHandler>
        <Router>
          <IndexPage path="/" />
          <RegisterPage
            feedback={this.state.registerResponse}
            loading={this.state.registerLoading}
            handleSubmit={this.handleRegister}
            clearState={this.clearRegisterResponse}
            path="/registerPage"
          />
          <LoginPage
            feedback={this.state.loginResponse}
            loading={this.state.loginLoading}
            handleSubmit={this.handleLogin}
            clearState={this.clearLoginResponse}
            path="/loginPage"
          />
          <UserPage path="/userPage" />
        </Router>
      </ErrorHandler>
    );
  }
}

render(<App />, document.getElementById("root"));
