import { combineReducers } from 'redux'
import date from './reducers/dateReducer'

const rootReducer = combineReducers({
  date,
})

export default rootReducer
