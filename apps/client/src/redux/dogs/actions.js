import { fetcher } from '@/utils/api-fetcher'
import * as types from './types'
import {
  requestStart,
  requestSuccess,
  requestFailure,
} from '../request/actions'

const receiveDogs = data => ({
  type: types.RECEIVE_DOGS,
  payload: data,
})

const receiveDogDetail = data => ({
  type: types.RECEIVE_DOG_DETAIL,
  payload: data,
})

// Not use directly fetchDogs
const fetchDogs = query => dispatch => {
  dispatch(requestStart())
  return fetcher(`dogs?name=${query ?? ''}`)
    .then(data => {
      dispatch(requestSuccess())
      dispatch(receiveDogs(data))
    })
    .catch(err => dispatch(requestFailure(err)))
}

const fetchDogDetail = dogId => dispatch => {
  dispatch(requestStart())
  return fetcher(`dogs/${dogId}`)
    .then(data => {
      dispatch(requestSuccess())
      dispatch(receiveDogDetail(data))
    })
    .catch(err => dispatch(requestFailure(err)))
}

const shouldFetchDogs = state => {
  const dogs = state.dogs
  if (state.request.isFetching) {
    return false
  }
  return !dogs.items.length
}

const shouldFetchDogDetail = (dogId, state) => {
  const dog = state.dogs.current
  if (state.request.isFetching) return false
  if (dog && dogId == dog.id) return false
  return true
}

// Use only when necessary
export const fetchDogsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchDogs(getState())) {
    console.log('Fetching dogs...')
    return dispatch(fetchDogs())
  }
}

export const fetchDogDetailIfNeeded = dogId => (dispatch, getState) => {
  if (shouldFetchDogDetail(dogId, getState())) {
    console.log(`Fetching dog ${dogId}`)
    return dispatch(fetchDogDetail(dogId))
  }
}
