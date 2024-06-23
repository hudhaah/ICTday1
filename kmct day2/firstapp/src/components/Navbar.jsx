import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <AppBar position='static'>

            <Toolbar>

                <Typography variant='h4'>
                    EBELE
                </Typography>&nbsp;&nbsp;

                <Button variant="contained" color='secondary'> 
                <Link to='/'>SIGNUP</Link>
                </Button>&nbsp;

                <Button variant="contained" color='success'>  
                <Link to='/sin'>LOGIN</Link>
                </Button>&nbsp;

                <Button variant="contained" color='success'>  
                <Link to='/sb'>State</Link>
                </Button>&nbsp;

                <Button variant="contained" color='success'>  
                <Link to='/co'>Counter</Link>
                </Button>

                <Button variant="contained" color='success'>  
                <Link to='/mp'>Listmap</Link>
                </Button>

                <Button variant="contained" color='success'>  
                <Link to='/ap'>Api</Link>
                </Button>

                <Button variant="contained" color='success'>  
                <Link to='/sam'>Sampleuse</Link>
                </Button>

                <Button variant="contained" color='success'>  
                <Link to='/card'>Cardget</Link>
                </Button>


            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar