import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

const AddItems = ({
  dialogTitle,
  isOpen,
  handleClose,
  createModal,
  onClickAdd,
}) => {

  const onClick = (e, v, s) => {
    onClickAdd(e, v, s);
  }

  return (
    <div>
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
          <Button onClick={onClick} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItems;
