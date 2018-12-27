import React, { Component } from "react";
import axios from "axios";
import { MDB_ORIGIN_URL, MDB_API_KEY, MDB_VERSION } from "../config";
import MvThumb from "./mini-components/mvThumb";
import ReactPaginate from "react-paginate";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalPages: null
    };
  }
  componentDidMount() {
    let mdbUrl = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?api_key=${MDB_API_KEY}`;
    axios
      .get(mdbUrl)
      .then(res => {
        this.setState({
          movies: res.data.results,
          pageCount: res.data.total_pages
        });
      })
      .catch(e => {
        console.log(e.error);
      });
  }
  handlePageClick = data => {
    // console.log(data.selected);
    let mdbUrl = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?page=${data.selected +
      1}&api_key=${MDB_API_KEY}`;
    axios
      .get(mdbUrl)
      .then(res => {
        this.setState({
          movies: res.data.results,
          pageCount: res.data.total_pages
        });
        // console.log(res.data);
      })
      .catch(e => {
        console.log(e.error);
      });
  };
  render() {
    return (
      <div className="mv__wrapper">
        {this.state.movies.map((mv, i) => (
          <MvThumb mv={mv} key={i} />
        ))}
        <div className="mv__pagination">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={10}
            onPageChange={this.handlePageClick}
            activeClassName={"active"}
          />
        </div>
      </div>
    );
  }
}

export default Home;
