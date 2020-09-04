import axios from 'axios'
import { all, call, put, takeLatest } from '@redux-saga/core/effects'

import {
  GET_COMICS,
  GET_COMICS_ERROR,
  GET_COMICS_SUCCESS,
} from '../../actions/actionTypes'

axios.defaults.baseURL =
  'https://22dz8fhsfk.execute-api.ap-southeast-2.amazonaws.com/dev'

const getComics = (): Promise<any> => {
  // const url = 'http://localhost:3000/dev/comics' // TODO: use local env to select from BE localhost or live API
  const url = '/comics'
  const header = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers':
        'apikey, Authorization, Content-Type, Content-Length, X-Storage-Manager-OTP',
      'Access-Control-Allow-Methods':
        'GET, PUT, POST, DELETE, OPTIONS, HEAD, CONNECT, TRACE, PATCH',
    },
  }
  return axios
    .get(url, header)
    .then((response) => ({
      response,
    }))
    .catch((error) => error)
}

function* fetchComics(): any {
  const { response, error } = yield call(getComics)

  if (error) {
    yield all([put({ type: GET_COMICS_ERROR, payload: error })])
  } else {
    yield put({
      type: GET_COMICS_SUCCESS,
      payload: response.data,
    })
  }
}

function* watchSagas(): any {
  yield takeLatest(GET_COMICS, fetchComics)
}

export const comicsSagas = [watchSagas]
