import React, { Component } from "react";
import Goal from "./goal";

class Goals extends Component {
  render() {
    if (this.props.goals === null) {
      return null;
    }
    return (
      <React.Fragment>
        {this.props.goals.map(goal => (
          <Goal key={goal.id} goal={goal} />
        ))}
      </React.Fragment>
    );
  }
}

export default Goals;
