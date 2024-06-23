import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <AppBar position='static'>

            <Toolbar>

                <Typography variant='h4'>
                    EMPLOYEE
                </Typography>&nbsp;&nbsp;

                <Button variant="contained" color='secondary'> 
                <Link to='/a'>ADD_DATA</Link>
                </Button>&nbsp;
            
                <Button variant="contained" color='secondary'> 
                <Link to='/v'>VIEW_DATA</Link>
                </Button>&nbsp;
            
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar