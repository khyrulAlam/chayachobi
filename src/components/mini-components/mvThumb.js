import React, { Component } from "react";
import MvImgSec from "./mvImgSec";
import MvDesc from "./mvDesc";
import MvWatched from "./mvWatched";

class mvThumb extends Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(this.props.fullDetailsSection);
  // }
  render() {
    return (
      <div className="mv__thumb">
        <MvWatched vote_average={this.props.mv.vote_average} />
        <MvImgSec
          imgPath={this.props.mv.poster_path}
          title={this.props.mv.title}
          rating={this.props.mv.vote_average}
        />
        <MvDesc
          id={this.props.mv.id}
          vote_count={this.props.mv.vote_count}
          popularity={this.props.mv.popularity}
          release_date={this.props.mv.release_date}
          fullDetailsSection={this.props.fullDetailsSection}
        />
      </div>
    );
  }
}

export default mvThumb;
