import React, { Component } from 'react';

class Goal extends Component {
    state ={
        taskName : "Default Name",
        taskBody: "Default Body, This is Default Body.",
        taskType: "todo"

    };


    render() {

        return (
            <div className="container">
                {this.getPanelInstance()}
                <br></br>
            </div>
        );
    }

    getPanelInstance(){
        return (
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <span className="taskBody col">
                            {this.state.taskName}
                        </span>
                        <div className="col"></div>
                        <div className="buttonList col">
                            {this.getButtons()}
                        </div>

                    </div>
                </div>

                <div className="card-body">
                    {this.state.taskBody}

                </div>
            </div>
        );
    }

    getButtons(){
        return(
            <React.Fragment>
                <button type = "button"  className = "btn btn-info">...</button>
        		<button type = "button"  className = "btn btn-danger">X</button>
        		<button type = "button"  className = "btn btn-success">></button>
            </React.Fragment>
        );
    }
}

export default Goal;
