import React, { Fragment } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import { ReactComponent as LavaLamp } from '../../assets/svgs/lava-lamp.svg'
import Dashboard from '../Dashboard'

const Authenticate = Component => ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return <LavaLamp />
      case false:
        return <Component />
      default:
        return <Dashboard />
    }
  }

  return <Fragment>{renderContent()}</Fragment>
}

const mapStateToProps = ({ auth }) => ({ auth })

const composedAuthenticate = compose(
  connect(mapStateToProps),
  Authenticate
)

export default composedAuthenticate
