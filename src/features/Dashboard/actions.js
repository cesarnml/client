import axios from 'axios'
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS'

export const fetchCollections = () => async dispatch => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/collections`
  )
  dispatch({ type: FETCH_COLLECTIONS, payload: res.data })
}
