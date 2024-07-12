import { configureStore } from '@reduxjs/toolkit'
import headerDados from './reducers/dadosHeader'
const store = configureStore({
  reducer: {
    headerDados
  }
})
export type RootReducer = ReturnType<typeof store.getState>
export default store
