import React, { Component } from "react";

class Goal extends Component {

  onDragStart = (e, id)=>{
    //console.log(id);
    e.dataTransfer.setData("id", id);
  };
  render() {
    const getStyle = ()=>{
        return (this.props.partOf === "complete"? {display:"none",}: {});
    }
    return (
      <div className="container draggable"
            draggable={this.props.partOf === "todo"? true:false}
            onDragStart={(e)=>this.onDragStart(e,this.props.goal.id)}>
        <div className="card" >
          <div className="card-header goalText">
            {this.props.goal.goalTitle}

            <button
                className="btn btn-danger btn-sm deleteBtn "
                onClick={() => this.props.onDelete(this.props.goal.id)}
            >Delete
            </button>

            <button
                className="btn btn-success btn-sm completeBtn "
                onClick={() => this.props.onComp(this.props.goal.id)}
                style={{marginRight:'2px',}}
            > <ion-icon name={this.props.partOf === "todo" ? "checkmark": "arrow-back"}></ion-icon>
            </button>


         </div>

          <div className="card-body goalText">
            {this.props.goal.goalBody}

            <button
                type="button"
                className="btn btn-light btn-sm editBtn "
                onClick={()=> this.props.onEdit(this.props.goal.id)}
                style={getStyle()}
            > <ion-icon name="hammer"></ion-icon>
            </button>



          </div>
        </div>

      </div>
    );
  }
}

export default Goal;
