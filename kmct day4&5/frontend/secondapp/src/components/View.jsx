import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'


const View = () => {
  var [users,setUsers]=useState([])
  var [update,setUpdate]=useState(false)
  var [singleValue,setsingleValue]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then((res)=>{
      console.log(res.data)
      setUsers(res.data)
  })
  .catch(err=>console.log(err))
},[])

const deleteValue=(id) => {
  console.log(id)
  axios.delete("http://localhost:3005/remove/"+id)
  .then((response)=>{
    alert(response.data)
    window.location.reload(false)   
  }).catch((err)=>console.log(err))
}
 const updateValues=(val)=>{
  console.log("Update")
  setUpdate(true)
  setsingleValue(val)
 }

 var finalJSX=<TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                     <TableCell><b>Name</b></TableCell>
                     <TableCell><b>Age</b></TableCell>
                     <TableCell><b>Position</b></TableCell>
                     <TableCell><b>Salary</b></TableCell>
                </TableRow>
            </TableHead>
      <TableBody>
        {users.map((val,i)=>{
          return(
        <TableRow>
          <TableCell>{val.ename}</TableCell>
          <TableCell>{val.eage}</TableCell>
          <TableCell>{val.eposition}</TableCell>
          <TableCell>{val.esalary}</TableCell>

          <TableCell>
  <Button onClick={()=>updateValues(val)}> UPDATE </Button>  &nbsp; &nbsp;     
  <Button onClick={()=>deleteValue(val._id)}>DELETE  </Button>
  </TableCell>
        </TableRow>
          )
                })}
      </TableBody>
        </Table>
    </TableContainer>
    if(update) finalJSX=<Add data={singleValue} method='put'/>

    return finalJSX
}

export default View