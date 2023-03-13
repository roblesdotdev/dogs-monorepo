import { combineReducers } from 'redux'
import request from './request/reducer'
import dogs from './dogs/reducer'

const rootReducer = combineReducers({
  request,
  dogs,
})

export default rootReducer
