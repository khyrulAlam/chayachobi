import React, { Component } from "react";
import logo from "./tmdb.svg";
import "./App.css";
import Home from "./components/home";

class App extends Component {
  componentDidMount() {
    console.log("---add login from---");
  }
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="logo" style={{ width: "250px" }} />
        </header>

        <Home />
        <div className="mv_details" />
      </div>
    );
  }
}

export default App;
