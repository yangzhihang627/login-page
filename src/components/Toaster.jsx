import React, { useState, useEffect } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { useTheme } from '@material-ui/core/styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function Toaster({ show, handleClose, message }) {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const theme = useTheme()

  useEffect(() => {
    setOpen(show)
    if (message) {
      setText(message)
    } else {
      setText(theme.props.Login.tip)
    }
  }, [show, message, theme])

  return (
    <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open} 
      autoHideDuration={2000} 
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error">
        {text}
      </Alert>
    </Snackbar>
  )
}

export default Toaster
