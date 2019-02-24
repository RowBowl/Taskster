import React, { Component } from "react";

class Goal extends Component {


  getType = () => {
      const partOf = this.props.partOf;
      return (partOf === "todo" ? "checkmark": "arrow-back");
  }
  onDragStart = (e, id)=>{
    //console.log(id);
    e.dataTransfer.setData("id", id);
  };
  render() {

    return (
      <div className="container draggable" draggable onDragStart={(e)=>this.onDragStart(e,this.props.goal.id)}>
        <div className="card" >
          <div className="card-header goalText">
            {this.props.goal.goalTitle}
            <button
                className="btn btn-danger btn-sm goalBtn"
                onClick={() => this.props.onDelete(this.props.goal.id)}
            >Delete
            </button>
            <button
                className="btn btn-success btn-sm goalBtn"
                onClick={() => this.props.onComp(this.props.goal.id)}
                style={{marginRight:'2px',}}
            > <ion-icon name={this.getType()}></ion-icon>
            </button>


         </div>

          <div className="card-body goalText">
            {this.props.goal.goalBody}

            <button
                type="button"
                className="btn btn-light btn-sm goalBtn "
                onClick={()=> this.props.onEdit(this.props.goal.id)}
            > <ion-icon name="hammer"></ion-icon>
            </button>



          </div>
        </div>

      </div>
    );
  }
}

export default Goal;
