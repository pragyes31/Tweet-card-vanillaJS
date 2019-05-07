import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import UserInfo from "./Components/UserInfo";
import TweetArea from "./Components/TweetArea";
import AddImpression from "./Components/AddImpression";

const tweetCard = document.querySelector(".tweet-card");

class TwitterCard extends React.Component {
  render() {
    return (
      <div>
        <UserInfo userName="Random User" />
        <TweetArea />
        <AddImpression />
      </div>
    );
  }
}

ReactDOM.render(<TwitterCard />, tweetCard);
