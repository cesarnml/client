import axios from 'axios'
export const FETCH_COLLECTION = 'FETCH_COLLECTION'
export const JOIN_PROJECT = 'JOIN_PROJECT'
export const LEAVE_PROJECT = 'LEAVE_PROJECT'

export const fetchCollection = id => async dispatch => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/collections/${id}/projects`
  )
  dispatch({ type: FETCH_COLLECTION, id, payload: res.data })
}
