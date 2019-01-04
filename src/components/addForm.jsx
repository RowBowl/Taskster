import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class AddForm extends Component {
  /*state = {
    open: this.props.open
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  */

  getInfo() {
    const textItem = document.getElementById("goalTitle");
    const textAreaItem = document.getElementById("goalBody");

    if (textItem === null || textAreaItem === null) {
      return null;
    } else {
      return { goalTitle: textItem.value, goalBody: textAreaItem.value };
    }
  }
  render() {
    if (!this.props.open) {
      return null;
    }

    return (
      <Dialog
        open={this.props.open}
        onClose={() => this.props.onFormClose()}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"md"}
      >
        <DialogTitle id="form-dialog-title">Add a Goal</DialogTitle>

        <DialogContent>
          <DialogContentText>Fill out form to add a goal.</DialogContentText>

          <div className="form-group">
            <label htmlFor="goalTitle">Goal Title:</label>
            <input type="text" className="form-control" id="goalTitle" />
          </div>
          <div className="form-group">
            <label htmlFor="goalBody">Goal Body:</label>
            <textarea className="form-control" rows="5" id="goalBody" />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="btn btn-success btn-sm"
            onClick={() => this.props.onFormClose(this.getInfo())}
          >
            Submit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onFormClose(null)}
          >
            Cancel
          </button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddForm;
