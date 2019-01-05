import React, { Component } from "react";
import { Drawer, Icon, Spin, Layout, Tag } from "antd";
import Img from "react-image";
const antIcon = (
  <Icon
    type="sync"
    style={{ fontSize: 24, color: "#52c41a", padding: "15px 0" }}
    spin
  />
);

class MovieDetails extends Component {
  render() {
    if (!this.props.movie) {
      return null;
    }
    return (
      <React.Fragment>
        <Drawer
          title={this.props.movie.title}
          width={720}
          placement="right"
          closable={true}
          onClose={this.props.onClose}
          visible={this.props.visible}
          className="movie__fullDsc"
        >
          <Img
            src={
              "https://image.tmdb.org/t/p/w1280" +
              this.props.movie.backdrop_path
            }
            loader={<Spin indicator={antIcon} style={{ minHeight: "300px" }} />}
            style={{ width: "100%" }}
          />
          <Layout className="fulldsc__description">
            <p>{this.props.movie.overview}</p>
            <div style={{ margin: "0px 0px 20px" }}>
              {this.props.movie.genres.map((gen, i) => (
                <Tag color="magenta" key={i}>
                  {gen.name}
                </Tag>
              ))}
            </div>
            <h3>
              <Icon type="dollar" theme="twoTone" twoToneColor="#52c41a" />{" "}
              Budget
            </h3>
            <p>$ {this.props.movie.budget}</p>
            <h3>
              <Icon type="thunderbolt" theme="twoTone" twoToneColor="#52c41a" />{" "}
              Revenue
            </h3>
            <p>$ {this.props.movie.revenue}</p>
            <h3>
              <Icon
                type="clock-circle"
                theme="twoTone"
                twoToneColor="#52c41a"
              />{" "}
              Runtime
            </h3>
            <p>{this.props.movie.runtime}m</p>
            {/* <h3>IMDB ID: {this.props.movie.imdb_id}</h3> */}
          </Layout>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default MovieDetails;
