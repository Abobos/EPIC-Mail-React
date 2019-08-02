import React, { Component } from "react";
import Error from "./Error.jsx";

class ComposeMessage extends Component {
  state = {
    email: "",
    subject: "",
    message: "",
    response: [],
    hasError: false
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendMessage = event => {
    event.preventDefault();
    const { token } = localStorage;
    const { email, subject, message } = this.state;
    const messageDetails = { email, subject, message };
    const url = "https://epicmail11.herokuapp.com/api/v1/messages";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: token },
      body: JSON.stringify(messageDetails)
    })
      .then(res => res.json())
      .then(response => {
        this.setState({ response });
      })
      .catch(e => {
        this.setState({ hasError: true });
      });
  };

  getClassName = () => {
    let className = "mg-top text-center ";
    const { response } = this.state;
    if (response.status === "fail") className += "danger";
    else if (response.status === "success") className += "success";
    return className;
  };

  getResponse = () => {
    let response;
    if (this.state.response.status === "success")
      response = "Message Sent successfully";
    else if (this.state.response.status === "fail")
      response = this.state.response.error;
    return response;
  };

  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    return (
      <div className="form">
        <p className={this.getClassName()}>{this.getResponse()}</p>
        <form onSubmit={this.sendMessage}>
          <div className="form-control">
            <input
              className="input-control"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="receiver"
            />
            <input
              className="input-control"
              name="subject"
              type="text"
              value={this.state.subject}
              onChange={this.handleInputChange}
              placeholder="subject"
            />
            <textarea
              name="message"
              className="input-control message-area"
              placeholder="Your message goes here..."
              value={this.state.message}
              onChange={this.handleInputChange}
              rows="30"
              cols="30"
            />
            <button className="btn-send" type="submit">
              send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ComposeMessage;
