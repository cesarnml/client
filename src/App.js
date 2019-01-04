import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { requireAuth } from './features/Authentication'
import { fetchUser } from './features/Authentication/authActions'
import NavBar from './features/NavBar'
import Collection from './features/Collection'
import Login from './features/Login'
import './styles/App.css'
import Dashboard from './features/Dashboard'

const AuthLandingPage = requireAuth(Login)

class App extends Component {
  componentDidMount = () => this.props.fetchUser()
  componentDidUpdate = prevProps => {
    if (this.props.location !== prevProps.location) {
      this.props.fetchUser()
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Dashboard} />

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
    null,
    { fetchUser }
  )(App)
)
