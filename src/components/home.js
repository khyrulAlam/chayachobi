import React, { Component } from "react";
import axios from "axios";
import { MDB_ORIGIN_URL, MDB_API_KEY, MDB_VERSION } from "../config";
import MvThumb from "./mini-components/mvThumb";
import ReactPaginate from "react-paginate";
import FullDetails from "./mini-components/fullDetails";
import LoadingContainer from "./mini-components/loadingContainer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movie: [],
      pageCount: 0,
      dscSection: "-100%",
      closeBtn: false,
      isLoading: true
    };
  }
  componentDidMount() {
    let mdbUrl = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?api_key=${MDB_API_KEY}`;
    axios
      .get(mdbUrl)
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
  handlePageClick = data => {
    let url = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?page=${data.selected +
      1}&api_key=${MDB_API_KEY}`;
    axios
      .get(url)
      .then(res => {
        this.setState({
          movies: res.data.results,
          pageCount: res.data.total_pages
        });
        // console.log(this.state.isLoading);
      })
      .catch(e => {
        console.log(e.error);
      });
  };
  fullDetailsSection = mvId => {
    this.setState({ dscSection: "-10%", closeBtn: true });
    if (this.state.movie.id !== mvId) {
      let url = `${MDB_ORIGIN_URL}/${MDB_VERSION}/movie/${mvId}?api_key=${MDB_API_KEY}`;
      axios(url)
        .then(res => {
          this.setState({ movie: res.data });
        })
        .catch(e => {
          console.log(e.error);
        });
    }
  };
  fullDetailsSectionClose = () => {
    this.setState({ dscSection: "-100%", closeBtn: false });
  };
  render() {
    if (this.state.isLoading) {
      return <LoadingContainer />;
    } else {
      return (
        <div className="mv__wrapper">
          {this.state.movies.map((mv, i) => (
            <MvThumb
              mv={mv}
              key={i}
              fullDetailsSection={this.fullDetailsSection}
            />
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

          <FullDetails
            dscSection={this.state.dscSection}
            closeBtn={this.state.closeBtn}
            fullDetailsSectionClose={this.fullDetailsSectionClose}
            movie={this.state.movie}
          />
        </div>
      );
    }
  }
}

export default Home;
