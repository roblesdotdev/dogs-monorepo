import * as types from './types'

const initialState = {
  items: [],
  current: null,
}

const dogs = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_DOGS:
      return {
        ...state,
        items: action.payload,
      }

    case types.RECEIVE_DOG_DETAIL:
      return {
        ...state,
        current: action.payload,
      }

    default:
      return state
  }
}

export default dogs
