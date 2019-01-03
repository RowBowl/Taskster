import React, { Component } from "react";
import Goal from "./goal";

class Goals extends Component {
  state = {
    goals: [
      { id: 1, taskName: "t1", taskBody: "tb1" },
      { id: 2, taskName: "t2", taskBody: "tb2" },
      { id: 3, taskName: "t3", taskBody: "tb3" }
    ]
  };

  handleAdd() {
    console.log(this);
    const goals = this.state.goals;
    goals.push({ id: 4, taskName: "newTask", taskBody: "newTaskBody" });
    this.setState({ goals });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.goals.map(goal => (
          <Goal key={goal.id} goal={goal} />
        ))}

        <button
          onClick={this.handleAdd.bind(this)}
          className="btn btn-primary btn-sn m-2"
        >
          Add Goal
        </button>
      </React.Fragment>
    );
  }
}

export default Goals;
