import React, { Component } from "react";
import Empty from "../components/Empty.jsx";
import Message from "../components/Message.jsx";
import ViewAMessage from "../components/ViewAMessage.jsx";
import Loader from "../components/Loader.jsx";
import Error from "./Error.jsx";

class Inbox extends Component {
  state = {
    Messages: [],
    particularMessage: [],
    loading: true,
    deleteMessageResponse: "",
    hasError: false
  };

  componentDidMount() {
    const url = this.getUrl();
    this.fetchMessages(url);
  }

  getUrl = () => {
    let url = "https://epicmail11.herokuapp.com/api/v1/messages";
    const { type } = this.props;
    if (type === "sent" || type === "unread") url += `/${type}`;
    return url;
  };

  fetchMessages(url) {
    this.setState({ loading: true });
    const { token } = localStorage;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: token },
      cache: "reload"
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          Messages: response.data,
          particularMessage: [],
          loading: false
        });
      })
      .catch(e => {
        this.setState({ hasError: true });
      });
  }

  getAMessage = messageId => {
    this.setState({ loading: true });
    const { type } = this.props;
    let url = `https://epicmail11.herokuapp.com/api/v1/messages/${messageId}`;
    if (type === "sent") {
      url = `https://epicmail11.herokuapp.com/api/v1/messages/sent/${messageId}`;
    }
    const { token } = localStorage;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: token },
      cache: "reload"
    })
      .then(res => res.json())
      .then(response => {
        if (response.error) this.setState({ particularMessage: [] });
        else {
          this.setState({ particularMessage: response.data, loading: false });
        }
      })
      .catch(e => {
        this.setState({ hasError: true });
      });
  };

  deleteAMessage = messageId => {
    this.setState({ loading: true });
    const { type } = this.props;
    let url = `https://epicmail11.herokuapp.com/api/v1/messages/${messageId}`;
    if (type === "sent") {
      url = `https://epicmail11.herokuapp.com/api/v1/messages/sent/${messageId}`;
    }
    const { token } = localStorage;
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: token },
      cache: "reload"
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          deleteMessageResponse: response.data[0].message,
          loading: false
        });
        const messageEndpoint = this.getUrl();
        this.fetchMessages(messageEndpoint);
      })
      .catch(e => {
        this.setState({ hasError: true });
      });
  };

  closeAMessage = () => {
    this.setState({ particularMessage: [] });
  };

  render() {
    if (this.state.hasError) return <Error />;
    const { Messages, particularMessage, loading } = this.state;
    if (
      !loading &&
      Array.isArray(Messages) &&
      Messages.length &&
      !particularMessage.length
    ) {
      return <Message messages={Messages} getMessage={this.getAMessage} />;
    }

    if (
      !loading &&
      Array.isArray(particularMessage) &&
      particularMessage.length
    ) {
      return (
        <ViewAMessage
          message={particularMessage}
          closeMessage={this.closeAMessage}
          deleteMessage={this.deleteAMessage}
          response={this.state.deleteMessageResponse}
        />
      );
    }
    if (!loading && Array.isArray(Messages) && !Messages.length) {
      const type =
        this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);
      return <Empty name={type} />;
    }
    return <Loader />;
  }
}
export default Inbox;
