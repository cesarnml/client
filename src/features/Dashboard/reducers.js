import { FETCH_COLLECTIONS } from './actions'

const dashboard = (state = [], action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      return action.payload || false
    default:
      return state
  }
}

export default dashboard
