import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { MDB_ORIGIN_URL, MDB_API_KEY, MDB_VERSION } from "./config";
import Header from "./components/CommonLayout/Header";
import Pagination from "./components/CommonLayout/Pagination";
import Home from "./components/Home/index";
import { Spin } from "antd";

const url = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?api_key=${MDB_API_KEY}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pageCount: 0,
      isLoading: true
    };
  }
  componentDidMount() {
    axios
      .get(url)
      .then(res => {
        this.setState({
          movies: res.data.results,
          pageCount: res.data.total_pages,
          isLoading: false
        });
      })
      .catch(e => {
        console.log(e.error);
      });
  }
  isLoadingTrue = () => {
    this.setState({ isLoading: true });
  };
  isLoadingFalse = () => {
    this.setState({ isLoading: false });
  };
  nextPageMovies = data => {
    this.setState({ movies: data.results, pageCount: data.total_pages });
  };
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Spin spinning={this.state.isLoading}>
            <Header />
            <Home movies={this.state.movies} />
            <Pagination
              pageCount={this.state.pageCount}
              isLoadingTrue={this.isLoadingTrue}
              isLoadingFalse={this.isLoadingFalse}
              nextPageMovies={this.nextPageMovies}
            />
          </Spin>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
