import axios from 'axios'
export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS'

const mockData = [
  {
    id: 1,
    collectionName: 'collection 1',
    description: ';lkafleakh;kajge',
    startDate: 'now',
    endDate: 'then',
    maxMembersPerTeam: 5
  },
  {
    id: 1,
    collectionName: 'collection 2',
    description: ';lkafleakh;kajge',
    startDate: 'now',
    endDate: 'then',
    maxMembersPerTeam: 5
  },
  {
    id: 3,
    collectionName: 'collection 3',
    description: ';lkafleakh;kajge',
    startDate: 'now',
    endDate: 'then',
    maxMembersPerTeam: 5
  }
]

export const fetchCollections = () => async dispatch => {
  // const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/collections`)
  // dispatch({ type: FETCH_COLLECTIONS, payload: res.data })

  dispatch({ type: FETCH_COLLECTIONS, payload: mockData })
}
