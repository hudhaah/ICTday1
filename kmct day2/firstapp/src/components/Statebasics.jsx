import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname,setFname]=useState('Hudha')
    var[val,setval]=useState()
    const submithandler=()=>{
        setFname(val)
    }
        const handleInput=(e)=>{
            console.log(e.target.value)
            setval(e.target.value)
        
    }
  return (
    <div>
  
  <Typography variant='h4'><br /><br />
                  <b> WELCOME {fname}</b><br />
                </Typography>&nbsp;&nbsp;
                <TextField variant="outlined" label="Type your name" onChange={handleInput}></TextField><br /><br />
                <Button variant="contained" onClick={submithandler}>submit</Button>
    </div>
  )
}

export default Statebasics 