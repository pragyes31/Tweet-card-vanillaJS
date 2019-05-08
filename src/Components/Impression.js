import React from "react";

export default class Impression extends React.Component {
  render() {
    return (
      <div className={this.props.impressionClass}>
        <img
          className={this.props.impressionImgClass}
          src={this.props.imgSource}
          alt=""
        />
        <div className={this.props.impressionCount}>12</div>
      </div>
    );
  }
}
