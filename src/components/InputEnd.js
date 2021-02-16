import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import InputAdornment from '@material-ui/core/InputAdornment'
import { green } from '@material-ui/core/colors'
import Message from './Message'

export const phoneRegExp = /^1[3456789]\d{9}$/

const CssButton = withStyles({
  root: {
    height: 20,
    lineHeight: 20,
    borderRadius: 10,
    fontSize: 12,
    color: green[500]
  },
})(Button)

function InputEnd({ phone }) {
  const [text, setText] = useState('发送')
  const [open, setOpen] = useState(false)
  const [flag, setFlag] = useState(false)
  let second = 60

  const countdown = (num) => {
    setTimeout(() => {
      if (num > 0) {
        num--
        setText(`${num}秒`)
        countdown(num)
      } else {
        setText('发送')
        setFlag(false)
      }
    }, 1000)
  }

  const clickSend = (num) => {
    if (phoneRegExp.test(num)) {
      setText(`${second}秒`)
      setFlag(true)
      countdown(second)
    } else {
      setOpen(true)
    }
  }

  return (
    <InputAdornment position="end">
      <Message show={open} />
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
