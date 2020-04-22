import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './components/Profile'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
// Pages
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
// Profile

// Theme
const theme = createMuiTheme({
  palette: {
    primary: {light: '#4c8c4a', main: '#1b5e20', dark: '#003300', contrastText: "#ffffff"}, 
    secondary: {
      light: "#f05545",
      main: "#b71c1c",
      dark: "#7f0000",
      contrastText: '#ffffff'
    }
  }
})



class App extends React.Component{
  constructor(){
    super()

    this.state = {
      userInfo: {},
      followed_shouts: [],
      followed_users: [],
    }
  }


  componentDidMount(){
    if(localStorage.getItem !== null){
      const token = localStorage.getItem('token')
      const reqObj = {
          method: 'GET',
          headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
      }
      fetch('http://localhost:3000/current_user', reqObj)
      .then(resp => resp.json())
      .then(data => 
           
             { this.setState({
                 ...this.state, userInfo :{
                  userId: data.id, userImg: data.imgUrl, username: data.username, userBio: data.bio
                 }, followed_users: data.followed_users, followed_shouts: data.followed_shouts
                   })
              }
          )
          
        }
      }
      
      // profileInfo = (data) => {
        //   this.setState({
          //     UserInfo: data
          //   })
          // }
          
          
          
          render(){
            
            console.log("App state",this.state)
    return (
      <div className="App">
       <MuiThemeProvider theme={theme}>

      <Router>
        <NavBar />
        <div className= "container">
          <Switch>
              <Route exact path='/home' render={ (props) => <Home userInfo={this.state} {...props} />}/>
              <Route exact path= "/profile" render={ (props) => <Profile userInfo={this.state} {...props}/> } />
  
              <Route exact path='/signup' component={Signup}/>
  
              <Route exact path='/login' component={Login}/>
          </Switch>
        </div>
      </Router>
       </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
