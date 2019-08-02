import React from "react";

const RegisterForm = props => {
  return (
    <div className="card">
      <div className="feedback text-center">{props.feedback}</div>
      <form onSubmit={props.handleFormSubmit}>
        <div className="form-element">
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              value={props.firstName}
              onChange={props.handleInputChange}
            />
          </label>
        </div>

        <div className="form-element">
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={props.lastName}
              onChange={props.handleInputChange}
            />
          </label>
        </div>

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
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={props.password}
              onChange={props.handleInputChange}
            />
          </label>
        </div>

        <div className="form-element">
          <label htmlFor="confirmPassword">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={props.confirmPassword}
              onChange={props.handleInputChange}
            />
          </label>
        </div>
        <button className="btn btn-secondary">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
