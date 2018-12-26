import React, { Component } from "react";

class mvDesc extends Component {
  render() {
    return (
      <div className="mv__description">
        <div className="mv__vote__count">
          <img src="/icon/vote.png" alt="vote" />
          <span>{this.props.desc.vote_count}</span>
        </div>
        <div className="mv__popularity">
          <img src="/icon/clapperboard.png" alt="clapperboard" />
          <span>{this.props.desc.popularity}</span>
        </div>
        <div className="mv__release__date">
          <img src="/icon/calendar.png" alt="calendar" />
          <span>{this.props.desc.release_date}</span>
        </div>
      </div>
    );
  }
}

export default mvDesc;
