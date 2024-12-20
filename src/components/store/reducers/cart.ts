import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioDados } from '../../ListaProduto'

type CartState = {
  items: CardapioDados[]
  isOpenCart: boolean
  isOpenProdutos: boolean
  precoTotal: number
  hash: string | null
}

const initialState: CartState = {
  items: [],
  isOpenCart: false,
  isOpenProdutos: false,
  precoTotal: 0,
  hash: ''
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioDados>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        (item: { id: number }) => item.id === action.payload
      )
      if (index !== -1) {
        state.items.splice(index, 1)
      }
    },
    limpar: (state) => {
      state.items = []
    },
    precoTotal: (state) => {
      state.precoTotal = state.items.reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual.preco)
      }, 0)
    },

    openCart: (state) => {
      state.isOpenCart = true
    },
    closeCart: (state) => {
      state.isOpenCart = false
    },
    openProduto: (state) => {
      state.isOpenProdutos = true
    },

    closeProduto: (state) => {
      state.isOpenProdutos = false
    },

    gerarHashELimpar: (state, action) => {
      state.hash = action.payload
      state.items = []
    },
    zerarPreco: (state) => {
      state.precoTotal = 0
    }
  }
})

export const {
  add,
  openCart,
  closeCart,
  remove,
  precoTotal,
  zerarPreco,
  limpar,
  gerarHashELimpar,
  openProduto,
  closeProduto
} = cartSlice.actions

export default cartSlice.reducer
