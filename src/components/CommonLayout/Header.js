import React, { Component } from "react";
import { Layout } from "antd";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <img src="./icon/tmdb.svg" alt="logo" style={{ width: "250px" }} />
          <Layout style={{ margin: "30px 0" }}>
            <div>
              <button>Home</button>
              <button>Top Rated</button>
              <button>On Theaters</button>
              <button>Upcoming</button>
              <button>Must Watch</button>
            </div>
          </Layout>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
