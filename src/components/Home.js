import React from 'react'
import NavBar from './NavBar'
import Findfollow from './Findfollow'
import Shout from './Shout'
import Shoutform from './Shoutform'
import Newsfeed from './Newsfeed'
import Grid  from '@material-ui/core/Grid';

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            shouts: null,
            renderState: false
        }
    }

        componentDidMount(){
            const token = localStorage.getItem('token')
            const reqObj = {
                method: 'GET',
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
            }

            fetch('http://localhost:3000/shouts', reqObj)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    shouts: data, renderState: true
                })
            }
                // console.log("home fetch data", data)
            )
        }

    // add fetch to shouts index and set to state
    // add render shouts function
    // add conditional to check if screams are null or not
    // map through shouts or show loading. 
    // create a shout component with props of fetch data map
    // 
    render(){
        console.log('home state', this.state)

        let renderShouts = () => {
            // check if there are shouts to render. 
            return this.state.shouts.map( shout =>  <Shout shout={shout}/>)
        }   

        return(
           <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {this.state.renderState === true ? renderShouts() : <p>Loading...</p>}
                </Grid>

                <Grid item sm={4} xs={12}>
                    <p>Profile...</p>
                </Grid>
           </Grid>
        )
    }
}

export default Home