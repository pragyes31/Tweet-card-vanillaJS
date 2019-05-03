import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
const test = document.querySelector(".test");

class UserInfo extends React.Component {
  render() {
    return (
      <div className="user-info">
        <div className="avatar">
          <img
            className="profile-pic"
            src="http://bit.do/eQzFo"
            alt="profile-pic"
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
    );
  }
}

class TweetArea extends React.Component {
  render() {
    return (
      <div className="tweet-area">
        <div className="tweet">
          One for the kitchen, one for the soul. One for the kitchen, one for
          the soul. One for the kitchen, one for the soul.
        </div>
        <div className="timestamp">10:10 AM - 01 Jan 2019</div>
      </div>
    );
  }
}

class AddImpression extends React.Component {
  render() {
    return (
      <div className="add-impressions">
        <div className="comment" />
        <div className="retweet" />
        <div className="like" />
      </div>
    );
  }
}

class TwitterCard extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <TweetArea />
        <AddImpression />
      </div>
    );
  }
}

ReactDOM.render(<TwitterCard />, test);
