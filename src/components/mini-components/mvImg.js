import React, { Component } from "react";

class mvImg extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="mv__thumb__img">
        <img
          src={"https://image.tmdb.org/t/p/w500" + this.props.imgPath}
          alt={this.props.title}
        />
        <span className="mv__rating">{this.props.rating}</span>
      </div>
    );
  }
}

export default mvImg;
