import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem } from '@material-ui/core';

const AddItems = ({
  dialogTitle,
  fields,
  isOpen,
  handleClose,
  createModal,
  createUser,
}) => {

  return (
    <div >
      <Dialog open={isOpen} color="primary" onClose={handleClose} fullWidth aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" style={{ color: "#284293" }}>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          {createModal}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItems;
