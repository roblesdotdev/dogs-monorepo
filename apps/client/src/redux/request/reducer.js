import * as types from './types'

const initialState = {
  isFetching: false,
  error: null,
}

const request = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_START:
      return {
        ...state,
        error: null,
        isFetching: true,
      }
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
      }

    case types.REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }

    case types.CLEAR_ERROR:
      return {
        ...state,
        error: false,
      }

    default:
      return state
  }
}

export default request
