import * as types from './types'

export const requestStart = () => ({
  type: types.REQUEST_START,
})

export const requestSuccess = () => ({
  type: types.REQUEST_SUCCESS,
})

export const requestFailure = error => ({
  type: types.REQUEST_FAILURE,
  payload: error,
})

export const clearError = () => ({
  type: types.CLEAR_ERROR,
})
