import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Sampleuse = () => {
    var[data,setdata]=useState("WELCOME");

    const submitreact=()=>{
        setdata("HELLO REACT")
    }

    const submitangular=()=>{
        setdata("HELLO TRIANGULAR")
    }
    const submitview=()=>{
        setdata("HELLO VIEW")
    }
  return (
    <div>
<br /><br />
<Button variant="contained" onClick={submitreact}>REACT</Button><br /><br /><br />

<Button variant="contained" onClick={submitangular}>ANGULAR</Button><br /><br /><br />

<Button variant="contained" onClick={submitview}>VIEW</Button><br /><br /><br />

<Typography variant="h6">{data}</Typography>
    </div>
  )
}

export default Sampleuse