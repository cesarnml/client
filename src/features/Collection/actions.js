import axios from 'axios'
export const FETCH_COLLECTION = 'FETCH_COLLECTION'
export const JOIN_PROJECT = 'JOIN_PROJECT'
export const LEAVE_PROJECT = 'LEAVE_PROJECT'

export const joinProject = (id, collectionId) => async dispatch => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/user/${id}`
  )

  dispatch(fetchCollection(collectionId))
  dispatch({ type: JOIN_PROJECT })
}

export const leaveProject = (id, collectionId) => async dispatch => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/user/${id}`
  )

  dispatch(fetchCollection(collectionId))
  dispatch({ type: LEAVE_PROJECT })
}

export const fetchCollection = id => async dispatch => {
  const res = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/collections/${id}/projects`
  )

  const members = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/api/collections/${id}/projects/members`
  )

  const joinedRes = res.data.map(project => ({
    ...project,
    members: members.data
      .filter(member => project.id === member.projectId)
      .map(({ userDisplayName }) => userDisplayName)
  }))

  dispatch({ type: FETCH_COLLECTION, id, payload: joinedRes })
}
