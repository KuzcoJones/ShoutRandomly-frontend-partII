import React, {Component} from 'react'
import Link from 'react-router-dom/Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

class NavBar extends React.Component{
    render(){
        return(
           <AppBar>
               <Toolbar className="nav-container">
                   <Button color='inherit' component={Link} to='/home'>Home</Button>
                   <Button color="inherit" component={Link}to="/profile">Profile</Button>
                   <Button color='inherit' component={Link}to="/shouts">Shouts</Button>
                   <Button color='inherit' component={Link}to="/logout">Logout</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar