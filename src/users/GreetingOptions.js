import React, {Component} from 'react'
import { withRouter } from 'react-router'

class GreetingOptions extends Component {

    handleClick = (e) => this.props.history.push(`/${e.target.id}`)
    
    render() {
        return (
            <div id='greeting-options'>
                <button onClick={this.handleClick} id='signin' className='greeting-option'>Sign In</button>
                <button onClick={this.handleClick} id='signup' className='greeting-option'>Sign Up</button>
                <button onClick={this.handleClick} id='planets' className='greeting-option'>View Planets</button>
            </div>
        )
    }
}

export default withRouter(GreetingOptions)