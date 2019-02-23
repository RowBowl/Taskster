import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class DelForm extends Component {
  state = {};
  render() {
    if (!this.props.open) {
      return null;
    }
    return (
      <Dialog
        open={this.props.open}
        onClose={() => this.props.onFormClose(null)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this goal permanently?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Goal will be deleted (not completed).
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className="btn btn-success btn-sm"
            onClick={() => this.props.onFormClose(true)}
          >
            Yes
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onFormClose(false)}
          >
            No
          </button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DelForm;
