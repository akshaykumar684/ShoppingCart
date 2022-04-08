import { createSlice } from "@reduxjs/toolkit";

const initalCartState = {
  isCartVisible: false,
  totalItems: 0,
  productsInCart: [],
  totalItemsPriceInCart: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initalCartState,
  reducers: {
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    addProductInCart(state, payloadData) {
      const { payload } = payloadData;
      const product = state.productsInCart.find((p) => p.id === payload.id);
      if (product !== undefined) {
        product.quantity = product.quantity + 1;
      } else {
        payload.quantity = 1;
        state.productsInCart.push(payload);
      }
      state.totalItems++;
      state.totalItemsPriceInCart += payload.price;
    },
    removeProductFromCart(state, payloadData) {
      const { payload } = payloadData;
      const existingProduct = state.productsInCart.find(
        (p) => p.id === payload.id
      );
      if (existingProduct !== undefined) {
        if (existingProduct.quantity === 1) {
          state.productsInCart = state.productsInCart.filter(
            (p) => p.id !== existingProduct.id
          );
        } else {
          existingProduct.quantity--;
        }
        state.totalItems--;
        state.totalItemsPriceInCart -= payload.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducers = cartSlice.reducer;
