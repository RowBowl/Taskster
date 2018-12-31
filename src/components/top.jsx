import React, { Component } from 'react';

class Top extends Component {

    render() {
        return (
            <div className="rootGroup">
                {this.initiateTop()}

                {this.initiateFields()}

            </div>
        );
    }

    initiateTop(){
        return(
            <div className="topBar row">
                <h1 className="col-11">Goals and Plans</h1>
                <br></br>
                <button type = "button" className="btn btn-danger col-1">Logout</button>
            </div>
        );
    }

    initiateFields(){
        return(
            <div className="row">
			<fieldset className="col-6">
				<legend>Goals and Tasks</legend>
                <hr></hr>
				<div className="tasks-to-do" id="task-to-do" >


				</div>

				<button type = "button" className = "btn btn-primary btn-lg btn-block" >+</button>

			</fieldset>

			<fieldset className="col-6">
				<legend>Completed Tasks</legend>
                <hr></hr>
				<div className = "tasks-completed" >

				</div>

			</fieldset>
		</div>
        );
    }
}

export default Top;
