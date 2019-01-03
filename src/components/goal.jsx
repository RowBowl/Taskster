import React, { Component } from "react";

class Goal extends Component {
  state = {
    taskName: this.props.goal.taskName,
    taskBody: this.props.goal.taskBody
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <span className="taskBody col">{this.state.taskName}</span>
              <div className="col" />
            </div>
          </div>

          <div className="card-body">{this.state.taskBody}</div>
        </div>
        <br />
      </div>
    );
  }
}

export default Goal;
