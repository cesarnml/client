import { combineReducers } from 'redux'

import dashboard from '../features/Dashboard/reducers'
import collections from '../features/Collection/reducers'
import { authReducer } from '../features/Authentication'

const State = combineReducers({ dashboard, collections, auth: authReducer })

export default State
