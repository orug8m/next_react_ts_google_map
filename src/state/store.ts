import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './ducks' // import all reducers from ducks/index.js

const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>

export const createStore = () => {
  const middlewares = [thunkMiddleware, ...getDefaultMiddleware()]

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  })
}
