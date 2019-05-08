import React from "react";
import commentBtn from "../images/comment_twitter.png";
import retweetBtn from "../images/retweet.png";
import likeBtn from "../images/like-twitter.png";

export default class AddImpression extends React.Component {
  render() {
    return (
      <div className="add-impressions">
        <div className="comment">
          <img className="comment-img" src={commentBtn} alt="" />
          <div className="comment-count">1.2k</div>
        </div>
        <div className="retweet">
          <img className="retweet-img" src={retweetBtn} alt="" />
          <div className="retweet-count">343</div>
        </div>
        <div className="like">
          <img className="like-img" src={likeBtn} alt="" />
          <div className="like-count">3.4k</div>
        </div>
      </div>
    );
  }
}
