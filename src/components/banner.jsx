import React, { Component } from "react";
import slider from "../images/slider.jpg";

class Banner extends Component {
  render() {
    return (
      <div>
        <img style={{ width: "100%" }} src={slider} alt="banner-image" />
        <h1 className="hd-txt">Hello! I'm Quin</h1>
        <p className="pd-txt">
          UX Designer and Front-end Develover based in Pekanbaru.
        </p>
        <button className="btn hd-btn">Let's start</button>
      </div>
    );
  }
}

export default Banner;
