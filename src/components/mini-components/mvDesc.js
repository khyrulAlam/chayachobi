import React, { Component } from "react";

class mvDesc extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }
  render() {
    return (
      <div className="mv__description">
        <div className="mv__vote__count">
          <img src="/icon/vote.png" alt="vote" />
          <span>{this.props.vote_count}</span>
        </div>
        <div className="mv__popularity">
          <img src="/icon/clapperboard.png" alt="clapperboard" />
          <span>{this.props.popularity}</span>
        </div>
        <div className="mv__release__date">
          <img src="/icon/calendar.png" alt="calendar" />
          <span>{this.props.release_date}</span>
        </div>
        <div className="mv__more">
          <button
            className="mv__button"
            onClick={this.props.fullDetailsSection}
          >
            More
          </button>
        </div>
      </div>
    );
  }
}

export default mvDesc;
