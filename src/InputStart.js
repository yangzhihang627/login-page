import React, { useState } from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

function InputStart() {
  const [country, setCountry] = useState('zhCN')

  const changeCountry = (event) => {
    setCountry(event.target.value)
  }
  
  return (
    <InputAdornment position="start">
      <Select
        value={country}
        onChange={changeCountry}
        disableUnderline
      >
        <MenuItem value={'zhCN'}>🇨🇳 +86</MenuItem>
        <MenuItem value={'ptPT'}>🇧🇷 +55</MenuItem>
      </Select>
    </InputAdornment>
  )
}

export default InputStart
