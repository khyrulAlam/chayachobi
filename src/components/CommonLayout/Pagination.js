import React, { Component } from "react";
import axios from "axios";
import { MDB_ORIGIN_URL, MDB_API_KEY, MDB_VERSION } from "../../config";
import ReactPaginate from "react-paginate";
import { Layout } from "antd";
class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.pageCount !== nextProps.pageCount) {
      this.setState({ pageCount: nextProps.pageCount });
    }
  }
  nextPage = data => {
    this.props.isLoadingTrue();
    let url = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?page=${data.selected +
      1}&api_key=${MDB_API_KEY}`;
    axios
      .get(url)
      .then(res => {
        this.props.isLoadingFalse();
        this.props.nextPageMovies(res.data);
      })
      .catch(e => {
        console.log(e.error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Layout>
          <div className="mv__pagination">
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={0}
              pageRangeDisplayed={10}
              onPageChange={this.nextPage}
              activeClassName={"active"}
            />
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Pagination;
