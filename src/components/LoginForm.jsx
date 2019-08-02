import React from "react";
import { Link } from "@reach/router";

const LoginForm = props => {
  return (
    <div className="card">
      <form onSubmit={props.handleFormSubmit}>
        <div className="feedback text-center">{props.feedback}</div>
        <div className="form-element">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={props.email}
              onChange={props.handleInputChange}
            />
          </label>
        </div>
        <div className="form-element">
          <label htmlFor="firstname">
            Password:
            <input
              type="password"
              name="password"
              value={props.password}
              onChange={props.handleInputChange}
            />
          </label>
        </div>
        <button className="btn btn-secondary">Login</button>
        <p className="forgot-password-display text-center">Forgot Password</p>
        <Link to="/registerPage">
          <p className="forgot-password-display text-center">
            Don&apos;t have an account? Register...
          </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
