import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type Modal = {
  estado: boolean
  id?: number
}
const initialState: Modal = {
  estado: false,
  id: 0
}
const modalEstado = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    alterar: (state, action: PayloadAction<Modal>) => {
      state = action.payload
      return state
    }
  }
})
export const { alterar } = modalEstado.actions
export default modalEstado.reducer
