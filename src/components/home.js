import React, { Component } from "react";
// import myStyle from "../style/themeStyle";
import axios from "axios";
import { MDB_ORIGIN_URL, MDB_API_KEY, MDB_VERSION } from "../config";
import MvThumb from "./mini-components/mvThumb";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    let mdbUrl = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?api_key=${MDB_API_KEY}&sort_by=popularity.desc`;
    let movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      this.setState({ movies });
    } else {
      axios
        .get(mdbUrl)
        .then(res => {
          console.log(res.data.results);
          localStorage.setItem("movies", JSON.stringify(res.data.results));
          this.setState({ movies: res.data.results });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <div className="mv__wrapper">
        {this.state.movies.map((mv, i) => (
          <MvThumb mv={mv} key={i} />
        ))}
      </div>
    );
  }
}

export default Home;
