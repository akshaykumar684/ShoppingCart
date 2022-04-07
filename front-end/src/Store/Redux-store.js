import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalCartState = {
  isCartVisible: false,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initalCartState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;

export default store;
