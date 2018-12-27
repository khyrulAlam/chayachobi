import React, { Component } from "react";
import MvImg from "./mvImg";

class FullDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  render() {
    return (
      <div className="mv__details" style={{ right: this.props.dscSection }}>
        {this.props.closeBtn ? (
          <span
            className="close__details"
            onClick={this.props.fullDetailsSectionClose}
          >
            <img src="/icon/delete.png" alt="delete" />
          </span>
        ) : null}

        <div>
          <MvImg
            title={this.props.movie.title}
            backdropPath={this.props.movie.backdrop_path}
          />
          <p>title: {this.props.movie.title} </p>
          <p>original_title: {this.props.movie.original_title} </p>
          <p>overview: {this.props.movie.overview} </p>
          <p>tagline: {this.props.movie.tagline} </p>
          <p>genres: </p>
          <p>budget: {this.props.movie.budget} </p>
          <p>imdb_id: {this.props.movie.imdb_id} </p>
          <p>homepage: {this.props.movie.homepage} </p>
          <p>popularity: {this.props.movie.popularity} </p>
          <p>release_date: {this.props.movie.release_date} </p>
          <p>revenue: {this.props.movie.revenue} </p>
        </div>
      </div>
    );
  }
}

export default FullDetails;
