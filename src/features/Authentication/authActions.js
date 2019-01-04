import axios from 'axios'
import { FETCH_USER } from './types'
axios.defaults.withCredentials = true

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user`)
  dispatch({ type: FETCH_USER, payload: res.data })
}
