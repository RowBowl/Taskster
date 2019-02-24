import React, { Component } from "react";
import Goal from "./goal";
import jQuery from 'jquery'

class Goals extends Component {
  render() {
    if (this.props.goals === null) {
      return null;
    }


    return (
      <React.Fragment>
        {this.props.goals.map(goal => (
          <Goal
            key={goal.id}
            goal={goal}
            onDelete={id => this.props.onDelete(id)}
            onComp={id=> this.props.onComp(id)}
            partOf={this.props.type}
            onEdit={id => this.props.onEdit(id)}
            draggable
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Goals;
