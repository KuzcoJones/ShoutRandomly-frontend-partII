import React from 'react'
import editDetails from './editDetails'

import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

// Mui 
import Button from '@material-ui/core/Button'

const styles = theme => ({
    paper: {padding: 20},
    profile: {
        '& .image-wrapper': {
            textAlign: 'center', 
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: '80%',
                left: '70%'
            }
        },
        '& .profile-image':{
            width: 200,
            height: 200,
            objectFit: 'cover',
            maxWidth: '100%',
            borderRadius: '50%'
        },
        '& .profile-details': {
            textAlign: 'center',
            '& span, svg': {
                versionAlign: 'middle'
            },
            '& a':{
                color: theme.palette.primary.main
            }
        }, 
        '& hr': {
            border: 'none',
            margin: '0 0 10px 0'
        },
        '& svg.button': {
            '&:hover':{
                cursor: 'pointer'
            }
        }
    },
    buttons: {
        textAlign: 'center',
        '& a': {
            margin: '20px, 10px'
        }
    }
})

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
           renderState:false,
           userInfo: {

           }
        }
    }

    componentDidMount(){
        //    
        this.setState({
            ...this.state, renderState: true
        })
    }

    fetchUserInfo = () => {
        const reqObj = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }

        // console.log(this.props.userInfo.userInfo.userId)
        if (this.props.userInfo.userInfo.userId && this.state.renderState === true){
            fetch(`http://localhost:3000/users/${this.props.userInfo.userInfo.userId}`, reqObj)
            .then(resp => resp.json())
            .then(data => this.setState({...this.state, userInfo: data, renderState: 'done'}))
        }
    }
    

    renderUserInfo = () => {
        return <div>
            <h3>{this.state.userInfo.bio}</h3>
            <h3>{this.state.userInfo.username}</h3>
            <img src="" alt=""/>
        </div>
    }

    renderEditForm = () => {

    }

    loadingMessage = () => {
        return <h3>Loading</h3>
    }

    render(){
        
        console.log(this.state)
        return(
            <div>
                <h2>Profile</h2>
                {this.state.renderState !== false ? this.fetchUserInfo() : this.loadingMessage()}
                {this.state.renderState === 'done' ? this.renderUserInfo() : this.loadingMessage()}
            </div>
        )
    }
}

export default (withStyles(styles)(Profile))