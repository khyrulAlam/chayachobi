import React, { Component } from "react";
import { Col, Card, Spin, Icon, Button, Layout, Rate } from "antd";
import Img from "react-image";
const antIcon = (
  <Icon
    type="sync"
    style={{ fontSize: 24, color: "#52c41a", padding: "15px 0" }}
    spin
  />
);

class MovieCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Col span={6} style={{ padding: 0 }}>
          <Card
            className="mv__thumb__img"
            cover={
              <Img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  this.props.movie.poster_path
                }
                loader={
                  <Spin indicator={antIcon} style={{ minHeight: "300px" }} />
                }
              />
            }
          >
            <Layout style={{ position: "relative", background: "transparent" }}>
              <Rate
                style={{ color: "#52c41a" }}
                character={<Icon type="star" theme="filled" />}
                allowHalf={true}
                disabled
                defaultValue={Number(
                  (this.props.movie.vote_average / 2).toFixed(1)
                )}
              />
              <div className="movie__title">
                <h3>{this.props.movie.title}</h3>
              </div>
              <div className="movie__desc__grid">
                <div>
                  <Icon type="crown" theme="twoTone" twoToneColor="#52c41a" />{" "}
                  {this.props.movie.popularity}
                </div>
                <div>
                  <Icon type="team" style={{ color: "#52c41a" }} />{" "}
                  {this.props.movie.vote_count}
                </div>
              </div>
              <div className="movie__desc__grid">
                <div>
                  <Icon
                    type="clock-circle"
                    theme="twoTone"
                    twoToneColor="#52c41a"
                  />{" "}
                  <span style={{ color: "#52c41a" }}>Release Date:</span>{" "}
                  {this.props.movie.release_date}
                </div>
              </div>
              <Button className="movie_details" onClick={this.props.openDrawer}>
                Details
              </Button>
            </Layout>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default MovieCard;
