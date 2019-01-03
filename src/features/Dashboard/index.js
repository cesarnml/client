import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCollections } from './actions'

// name, description, info
// dashboard, new button up top (contingent on admin)

const mapStateToProps = ({ dashboard }) => ({
  dashboard
})

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchCollections()
  }

  render() {
    const { dashboard } = this.props

    return (
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        {dashboard
          ? dashboard.map(collection => (
              <div className="dashboard-collection-container">
                <h2>{collection.collectionName}</h2>
                <p>{collection.description}</p>
                <p>Start: {collection.startDate}</p>
                <p>End: {collection.endDate}</p>
                <p>Max members per team: {collection.maxMembersPerTeam}</p>
              </div>
            ))
          : null}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchCollections }
)(Dashboard)
