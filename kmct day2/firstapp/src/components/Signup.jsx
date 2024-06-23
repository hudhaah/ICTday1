import { Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <h2>PLEASE SIGN UP HERE!</h2>
      
        <label for="name">NAME :</label>
        <input type="text" name="name" id="name"/><br /><br />
        EMAIL : 
        <input type="email" name="email" id="email" /><br /><br />
        PASSWORD : 
        <input type="password" name="password" id="password" /> <br /><br />
        GENDER : 
        <input type="radio" name="gender" id="gender" value="male"/>Male 
        <input type="radio" name="gender" id="gender" value="male"/>Female <br /><br />
        COURSE : 
        <input type="checkbox" name="course" id="MCA" />MCA
        <input type="checkbox" name="course" id="MBA"/>MBA <br /><br />
        DOB :
        <input type="date" /><br /><br />
        <Button variant="contained">SUBMIT</Button><br /><br /><br />
    </div>
  )
}

export default Signup