import { createSlice } from "@reduxjs/toolkit";

const initalProductsState = {
  isLoaded: false,
  products: null,
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: initalProductsState,
  reducers: {
    loadProducts(state, payloadData) {
      const { payload } = payloadData;
      if (payload != null) {
        state.products = payload;
        state.isLoaded = true;
      }
    },
  },
});

export const productSliceReducer = productsSlice.reducer;
export const productSliceAction = productsSlice.actions;
