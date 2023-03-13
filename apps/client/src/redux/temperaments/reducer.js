import * as types from './types'

const initialState = {
  items: [],
}

const temperaments = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_TEMPERAMENTS:
      return {
        ...state,
        items: action.payload,
      }

    default:
      return { ...state }
  }
}

export default temperaments
