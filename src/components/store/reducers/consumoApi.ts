import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '..'
// Define o tipo de estrutura
export type Estrutura = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

// Estado inicial
const initialState: Estrutura[] = []

// Criação do slice
const apiDados = createSlice({
  name: 'dados',
  initialState,
  reducers: {
    setDados: (state, action: PayloadAction<Estrutura[]>) => {
      return action.payload
    }
  }
})

// Exporta a ação para configurar os dados
export const { setDados } = apiDados.actions
export default apiDados.reducer

// Função para buscar dados e despachar a ação para atualizar o estado
export const fetchDados = (): AppThunk => async (dispatch: any) => {
  try {
    const response = await fetch(
      'https://fake-api-tau.vercel.app/api/efood/restaurantes'
    )
    const data: Estrutura[] = await response.json()
    dispatch(setDados(data))
  } catch (error) {
    console.error('Erro ao buscar os dados:', error)
  }
}
