import React, { Component } from "react";
import ContactContainer from "./contactContainer";
import logo from "../images/cascading-style-sheets-javascript-html-css3-jquery-png-favpng-EGGfknrdZiCNYjAFKp62Dnpy7.jpg";

class skillsContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={logo} alt="Logo" />

        <div>
          <ContactContainer />
        </div>
      </div>
    );
  }
}

export default skillsContainer;
