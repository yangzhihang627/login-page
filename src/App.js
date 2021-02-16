import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import logoImage from './static/logo.png'
import TablePagination from '@material-ui/core/TablePagination'
import Pagination from '@material-ui/lab/Pagination'
import Rating from '@material-ui/lab/Rating'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import * as locales from '@material-ui/core/locale'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
}))

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '20px',
      }
    },
  },
})(TextField)

const CssButton = withStyles({
  root: {
    borderRadius: 18,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
})(Button)

function App() {
  const classes = useStyles()
  const [locale, setLocale] = useState('zhCN')

  const handleChange = (event) => {
    setLocale(event.target.value)
  }

  return (
    <Grid container justify="center" spacing={0} className={classes.root}>
      <Grid  item xs={12} sm={4}>
        <div className={classes.country}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={locale}
            onChange={handleChange}
            disableUnderline
          >
            <MenuItem value={'zhCN'}>🇨🇳 CN</MenuItem>
            <MenuItem value={'ptPT'}>🇧🇷 PT</MenuItem>
          </Select>
        </div>
        <div className={classes.logo} />
        <div className={classes.form}>
          <CssTextField
            label="手机号"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
          />
        </div>
        <div className={classes.form}>
          <CssTextField
            label="验证码"
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
          />
        </div>
        <div className={classes.form}>
          <CssButton 
            variant='contained' 
            color='primary'
            fullWidth
          >Login</CssButton>
        </div>
      </Grid>
    </Grid>
  )
}

export default App
