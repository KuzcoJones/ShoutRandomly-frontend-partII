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
    },
    content: {
        padding: 25,
        objectFit: 'cover'
    }
}
class Shout extends React.Component{
    render(){
        const { classes } = this.props
        return(
            <div>
                <Card className={classes.card}>
                    <CardMedia className = {classes.image}
                    image={userImage}title='Profile Image'/>
                    <CardContent className={classes.content}>
                        <Typography variant="h5">
                            {user.username}
                        </Typography>

                        <Typography variant="body2" color="textSecondary">
                            {shout.createdAt}
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