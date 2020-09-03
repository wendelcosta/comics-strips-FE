import { all, call, spawn, delay } from '@redux-saga/core/effects'
import { comicsSagas } from './comics'

export default function* configureRootSaga(): any {
  const sagas = [...comicsSagas]
  yield all(
    sagas.map((saga) =>
      // eslint-disable-next-line func-names
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
          yield delay(1000)
        }
      })
    )
  )
}
