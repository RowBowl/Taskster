import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <a className="navbar-brand" href=".">
          Goals App
        </a>
      </nav>
    );
  }
}

export default NavBar;
