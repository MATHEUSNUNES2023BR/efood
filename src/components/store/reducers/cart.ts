import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioDados } from '../../ListaProduto'

type CartState = {
  items: CardapioDados[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
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

    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, openCart, closeCart, remove } = cartSlice.actions
export default cartSlice.reducer
