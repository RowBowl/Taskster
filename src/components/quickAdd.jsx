import React, { Component } from "react";

class QuickAdd extends Component {

    //can be stored elsewhere eventually. Add ability for user to add quick tasks
    quickAddList = [
        { id: 1, title: "Budgeting and Finance", body: "Bill payments and Asset Management. Budgeting for the month" },
        { id: 2, title: "Weight Check", body: "Check weight in the morning" },
        { id: 3, title: "Clean Room", body: "Clean your room and organize items" },
        { id: 4, title: "Food Prep", body: "Prepare food for the week." },
    ]

    onDragStart = (ev, item) => {
        //console.log(this.quickTitle," ", this.quickBody);
        ev.dataTransfer.setData("toAddTitle", item.title);
        ev.dataTransfer.setData("toAddBody", item.body);
    };
    render() {


        const divItems = this.quickAddList.map((item) =>
            <div key={item.id} className=" quickCard draggable" draggable
                onDragStart={(ev) => this.onDragStart(ev,item)}>
                {item.title}

            </div>
        );

        return ( <div>{divItems}</div>);
    }
}

export default QuickAdd;
