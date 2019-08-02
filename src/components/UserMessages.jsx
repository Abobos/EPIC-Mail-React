import React, { Component } from "react";
import ViewMessages from "./ViewMessages.jsx";


class userMessages extends Component {
  state = {
    component: ""
  };

  static getDerivedStateFromProps({ component }) {
    return { component };
  }
  render() {
    return (
      <React.Fragment>
        {this.state.component === "Inbox" && <ViewMessages type="inbox" />}
        {this.state.component === "Sent" && <ViewMessages type="sent" />}
        {this.state.component === "Unread" && <ViewMessages type="unread" />}
      </React.Fragment>
    );
  }
}

export default userMessages;
