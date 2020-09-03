import * as ActionTypes from './actionTypes'

export interface ComicsState {
  readonly comics: never[]
  readonly isComicsLookUpPending: boolean
}

export interface GetComicsAction {
  readonly type: typeof ActionTypes.GET_COMICS
}
