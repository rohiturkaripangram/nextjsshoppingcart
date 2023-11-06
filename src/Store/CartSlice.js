"use client";

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.items.some((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        toast.success("Item is Added")
      } else {
        toast.error("The Item is already present in the cart");
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (element) => element.id !== action.payload
        
      );
      toast.success("Item is removed successfully ")
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      toast.success("Cart is cleared successfully ")
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
