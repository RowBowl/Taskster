import React, { Component } from "react";
import Goals from "./components/goals";
import AddForm from "./components/addForm";
import DelForm from "./components/delForm";
import NavBar from "./components/navbar";

class GoalsApp extends Component {
    state = {
        isOpen: false,
        isDelOpen: false,
        currID: 0,
        goals: [],
        comp: [],
        toDel: null,
        isEditOpen: false,
        toEdit:null,

    };
    //EDIT ~~~~~~~~~~~~~~~~~~~~~~
    handleEdit= (id) => {
        this.setState({toEdit:id}, ()=> {

            this.setState({ isEditOpen: true });

        });
    };

    handleEditClose = data => {
        this.setState({ isEditOpen: false });
        if (!data) {
            return null;
        }

        const { goalTitle, goalBody } = data;
        const newG = {id: this.state.toEdit, goalTitle, goalBody};
        const goals = this.state.goals.map((x)=> { return x.id === this.state.toEdit ? newG : x; });
        this.setState({ goals });
        this.setState({toEdit:null});

    };

    //COMPLETE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    handleComplete = data => {
        const goal = this.state.goals.find(x => x.id === data );

        if(goal){

            const goals = this.state.goals.filter(x => x.id !== data);
            const comp = this.state.comp;
            comp.push(goal);
            this.setState({ goals });
            this.setState({comp});
        } else{
            const compGoal = this.state.comp.find(x => x.id === data );
            const comp = this.state.comp.filter(x => x.id !== data);
            const goals = this.state.goals;
            goals.push(compGoal);
            this.setState({ goals });
            this.setState({comp});
        }

    };


    //DELETE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    handleDelete = id => {
        this.setState({toDel:id},() => {
            this.setState({isDelOpen: true});
        });

    };
    handleDelClose = data => {

        if(data){
            const goals = this.state.goals.filter(x => x.id !== this.state.toDel);
            const comp = this.state.comp.filter(x => x.id !== this.state.toDel);
            this.setState({ goals });
            this.setState({comp});
        }
        this.setState({toDel: null});
        this.setState({isDelOpen:false});
    };



    //ADD ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    handleAdd = () => {
        this.setState({ isOpen: true });
    };

    handleClose = data => {
        this.setState({ isOpen: false });
        if (!data) {
            return null;
        }

        const { goalTitle, goalBody } = data;

        const goals = this.state.goals;
        goals.push({ id: this.state.currID, goalTitle, goalBody });
        this.setState({ goals });
        this.setState({ currID: this.state.currID + 1 });
    };

    onDragOver = (ev) => {
        ev.preventDefault();

    };

    onDrop = (ev) => {
        const data = parseInt(ev.dataTransfer.getData("id"),10);
        const goal = this.state.goals.find(x => x.id === data );

        if(!goal){return;}
        const goals = this.state.goals.filter(x => x.id !== data);
        const comp = this.state.comp;
        comp.push(goal);
        this.setState({ goals });
        this.setState({comp});

    };

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <div className="App row justify-content-around">
                        <div className="col-5 goalCol">
                            <p className="colTitle">To-Do List:</p>
                            <Goals
                            goals={this.state.goals}
                            currID={this.state.currID}
                            onDelete={id => this.handleDelete(id)}
                            onComp={id=>this.handleComplete(id)}
                            onEdit={id=>this.handleEdit(id)}
                            type="todo"
                            />


                            <button className="btn btn-primary btn-sm m-2" onClick={this.handleAdd}>
                                Add Goal
                            </button>
                        </div>

                        <div className="col-5 compCol container-drag droppable" onDragOver={(e)=>this.onDragOver(e)}
                        onDrop={(e)=>this.onDrop(e)}>
                            <p className="colTitle">Completed List:</p>


                                <Goals
                                goals={this.state.comp}
                                currID={this.state.currID}
                                onDelete={id => this.handleDelete(id)}
                                onComp={id=>this.handleComplete(id)}
                                onEdit={id=>this.handleEdit(id)}
                                type="complete"
                                />

                        </div>
                    </div>
                </div>

                <AddForm type="add" open={this.state.isOpen} onFormClose={data => this.handleClose(data)} />
                <DelForm open={this.state.isDelOpen} onFormClose={data => this.handleDelClose(data)}/>

                <AddForm type="edit" open={this.state.isEditOpen} onFormClose={data=> this.handleEditClose(data)}/>
            </React.Fragment>
        );
    }
}
/*
TODOS:
    cosmetics: change colors when hovering over certain buttons
    addPOPPERS

*/
export default GoalsApp;
