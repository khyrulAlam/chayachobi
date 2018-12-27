import React, { Component } from "react";

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
      </div>
    );
  }
}

export default FullDetails;
