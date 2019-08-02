import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Main from "../components/Main.jsx";
import About from "../components/About.jsx";

class IndexPage extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}

export default IndexPage;
