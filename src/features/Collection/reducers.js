import { FETCH_COLLECTION, JOIN_PROJECT, LEAVE_PROJECT } from './actions'

const collections = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return { ...state, [action.id]: action.payload } || false
    case JOIN_PROJECT:
      return { ...state, [action.id]: action.payload }
    case LEAVE_PROJECT:
      return { ...state, [action.id]: action.payload }
    default:
      return state
  }
}

export default collections
