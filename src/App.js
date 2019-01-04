import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Goals from "./components/goals";
import AddForm from "./components/addForm";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    isOpen: false,
    currID: 0,
    goals: []
  };

  handleAdd = () => {
    this.setState({ isOpen: true });
  };

  handleClose = data => {
    if (data === null) {
      return null;
    }

    const { goalTitle, goalBody } = data;

    const goals = this.state.goals;
    goals.push({ id: this.state.currID, goalTitle, goalBody });
    this.setState({ goals });
    this.setState({ currID: this.state.currID + 1 });
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid">
          <div className="App row">
            <div className="col">
              <Goals
                className="leftGoals"
                goals={this.state.goals}
                currID={this.state.currID}
              />
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={this.handleAdd}
              >
                Add Goal
              </button>
            </div>
            <div className="col">
              <p>completed goals placeholder</p>
            </div>
          </div>
        </div>

        <AddForm
          open={this.state.isOpen}
          onFormClose={data => this.handleClose(data)}
        />
      </React.Fragment>
    );
  }
}

export default App;
