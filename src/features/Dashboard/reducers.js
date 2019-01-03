import { FETCH_COLLECTIONS } from './actions'

export default function dashboardReducer(state = null, action) {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      return action.payload || false
    default:
      return state
  }
}
