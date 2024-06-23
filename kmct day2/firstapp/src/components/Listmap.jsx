import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inp,setInp]=useState(["ICTAK"])
    var[data,setdata]=useState("")

    const inputhandle=(e)=>{
        setdata(e.target.value)
    }

    const add=()=>{
         setInp([...inp,data])
        console.log(inp)
        setdata("")
    }
    return (
    <div>
        <br /><br />
         <TextField variant="outlined" label="ENTER YOUR NAME" onChange={inputhandle} value={data} /> <br /><br />
         <Button variant="contained" onClick={add}>SUBMIT</Button>

         <ul>
            {inp.map((v,i)=>{
                return <li>{v}</li>
              } )}
         </ul>


    </div>
  )
            }

export default Listmap