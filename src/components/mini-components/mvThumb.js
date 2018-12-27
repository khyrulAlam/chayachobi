import React, { Component } from "react";
import MvImg from "./mvImg";
import MvDesc from "./mvDesc";
import MvWatched from "./mvWatched";

class mvThumb extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <div className="mv__thumb">
        <MvWatched vote_average={this.props.mv.vote_average} />
        <MvImg
          imgPath={this.props.mv.poster_path}
          title={this.props.mv.title}
          rating={this.props.mv.vote_average}
        />
        <MvDesc
          vote_count={this.props.mv.vote_count}
          popularity={this.props.mv.popularity}
          release_date={this.props.mv.release_date}
        />
      </div>
    );
  }
}

export default mvThumb;
