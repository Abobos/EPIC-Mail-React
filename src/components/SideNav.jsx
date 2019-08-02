import React, { Component } from "react";
import UserInfo from "./UserInfo.jsx";

class SideNav extends Component {
  SideNav = React.createRef();
  render() {
    return (
      <React.Fragment>
        <div className="sideNav" ref={this.SideNav}>
          <UserInfo />
          <ul onClick={this.props.handleClick}>
            <span className="closeSideNav cursor-pointer">&times;</span>
            {this.props.features.map(feature => (
              <li
                type={feature.type}
                className="cursor-pointer"
                key={feature.type}
              >
                <i className={feature.icon} />
                <span className="ml-1 list-text">{feature.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
