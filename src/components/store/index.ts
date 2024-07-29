import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import dadosHeader from './reducers/dadosHeader'
import modal from './reducers/modal'
export const store = configureStore({
  reducer: {
    dadosHeader,
    modal,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
