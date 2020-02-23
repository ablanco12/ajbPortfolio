import React, { Component } from "react";
import ContactContainer from "./contactContainer";

class skillsContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Ruby on Rails</h1>
        <h1>JavaScript</h1>
        <h1>React</h1>
        <h1>HTML5</h1>
        <h2>CSS3</h2>
        <div>
          <ContactContainer />
        </div>
        <div>More stuff!</div>
        <h1>even more stuff!</h1>
      </div>
    );
  }
}

export default skillsContainer;
