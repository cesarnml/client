import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCollection } from './actions'

import Project from '../Project'

const container = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}

const dashboardContainerStyles = {
  border: '1px solid black'
}

const mapStateToProps = ({ collections }) => ({
  collections,
  isAdmin: false // toggle on and off manually for now, will be hooked up to redux store later
})

class Collection extends Component {
  componentDidMount() {
    this.props.fetchCollection(this.props.match.params.id)
  }

  render() {
    const { collections, isAdmin } = this.props
    const collection = collections[this.props.match.params.id]

    return (
      <div className="dashboard-container" style={dashboardContainerStyles}>
        <div style={container}>
          {collection &&
            collection.map((project, i) => <Project key={i} {...project} />)}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchCollection }
)(Collection)
