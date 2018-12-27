import React, { Component } from "react";

class mvWatched extends Component {
  render() {
    if (this.props.vote_average >= 5.9) {
      return <div className="mv__watched">Watched</div>;
    }
    return "";
  }
}

export default mvWatched;
