import { FETCH_COLLECTION } from './actions'

const collections = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return { ...state, [action.id]: action.payload } || false
    default:
      return state
  }
}

export default collections
