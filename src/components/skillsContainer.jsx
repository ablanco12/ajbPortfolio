import React, { Component } from "react";
import ContactContainer from "./contactContainer";
import logo from "../images/html5-logo-31819.png";
import railsLogo from "../images/Ruby_On_Rails_Logo.svg";
import reactLogo from "../images/KFuYQDevgA.png";

class skillsContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <br />
        <h1>S T A C K</h1>
        <img src={logo} alt="Logo" height="30%" width="20%" />
        <img src={reactLogo} alt="Logo3" height="30%" width="25%" />
        <img src={railsLogo} alt="Logo2" height="30%" width="20%" />

        <div>
          <ContactContainer />
        </div>
      </div>
    );
  }
}

export default skillsContainer;
