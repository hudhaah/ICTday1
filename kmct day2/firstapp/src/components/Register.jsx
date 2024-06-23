import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        
                 <h1> LOGIN HERE</h1>  
                
         <TextField label="username" variant="outlined" /> <br /><br />
        <TextField label="password" variant="outlined" /> <br /><br />
        <Button variant="contained">REGISTER</Button><br />
    </div>
  )
}

export default Register