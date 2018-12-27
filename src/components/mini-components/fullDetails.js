import React, { Component } from "react";

class FullDetails extends Component {
  // constructor(props) {
  //   super(props);
  //   console.log(this.props);
  // }
  render() {
    return (
      <div className="mv__details" style={{ right: this.props.dscSection }}>
        <span className="close__details">
          <img src="/icon/delete.png" alt="delete" />
        </span>
      </div>
    );
  }
}

export default FullDetails;
