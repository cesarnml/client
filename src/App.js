import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// set up auth
// set up routing
// need HOCs for RequireAuth and RequireNotAuth
// need route for homepage, login, and collection
// in navbar check redux store to see if logged in or not and render accordingly

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
