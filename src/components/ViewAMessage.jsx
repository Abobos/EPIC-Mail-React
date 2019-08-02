import React from "react";

const ViewAMessage = props => {
  const [messageDetails] = props.message;
  const email = messageDetails.receiveremail || messageDetails.senderemail;
  return (
    <React.Fragment>
      <div className="messageHeading">
        <i
          className="fa fa-arrow-left cursor-pointer"
          onClick={props.closeMessage}
        />
        <h4>
          {messageDetails.receiveremail ? "To" : "From"}: {email}
        </h4>
        <i
          className="fa fa-trash cursor-pointer"
          onClick={() => props.deleteMessage(messageDetails.id)}
        />
      </div>
      <div>
        <h3 className="subject">{messageDetails.subject}</h3>
        <p className="messageBody">{messageDetails.message}</p>
      </div>
    </React.Fragment>
  );
};

export default ViewAMessage;
