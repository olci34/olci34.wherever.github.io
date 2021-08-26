import React, {Component} from 'react'

class SignUpButton extends Component {

    render() {
        return (
            <div id='greeting-options'>
                <button id='sign-in' className='greeting-option'>Sign In</button>
                <button id='sign-up' className='greeting-option'>Sign Up</button>
                <button id='planets-view-button' className='greeting-option'>View Planets</button>
            </div>
        )
    }
}

export default SignUpButton