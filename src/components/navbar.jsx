import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <a className="navbar-brand" href=".">
          Goals and Task Manager
        </a>
      </nav>
    );
  }
}

export default NavBar;
