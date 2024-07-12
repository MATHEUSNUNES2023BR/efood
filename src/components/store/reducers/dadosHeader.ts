import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dados } from '../../Header'

const initialState: Dados = {
  categoria: '',
  imagem: '',
  nomeRestaurante: ''
}
const headerDados = createSlice({
  name: 'dados',
  initialState,
  reducers: {
    capturar: (state, action: PayloadAction<Dados>) => {
      state = action.payload
      return state
    }
  }
})
export const { capturar } = headerDados.actions
export default headerDados.reducer
