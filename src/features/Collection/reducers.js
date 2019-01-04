import { FETCH_COLLECTION, JOIN_PROJECT, LEAVE_PROJECT } from './actions'

const collections = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return { ...state, [action.id]: action.payload } || false
    case JOIN_PROJECT:
      return state
    case LEAVE_PROJECT:
      return state
    default:
      return state
  }
}

export default collections
