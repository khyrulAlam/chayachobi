import React, { Component } from "react";
import { MDB_ORIGIN_URL, MDB_API_KEY, MDB_VERSION } from "../../config";
import axios from "axios";
import { Layout, Row } from "antd";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      visible: false,
      movieId: null,
      movie: null
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.movies !== nextProps.movies) {
      this.setState({ movies: nextProps.movies });
    }
  }
  onClose = () => {
    this.setState({ visible: false });
  };
  openDrawer = movieId => {
    this.setState({ visible: true });
    if (this.state.movieId !== movieId) {
      this.setState({ visible: true });
      let url = `${MDB_ORIGIN_URL}/${MDB_VERSION}/movie/${movieId}?api_key=${MDB_API_KEY}`;
      axios(url)
        .then(res => {
          this.setState({ movie: res.data, movieId });
        })
        .catch(e => {
          console.log(e.error);
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Row gutter={16}>
            <div className="mv__movie__box">
              {this.state.movies.map((movie, i) => (
                <MovieCard movie={movie} key={i} openDrawer={this.openDrawer} />
              ))}
            </div>
          </Row>
        </Layout>
        <MovieDetails
          onClose={this.onClose}
          movie={this.state.movie}
          visible={this.state.visible}
        />
      </React.Fragment>
    );
  }
}

export default index;
