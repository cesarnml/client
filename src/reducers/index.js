import { combineReducers } from 'redux'
import dashboard from '../features/Dashboard/reducers'
import collections from '../features/Collection/reducers'

const State = combineReducers({ dashboard, collections })

export default State
