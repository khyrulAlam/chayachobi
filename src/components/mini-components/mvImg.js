import React, { Component } from "react";

class mvImg extends Component {
  render() {
    return this.props.imgPath ? (
      <div>
        <img
          src={"https://image.tmdb.org/t/p/w500" + this.props.imgPath}
          alt={this.props.title}
        />
      </div>
    ) : (
      <img
        src={"https://image.tmdb.org/t/p/w1280" + this.props.backdropPath}
        alt={this.props.title}
        style={{ width: "90%", marginRight: "10%" }}
      />
    );
  }
}

export default mvImg;
