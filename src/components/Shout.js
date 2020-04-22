import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography  from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    image: {
        minWidth: 200,
        width: 400
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}

class Shout extends React.Component{
    render(){
        // console.log(this.props)
        const { classes, shout } = this.props
        return(
            <div>
                <Card className={classes.card}>
                    <CardMedia className = {classes.image}
                    image={shout.user.imgUrl} title='Profile Image'/>

                    <CardContent className={classes.content}>
                        <Typography variant="h5">
                            {shout.user.username}
                        </Typography>

                        <Typography variant="body2" color="textSecondary">
                            {shout.created_at}
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                            {shout.body}
                        </Typography>
                    </CardContent>
                </Card>  
            </div>
        )
    }
}

export default withStyles(styles)(Shout); 