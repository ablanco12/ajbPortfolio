import React, { Component } from "react";
import SkillsContainer from "./skillsContainer";
import "../App.css";
import { Menu } from "semantic-ui-react";
// import { Link } from "react-router-dom";

class Main extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Menu stackable>
          <Menu.Item>
            <img
              src="Avengers-Logo-PNG-Transparent-Avengers-Logo-715x715.png"
              alt="oh no"
            />
          </Menu.Item>

          <Menu.Item name="Github" href="www.github.com/ablanco12">
            Github
          </Menu.Item>

          <Menu.Item name="Skills" onClick={this.handleItemClick}>
            Skills
          </Menu.Item>

          <Menu.Item name="Contact me." onClick={this.handleItemClick}>
            Contact me.
          </Menu.Item>
        </Menu>
        <header className="App-header">
          <h1>Welcome to Andrew - Joseph Blanco's Portfolio</h1>
        </header>
        <div>
          <SkillsContainer />
        </div>
      </div>
    );
  }
}

export default Main;
