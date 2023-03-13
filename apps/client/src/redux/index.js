import { combineReducers } from 'redux'
import request from './request/reducer'
import dogs from './dogs/reducer'
import temperaments from './temperaments/reducer'

const rootReducer = combineReducers({
  request,
  dogs,
  temperaments,
})

export default rootReducer
