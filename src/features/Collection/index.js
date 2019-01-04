import React, { Component } from 'react'
import { connect } from 'react-redux'

import { joinProject, leaveProject, fetchCollection } from './actions'

import Project from '../Project'

const container = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

const dashboardContainerStyles = {
  border: '1px solid black'
}

const mapStateToProps = ({ collections, auth }) => ({
  collections,
  isAdmin: false, // toggle on and off manually for now, will be hooked up to redux store later
  auth
})

class Collection extends Component {
  componentDidMount() {
    this.props.fetchCollection(this.props.match.params.id)
  }

  render() {
    const {
      collections,
      isAdmin,
      joinProject,
      leaveProject,
      username,
      auth
    } = this.props
    const collection = collections[this.props.match.params.id]

    return (
      <div className="dashboard-container" style={dashboardContainerStyles}>
        <div style={container}>
          {collection &&
            collection.map((project, i) => (
              <Project
                key={i}
                {...project}
                joinProject={joinProject}
                leaveProject={leaveProject}
                username={auth.displayName}
              />
            ))}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { joinProject, leaveProject, fetchCollection }
)(Collection)
