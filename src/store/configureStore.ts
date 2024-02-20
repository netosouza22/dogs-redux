import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducers/counter/counterSlice';
import loginReducer from './reducers/login/loginSlice';

const reducer = {
  counter: counterReducer,
  login: loginReducer
}

const store = configureStore({reducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;