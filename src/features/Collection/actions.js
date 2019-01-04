import axios from 'axios'
export const FETCH_COLLECTION = 'FETCH_COLLECTION'

export const fetchCollection = id => async dispatch => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/collections/${id}`
  )
  dispatch({ type: FETCH_COLLECTION, id, payload: res.data })
}
