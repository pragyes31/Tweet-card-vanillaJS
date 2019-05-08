import React from "react";

export default class UserInfo extends React.Component {
  render() {
    return (
      <div className="user-info">
        <div className="avatar">
          <img
            className="profile-pic"
            src={this.props.imgSource}
            alt="profile-pic"
          />
          <div className="user-name">
            <div className="name">{this.props.userName}</div>
            <div className="handle">{this.props.handleName}</div>
          </div>
        </div>
        <div className="options">
          <button className="follow">Follow</button>
          <div className="more-options">...</div>
        </div>
      </div>
    );
  }
}
