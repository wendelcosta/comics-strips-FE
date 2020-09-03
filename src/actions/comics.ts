import * as ActionTypes from './actionTypes'
import { GetComicsAction } from './comicsTypes'

export const fetchComics = (): GetComicsAction => ({
  type: ActionTypes.GET_COMICS,
})
