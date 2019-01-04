import React, { Component } from "react";
import Goal from "./goal";
import AddForm from "./addForm";

class Goals extends Component {
  state = {
    currID: 0,
    goals: []
  };

  render() {
    return (
      <React.Fragment>
        {this.state.goals.map(goal => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </React.Fragment>
    );
  }
}

export default Goals;
