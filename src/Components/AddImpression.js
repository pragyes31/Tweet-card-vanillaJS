import React from "react";

export default class AddImpression extends React.Component {
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
