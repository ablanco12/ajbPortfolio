import React, { Component } from "react";
import SkillsContainer from "./skillsContainer";
import Projects from "./projectsContainer";
import NavBar from "./navBar";
import Name from "./nameContainer";
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
        <header className="App-header">
          <Name />
        </header>
        <div>
          <SkillsContainer />
        </div>
        <h1>Under Construction ... Still ..</h1>

        {/* <div>
          <Projects />
        </div> */}
      </div>
    );
  }
}

export default Main;
