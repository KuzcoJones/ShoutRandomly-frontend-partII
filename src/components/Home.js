import React from 'react'
import NavBar from './NavBar'
import Findfollow from './Findfollow'
import Shoutform from './Shoutform'
import Newsfeed from './Newsfeed'
import Grid  from '@material-ui/core/Grid';

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            screams: null,
        }
    }


    // add fetch to shouts index and set to state
    // add render shouts function
    // add conditional to check if screams are null or not
    // map through shouts or show loading. 
    // create a shout component with props of fetch data map
    // 
    render(){
        console.log('home props', this.state)

        let renderShouts = () => {
            // check if there are shouts to render. 
        }   

        return(
           <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {renderShouts}
                </Grid>

                <Grid item sm={4} xs={12}>
                    <p>Profile...</p>
                </Grid>
           </Grid>
        )
    }
}

export default Home