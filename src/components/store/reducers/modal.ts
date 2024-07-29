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
    alterar: (state, action: PayloadAction<Omit<Modal, 'estado'>>) => {
      state.id = action.payload.id
      return state
    },
    open: (state) => {
      state.estado = true
      return state
    },
    close: (state) => {
      state.estado = false
      return state
    }
  }
})
export const { alterar, open, close } = modalEstado.actions
export default modalEstado.reducer
