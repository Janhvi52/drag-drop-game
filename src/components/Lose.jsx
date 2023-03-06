import React, { Component } from "react";
import HeaderElement from "./header";
import "./Win.css";

class Win extends Component {
  buttonClick = () => {
    localStorage.setItem("attempts", 3);
    window.location.href = "./App";
  };
  render() {
    return (
      <div className="lose">
        <HeaderElement />
        <br />
        <br />
        <div classname="addBg">
          <div className="back">
            <h3>
              WELL, THAT COULD HAVE BEEN A DRINK.
              <br /> BUT DEFINETELY NOT AN
            </h3>
            <br />
            <div className="ap">
              <h1>AMERICAN PRIDE HIGHBALL</h1>
            </div>
            <br />
            <button onClick={this.buttonClick}>TRY POURING AGAIN</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Win;
