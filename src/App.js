import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Goals from "./components/goals";
import AddForm from "./components/addForm";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    isOpen: false
  };

  handleAdd = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="App row">
            <div className="col">
              <Goals className="leftGoals" />
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={this.handleAdd}
              >
                Add Goal
              </button>
            </div>
            <div className="col">
              <Goals className="rightGoals" />
            </div>
          </div>
        </div>

        <AddForm
          open={this.state.isOpen}
          onFormClose={() => this.handleClose()}
        />
      </React.Fragment>
    );
  }
}

export default App;
