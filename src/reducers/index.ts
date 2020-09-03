import { combineReducers, Reducer } from 'redux'

import comics from './comics'

const configureRootReducer = (): Reducer =>
  combineReducers({
    comics,
  })
export default configureRootReducer
