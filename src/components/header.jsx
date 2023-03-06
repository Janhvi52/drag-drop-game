import React, { Component } from "react";

export default class HeaderElement extends Component {
  render() {
    return (
      <div className="logo">
       <h4>
         <strong> BLENDED WITH <span> AMERICAN BOURBON</span> WHISKEY</strong>
        </h4>
        <img src="images/logoddgb.png" alt="logo" width="60%" />
        <div className="challenge-text">#CHALLENGEACCEPTED</div>
      </div>
    );
  }
}
