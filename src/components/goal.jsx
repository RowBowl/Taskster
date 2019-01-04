import React, { Component } from "react";

class Goal extends Component {
  state = {
    taskName: this.props.goal.taskName,
    taskBody: this.props.goal.taskBody,
    isEditing: this.props.goal.isEditing
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <span className="taskTitle">{this.state.taskName}</span>
            <button className="btn btn-danger btn-sm deleteBtn">Delete</button>
          </div>

          <div className="card-body">{this.state.taskBody}</div>
        </div>
        <br />
      </div>
    );
  }
}

export default Goal;
