import React, { Component } from "react";
import { Layout } from "antd";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <img src="./icon/tmdb.svg" alt="logo" style={{ width: "250px" }} />
          <Layout className="mv__navigation">
            <button>Home</button>
            <button>Top Rated</button>
            <button>On Theaters</button>
            <button>Upcoming</button>
            <button>Must Watch</button>
          </Layout>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
