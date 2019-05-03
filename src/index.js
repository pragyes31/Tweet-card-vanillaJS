import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
const test = document.querySelector(".test");

class TwitterCard extends React.Component {
  render() {
    return (
      <div className="tweet-card">
        <div className="user-info">
          <div className="avatar">
            <img
              className="profile-pic"
              src="http://bit.do/eQzFo"
              alt="profile-photo"
            />
            <div className="user-name">
              <div className="name">Random user</div>
              <div className="handle">@randomUser</div>
            </div>
          </div>
          <div className="options">
            <button className="follow">Follow</button>
            <div className="more-options">...</div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TwitterCard />, test);
