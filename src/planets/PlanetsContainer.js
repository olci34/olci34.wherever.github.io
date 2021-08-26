import { connect } from "react-redux";
import fetchPlanets from "../actions/fetchPlanets";
import React, { Component } from "react";
import Planets from "./Planets";
import NavBar from "../NavBar";
import { Route, Switch } from "react-router";
import Planet from "./Planet";

class PlanetsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {signedIn: false}
  }
  componentDidMount() {
    if (localStorage.getItem('userId')){
      this.setState({signedIn: true})
    }
    this.props.fetchPlanets();
  }

  render() {
    return (
      <>
        <NavBar signedIn={this.state.signedIn} />
        <Switch>
          <Route exact path="/planets">
            <Planets />
          </Route>
          <Route path="/planets/:id">
            <Planet />
          </Route>
        </Switch>
      </>
    );
  }
}

export default connect(null, { fetchPlanets })(PlanetsContainer);
