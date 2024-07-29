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
    openModal: (state) => {
      state.estado = true
      return state
    },
    closeModal: (state) => {
      state.estado = false
      return state
    }
  }
})
export const { alterar, openModal, closeModal } = modalEstado.actions
export default modalEstado.reducer
