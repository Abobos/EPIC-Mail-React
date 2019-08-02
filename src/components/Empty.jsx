import React from "react";

const Empty = props => {
  return (
    <div className="container-center text-center">
      <div>
        <i className="fa fa-exclamation-circle" />
        <p>{props.name} is empty</p>
      </div>
    </div>
  );
};

export default Empty;
