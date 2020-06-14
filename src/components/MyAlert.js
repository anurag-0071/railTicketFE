import React from 'react';
import { Snackbar, Slide } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';


const MyAlert = ({
  message,
  title,
  severity,
  closeAlert,
}) => {

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    closeAlert()
  }

  function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={3000}
      TransitionComponent={SlideTransition}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  )

}

export default MyAlert;