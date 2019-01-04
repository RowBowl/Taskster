import React, { Component } from "react";

class Goal extends Component {
  state = {
    goalTitle: this.props.goal.goalTitle,
    goalBody: this.props.goal.goalBody
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header goalText">
            {this.state.goalTitle}
            <button className="btn btn-danger btn-sm deleteBtn">Delete</button>
          </div>

          <div className="card-body goalText">{this.state.goalBody}</div>
        </div>
        <br />
      </div>
    );
  }
}

export default Goal;
