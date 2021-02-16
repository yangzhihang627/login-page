import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Message({ show }) {
  const [open, setOpen] = useState(false)

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    setOpen(show)
  }, [show])

  return (
    <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open} 
      autoHideDuration={2000} 
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        请输入正确的手机号！
      </Alert>
    </Snackbar>
  )
}

export default Message
