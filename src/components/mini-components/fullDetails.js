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

          <div className="des__box">
            <div className="des__left">
              <p>
                <span className="tag__title">Title:</span>{" "}
                {this.props.movie.title}{" "}
              </p>
              <p>
                <span className="tag__title">Tagline:</span>{" "}
                {this.props.movie.tagline}{" "}
              </p>
              <p>
                <span className="tag__title">Genres:</span>{" "}
              </p>
              <p>
                <span className="tag__title">Budget:</span>{" "}
                {this.props.movie.budget}{" "}
              </p>
              <p>
                <span className="tag__title">IMDB:</span>{" "}
                {this.props.movie.imdb_id}{" "}
              </p>
              <p>
                <span className="tag__title">Homepage:</span>{" "}
                {this.props.movie.homepage}{" "}
              </p>
              <p>
                <span className="tag__title">Popularity:</span>{" "}
                {this.props.movie.popularity}{" "}
              </p>
              <p>
                <span className="tag__title">Release Date:</span>{" "}
                {this.props.movie.release_date}{" "}
              </p>
              <p>
                <span className="tag__title">Revenue:</span>{" "}
                {this.props.movie.revenue}{" "}
              </p>
            </div>
            <div className="des__right">
              <h3>Overview</h3>
              <p>{this.props.movie.overview} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullDetails;
