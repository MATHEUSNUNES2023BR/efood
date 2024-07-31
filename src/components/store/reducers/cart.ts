import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioDados } from '../../ListaProduto'

type CartState = {
  items: CardapioDados[]
  isOpenCart: boolean
  isOpenEndereco: boolean
  isOpenPayment: boolean
  isOpenMesage: boolean
  precoTotal: number
  hash: number | null
  lastClosedSection: string | null // Última seção fechada
}

const initialState: CartState = {
  items: [],
  isOpenCart: false,
  isOpenEndereco: false,
  isOpenPayment: false,
  isOpenMesage: false,
  precoTotal: 0,
  hash: null,
  lastClosedSection: null
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
      state.lastClosedSection = 'Cart'
    },

    openEndereco: (state) => {
      state.isOpenEndereco = true
    },
    closeEndereco: (state) => {
      state.isOpenEndereco = false
      state.lastClosedSection = 'Endereco'
    },

    openPayament: (state) => {
      state.isOpenPayment = true
    },
    closePayament: (state) => {
      state.isOpenPayment = false
      state.lastClosedSection = 'Payment'
    },

    openMesage: (state) => {
      state.isOpenMesage = true
    },
    closeMesage: (state) => {
      state.isOpenMesage = false
      state.lastClosedSection = 'Mesage'
    },

    gerarHashELimpar: (state) => {
      state.hash = Math.floor(100000 + Math.random() * 900000)
      state.items = []
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
  openEndereco,
  closeEndereco,
  openPayament,
  closePayament,
  openMesage,
  closeMesage,
  limpar,
  gerarHashELimpar
} = cartSlice.actions

export default cartSlice.reducer
