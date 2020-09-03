import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import configureRootReducer from '.'
import configureRootSaga from '../sagas'

const persistConfig = {
  key: 'Comics',
  storage,
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const persistedReducer = persistReducer(persistConfig, configureRootReducer())

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
sagaMiddleware.run(configureRootSaga)
const persistor = persistStore(store)
export { persistor, store }
