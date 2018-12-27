import React, { Component } from "react";
import MvImg from "./mvImg";

class mvImgSec extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="mv__thumb__img">
        <MvImg imgPath={this.props.imgPath} title={this.props.title} />
        <span className="mv__rating">{this.props.rating}</span>
      </div>
    );
  }
}

export default mvImgSec;
