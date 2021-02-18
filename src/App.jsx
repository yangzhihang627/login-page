import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles'
import logoImage from './static/logo.png'
import TextField from '@material-ui/core/TextField'
import * as locales from './locale'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { green } from '@material-ui/core/colors'
import InputStart from './components/InputStart'
import InputEnd, { phoneRegExp } from './components/InputEnd'
import Toaster from './components/Toaster'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  logo: {
    display: 'inline-block',
    width: 110,
    height: 80,
    backgroundImage: `url(${logoImage})`,
    backgroundSize: 'cover'
  },
  country: {
    padding: '10px',
    textAlign: 'left'
  },
  form: {
    padding: '8px 20px'
  },
})

const CssTextField = withStyles({
  root: {
    '& fieldset': {
      borderRadius: '20px',
    }
  },
})(TextField)

const CssButton = withStyles({
  root: {
    borderRadius: 18,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    textTransform: 'none',
  },
})(Button)

function App() {
  const classes = useStyles()
  const [locale, setLocale] = useState('zhCN')
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [open, setOpen] = useState(false)

  const changeLocale = evt => {
    setLocale(evt.target.value)
  }

  const changePhone = evt => {
    setPhone(evt.target.value)
  }

  const changeCode = evt => {
    setCode(evt.target.value)
  }

  const clickLogin = () => {
    if (!phoneRegExp.test(phone)) {
      setOpen(true)
    }
  }

  const localize = (type) => {
    return locales[locale].props.Login[type]
  }

  return (
    <ThemeProvider theme={(outerTheme) => createMuiTheme(outerTheme, locales[locale])}>
      <Grid container justify="center" spacing={0} className={classes.root}>
        <Toaster show={open}  handleClose={() => setOpen(false)} />
        <Grid  item xs={12} sm={4}>
          <div className={classes.country}>
            <Select
              value={locale}
              onChange={changeLocale}
              disableUnderline
            >
              <MenuItem value={'zhCN'}>🇨🇳 CN</MenuItem>
              <MenuItem value={'ptPT'}>🇧🇷 PT</MenuItem>
            </Select>
          </div>
          <div className={classes.logo} />
          <div className={classes.form}>
            <CssTextField
              label={localize('phone')}
              placeholder={localize('placeholder')}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: <InputStart />,
              }}
              value={phone}
              onChange={changePhone}
            />
          </div>
          <div className={classes.form}>
            <CssTextField
              label={localize('code')}
              placeholder={localize('placeholder')}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: <InputEnd phone={phone} />,
              }}
              value={code}
              onChange={changeCode}
            />
          </div>
          <div className={classes.form}>
            <CssButton 
              variant='contained' 
              color='primary'
              fullWidth
              onClick={clickLogin}
            >Login</CssButton>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
