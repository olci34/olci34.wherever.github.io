import React, { Component } from "react";
import { connect } from "react-redux";
import addUser from "../actions/addUser";
import { withRouter } from "react-router-dom";
import signIn from "../actions/signIn";
import Loader from "../Loader";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {name: "",password: ""},
      loader: false
    };
  }

  handleChange = (e) => {
    const user = this.state.user
    user[e.target.name] = e.target.value
    this.setState({...this.state, user: user});
  };

  handleSubmit = async(e) => {
    e.preventDefault();
    this.setState({...this.state, loader: true});
    if (this.props.serve === "Sign In") {
      await this.props.signIn(this.state.user); 
    } else if (this.props.serve === "Sign Up") {
      await this.props.addUser(this.state.user);
    }
    if (localStorage.getItem('userId')) {
      this.setState({...this.state, loader: false})
      this.props.history.push("/trips")
    };
  };

  render() {
    return (
      <>
      <Loader loader={this.state.loader}/>
      <div className="user-form">
        <h1>{this.props.serve}</h1>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <label>Username:</label>
          <br/>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
          <br/><br />
          <label>Password:</label>
          <br/>
          <input type="password" onChange={this.handleChange} name="password" />
          <br /><br/>
          <input type="submit" className="submit-button" value={this.props.serve} />
        </form>
      </div>
      </>
    );
  }
}

export default withRouter(connect(null, { signIn, addUser })(UserForm));
