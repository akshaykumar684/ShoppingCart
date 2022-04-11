import { createSlice } from "@reduxjs/toolkit";

const initialProductCategoryState = {
  isLoaded: false,
  productCategories: null,
};

const productCategoriesSlice = createSlice({
  name: "productCategoriesSlice",
  initialState: initialProductCategoryState,

  reducers: {
    loadProductCategories(state, payloadData) {
      const { payload } = payloadData;

      if (payload != null) {
        state.productCategories = payload;
        state.isLoaded = true;
      }
    },
  },
});

export const productCategoriesAction = productCategoriesSlice.actions;
export const productCategoriesReducers = productCategoriesSlice.reducer;
