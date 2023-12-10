import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import querySlice from './querySlice'

import createSagaMiddleware from 'redux-saga'

import rootSaga from '../saga/rootSaga'
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    query:querySlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application