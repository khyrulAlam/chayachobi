import React, { Component } from "react";
import { Layout, Row, Drawer } from "antd";
import MovieCard from "./MovieCard";

// const myComponent = () => <Img src="www.example.com/foo.jpg" />

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      visible: true
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
  render() {
    return (
      <React.Fragment>
        <Layout style={{ padding: "30px" }}>
          <Row gutter={16}>
            {this.state.movies.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
          </Row>
        </Layout>
        <Drawer
          title="Basic Drawer"
          width={720}
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default index;
