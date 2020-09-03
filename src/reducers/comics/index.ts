import * as ActionTypes from '../../actions/actionTypes'
import { ComicsState } from '../../actions/comicsTypes'

const initialState: ComicsState = {
  comics: [],
  isComicsLookUpPending: false,
}

const comicsReducer = (
  state: ComicsState = initialState,
  // eslint-disable-next-line
  action: any
): ComicsState => {
  switch (action.type) {
    case ActionTypes.GET_COMICS:
      return {
        ...state,
        comics: [],
        isComicsLookUpPending: true,
      }
    case ActionTypes.GET_COMICS_SUCCESS:
      return {
        ...state,
        comics: action.payload,
        isComicsLookUpPending: false,
      }

    default:
      return state
  }
}

export default comicsReducer
