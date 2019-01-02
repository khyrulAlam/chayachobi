import React, { Component } from "react";
import { Col, Card, Spin, Icon, Button } from "antd";
import Img from "react-image";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class MovieCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Col span={6}>
          <Card
            className="mv__thumb__img"
            hoverable
            cover={
              <Img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  this.props.movie.poster_path
                }
                loader={<Spin indicator={antIcon} />}
              />
            }
          >
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.release_date}</p>
            <p>{this.props.movie.vote_count}</p>
            <p>{this.props.movie.vote_average}</p>
            <Button type="primary" loading>
              Click me!
            </Button>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

export default MovieCard;
