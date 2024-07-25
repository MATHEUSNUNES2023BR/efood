import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import headerDados from './reducers/dadosHeader'
import apiDados from './reducers/consumoApi'
import modal from './reducers/modal'
const store = configureStore({
  reducer: {
    headerDados,
    apiDados,
    modal
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
})
export type RootReducer = ReturnType<typeof store.getState>
export default store
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReducer,
  unknown,
  Action<string>
>
