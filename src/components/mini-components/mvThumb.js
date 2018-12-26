import React, { Component } from "react";
import MvImg from "./mvImg";
import MvDesc from "./mvDesc";

class mvThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: {
        title: this.props.mv.title,
        release_date: this.props.mv.release_date,
        popularity: this.props.mv.popularity,
        vote_count: this.props.mv.vote_count
      }
    };
  }
  render() {
    return (
      <div className="mv__thumb">
        <MvImg
          imgPath={this.props.mv.poster_path}
          title={this.props.mv.title}
          rating={this.props.mv.vote_average}
        />
        <MvDesc desc={this.state.desc} />
      </div>
    );
  }
}

export default mvThumb;
