import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});