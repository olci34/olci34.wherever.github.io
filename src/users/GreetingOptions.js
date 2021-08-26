import React, {Component} from 'react'
import { withRouter } from 'react-router'
import UserForm from './UserForm'


class GreetingOptions extends Component {

    handleSignIn = (e) => this.props.history.push('/signin')
    handleSignUp = (e) => this.props.history.push('/signup')
    
    render() {
        return (
            <div id='greeting-options'>
                <button onClick={this.handleSignIn} id='sign-in' className='greeting-option'>Sign In</button>
                <button onClick={this.handleSignUp} id='sign-up' className='greeting-option'>Sign Up</button>
                <button onClick={(e) => console.log('view planets')} id='planets-view-button' className='greeting-option'>View Planets</button>
            </div>
        )
    }
}

export default withRouter(GreetingOptions)