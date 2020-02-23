import React, { Component } from "react";
import SkillsContainer from "./skillsContainer";
import NavBar from "./navBar";
import "../App.css";

// import { Link } from "react-router-dom";

class Main extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <header className="App-header"></header>
        <div>
          <SkillsContainer />
        </div>
      </div>
    );
  }
}

export default Main;
