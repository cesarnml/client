import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './styles/App.css'
import NavBar from './features/NavBar'
import Collection from './features/Collection'
import Dashboard from './features/Dashboard'
import Login from './features/Login'

// set up auth
// set up routing
// need HOCs for RequireAuth and RequireNotAuth
// need route for homepage, login, and collection
// in navbar check redux store to see if logged in or not and render accordingly

class App extends Component {
  render() {
    const { loggedIn } = this.props

    return (
      <div className="App">
        <NavBar loggedIn={loggedIn} />

        {/* dashboard will display the list of collections for a user */}
        <Route path="/" exact render={props => <Dashboard {...props} />} />

        {/* collection compoment will take an id. it renders all the projects for a collection */}
        <Route
          path="/collection/:id"
          render={props => <Collection {...props} />}
        />
      </div>
    )
  }
}

export default withRouter(
  connect(
    null, // mapStateToProps
    null // mapDispatchToProps
  )(App)
)
