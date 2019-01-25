import React, { Component } from "react";

class Tesstimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="testimonial">
          <div className="container">
            <div className="testimonial-img">{/* <img src={} alt="" /> */}</div>
            <div className="testimonial-text">
              <p>
                "Voluptatem accusantium dolore mque laudantium, totam rem
                aperiam. Teritatis et quasi architecto. Sed ut perspiciatis unde
                omnis iste natus error sit".
              </p>
              <h4> Brad Stark </h4>
              <span> Themeforest </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Tesstimonial;
