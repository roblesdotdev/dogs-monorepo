import { fetcher } from '@/utils/api-fetcher'
import * as types from './types'
import {
  requestStart,
  requestSuccess,
  requestFailure,
} from '../request/actions'

const receiveTemperaments = data => ({
  type: types.RECEIVE_TEMPERAMENTS,
  payload: data,
})

// Not use directly fetchTemperaments
const fetchDogs = query => dispatch => {
  dispatch(requestStart())
  return fetcher(`dogs?name=${query ?? ''}`)
    .then(data => {
      dispatch(requestSuccess())
      dispatch(receiveTemperaments(data))
    })
    .catch(err => dispatch(requestFailure(err)))
}

const shouldFetchTemperaments = state => {
  const items = state.temperaments.items
  if (state.request.isFetching) {
    return false
  }
  return !items.length
}

// Use only when necessary
export const fetchTemperamentsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchTemperaments(getState())) {
    console.log('Fetching temperaments...')
    return dispatch(fetchDogs())
  }
}
