import axios from 'axios'
export const FETCH_COLLECTION = 'FETCH_COLLECTION'

const mockData = [
  {
    id: 1,
    projectName: 'project 1',
    description: ';lkafleakh;kajge'
  },
  {
    id: 1,
    projectName: 'project 2',
    description: ';lkafleakh;kajge'
  },
  {
    id: 3,
    projectName: 'project 3',
    description: ';lkafleakh;kajge'
  }
]

export const fetchCollection = id => async dispatch => {
  // const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/collections`)
  // dispatch({ type: FETCH_COLLECTIONS, payload: res.data })

  dispatch({ type: FETCH_COLLECTION, id, payload: mockData })
}
