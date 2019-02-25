import React, { Component } from "react";

class QuickAdd extends Component {



    onDragStart = (ev) => {
        //console.log(this.quickTitle," ", this.quickBody);
        ev.dataTransfer.setData("toAddTitle", "Quick Task 1");
        ev.dataTransfer.setData("toAddBody", "Quick task 1 body. Due: 2/25");
    };
    render() {


        return(
        <div className=" quickCard draggable" draggable
                onDragStart={(ev)=>this.onDragStart(ev)}>
            {"Quick Task 1"} 

         </div>
        );
    }
}

export default QuickAdd;
