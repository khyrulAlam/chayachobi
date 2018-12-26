import React, { Component } from "react";
import logo from "./tmdb.svg";
import "./App.css";
import axios from "axios";
import { MDB_ORIGIN_URL, MDB_API_KEY, MDB_VERSION } from "./config.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }
  componentDidMount() {
    let mdbUrl = `${MDB_ORIGIN_URL}/${MDB_VERSION}/discover/movie?api_key=${MDB_API_KEY}&language=en-US&sort_by=popularity.desc`;

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
  // componentDidUpdate() {
  //   console.log("-----component did update----");
  // }
  // componentWillMount() {
  //   console.log("-----component will mount---");
  // }
  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo" style={{ width: "250px" }} />

        <div style={mystyle.wrapper}>
          {this.state.movies.map((movie, i) => (
            <div style={mystyle.mv__box} key={i}>
              <img
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt={movie.title}
                style={mystyle.mv__img}
              />
              <h3>{movie.title}</h3>
              {/* <p>{movie.overview}</p> */}
              <div>
                <span>Popularity: {movie.popularity}</span>
                <span>Vote Avg: {movie.vote_average}</span>
                <span>Vote Count: {movie.vote_count}</span>
                <span>Release Date: {movie.release_date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mystyle = {
  wrapper: {
    padding: "15px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  mv__box: {
    minHeight: "350px",
    width: "23%",
    marginBottom: "25px",
    boxShadow: "0 0 38px 2px rgba(230, 230, 230, 0.72)",
    borderRadius: "6px"
  },
  mv__img: {
    width: "100%",
    borderRadius: "4px 4px 0 0"
  }
};

export default App;
