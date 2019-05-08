import React from "react";

export default class TweetArea extends React.Component {
  render() {
    return (
      <div className="tweet-area">
        <div className="tweet">One for the kitchen, one for the soul. </div>
        <div className="timestamp">10:10 AM - 01 Jan 2019</div>
      </div>
    );
  }
}
