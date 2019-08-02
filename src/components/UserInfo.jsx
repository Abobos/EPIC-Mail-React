import React from "react";

const UserInfo = () => {
  const { userEmail } = localStorage;
  return (
    <React.Fragment>
      <div className="userInfo">
        <h5>{userEmail}</h5>
        Status: <code>Online;</code>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
