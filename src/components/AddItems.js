import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem } from '@material-ui/core';

function AddItems({
  dialogTitle,
  fields,
  isOpen,
  handleClose
}) {




  const getFormFields = () => {
    console.log("dialog fields", fields)

    const ret = fields.map(field => {
      const type = field.type;
      const label = field.label;

      console.log("field", field)
      if (type === "text") {
        return (
          <TextField
            autoFocus
            margin="dense"
            select
            id={label}
            label={label}
            type={type}
            fullWidth
          >
            <MenuItem key={"Male"} value={"Male"}>
              Male
          </MenuItem>
            <MenuItem key={"Female"} value={"Female"}>
              Female
          </MenuItem>
          </TextField>
        )
      } else {
        return null;
      }
    });
    console.log("ret = ", ret);
    return ret;
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} fullWidth aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
          {getFormFields()}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddItems;
