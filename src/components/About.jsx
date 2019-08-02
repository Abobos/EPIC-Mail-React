import React from "react";

const About = () => {
  return (
    <section>
      <div className="col-8 ma text-center">
        <h2 className="text-display">About EPIC Mail</h2>
        <p className="text-display">
          EPIC Mail has come to bridge the gap of slow communication between
          folks and business partners. It is swift and easy to navigate.
        </p>
      </div>
      <h2 className="text-display text-center">Available Features</h2>
      <div className="row justify-content-sa flex-wrap text-center">
        <div className="row-item">
          <i className="fa fa-send fa-3x" />
          <h3 className="text-display">Send emails to individuals</h3>
        </div>

        <div className="row-item">
          <i className="fa fa-group fa-3x" />
          <h3 className="text-display">Create Groups</h3>
        </div>

        <div className="row-item">
          <i className="fa fa-send fa-3x" />
          <h3 className="text-display">Send messages to group</h3>
        </div>

        <div className="row-item">
          <i className="fa fa-user-times fa-3x" />
          <h3 className="text-display">Admin can delete group</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
