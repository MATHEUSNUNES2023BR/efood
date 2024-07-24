import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type DadoId = {
  id: number
}
const initialState: DadoId = {
  id: 0
}
const headerDados = createSlice({
  name: 'dados',
  initialState,
  reducers: {
    capturar: (state, action: PayloadAction<DadoId>) => {
      state = action.payload
      return state
    }
  }
})
export const { capturar } = headerDados.actions
export default headerDados.reducer
