import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCollection } from './actions'

// name, description, info
// dashboard, new button up top (contingent on admin)

const dashboardContainerStyles = {
  border: '1px solid black'
}

const dashboardTitleStyles = {
  position: 'relative'
}

const collectionsContainerStyles = {
  display: 'flex',
  flexDirection: 'column'
}

const collectionTileSyles = {
  display: 'flex',
  justifyContent: 'space-around',
  border: '1px solid black',
  margin: '10px'
}

const infoTileStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start'
}

const newButtonStyle = {
  position: 'absolute',
  right: '30px',
  top: '10px',
  fontSize: '20px'
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
        <div style={collectionsContainerStyles}>
          {collection
            ? collection.map((project, i) => (
                <div
                  className="dashboard-collection-container"
                  style={collectionTileSyles}
                  key={i}
                >
                  <h2>{project.projectName}</h2>

                  <div style={infoTileStyles}>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchCollection }
)(Collection)
