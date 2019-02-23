import React, { Component } from "react";

class Goal extends Component {
  state = {
    goalTitle: this.props.goal.goalTitle,
    goalBody: this.props.goal.goalBody
  };

  getType = () => {
      const partOf = this.props.partOf;
      return (partOf === "todo" ? "checkmark": "arrow-back");
  }
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header goalText">
            {this.state.goalTitle}
            <button
                className="btn btn-danger btn-sm goalBtn"
                onClick={() => this.props.onDelete(this.props.goal.id)}
            >Delete
            </button>
            <button
                className="btn btn-success btn-sm compBtn"
                onClick={() => this.props.onComp(this.props.goal.id)}
            > <ion-icon name={this.getType()}></ion-icon>

            </button>
          </div>

          <div className="card-body goalText">{this.state.goalBody}</div>
        </div>
        <br />
      </div>
    );
  }
}

export default Goal;
