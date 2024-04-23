import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },

    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload);
      cartItem.amount += 1;
    },

    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item.id === payload);
      cartItem.amount -= 1;
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach(item => {
        amount += item.amount;
        total += item.amount*item.price;
      });
      state.amount = amount;
      state.total = total;
    },

  }


});

export const { clearCart, removeItem, increment, decrement, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;