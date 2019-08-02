import React from "react";
import { Link } from "@reach/router";

const Main = () => {
  return (
    <main className="row align-items justify-content-c bg-color">
      <div className="main-content text-center">
        <h2 className="text-display">
          Simple, Swift, and Sufficient Messenger.
        </h2>
        <p className="text-display">
          With Epic Mail, you can simply exchange messages between individuals
          through the internet.
        </p>
        <Link to="/registerPage">
          <button className="btn btn-primary">Get Started Now</button>
        </Link>
      </div>
    </main>
  );
};

export default Main;
