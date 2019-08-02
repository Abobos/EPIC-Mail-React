import React from "react";

const Message = props => {
  const colorNumberGenerator = () => {
    let number = Math.floor(Math.random() * 256);
    return number;
  };

  return (
    <React.Fragment>
      {Array.isArray(props.messages) &&
        props.messages.map(message => {
          const email = message.senderemail || message.receiveremail;
          const r = colorNumberGenerator();
          const g = colorNumberGenerator();
          const b = colorNumberGenerator();
          const styles = {
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            color: "white"
          };
          return (
            <div
              className="row message cursor-pointer"
              onClick={() => props.getMessage(message.id)}
              key={message.id}
            >
              <div className="sender text-center" style={styles}>
                {email.charAt(0).toUpperCase()}
              </div>
              <div className="details ml-II">
                <div>
                  <b>{message.subject}</b>
                </div>
                <p>{message.message}</p>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default Message;
