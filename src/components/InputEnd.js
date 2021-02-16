import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles, useTheme } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import { green } from '@material-ui/core/colors'
import Toaster from './Toaster'

export const phoneRegExp = /^1[3456789]\d{9}$/

const CssButton = withStyles({
  root: {
    height: 20,
    lineHeight: 20,
    borderRadius: 10,
    fontSize: 12,
    color: green[500],
    textTransform: 'none',
  },
})(Button)

function InputEnd({ phone }) {
  const theme = useTheme()
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [flag, setFlag] = useState(false)
  let second = 60

  const countdown = (num) => {
    setTimeout(() => {
      if (num > 0) {
        num--
        setText(`${num}${theme.props.Login.sec}`)
        countdown(num)
      } else {
        setText(theme.props.Login.send)
        setFlag(false)
      }
    }, 1000)
  }

  const clickSend = (num) => {
    if (phoneRegExp.test(num)) {
      setText(`${second}${theme.props.Login.sec}`)
      setFlag(true)
      countdown(second)
    } else {
      setOpen(true)
    }
  }

  useEffect(() => {
    setText(theme.props.Login.send)
  }, [theme])
  return (
    <InputAdornment position="end">
      <Toaster show={open} handleClose={() => setOpen(false)} />
      <CssButton 
        variant='contained' 
        color='default'
        fullWidth
        size="small"
        onClick={() => clickSend(phone)}
        disabled={flag}
      >{text}</CssButton>
    </InputAdornment>
  )
}

export default InputEnd
