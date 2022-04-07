import { createSlice, configureStore } from "@reduxjs/toolkit";
import { productSliceReducer } from "./ProductsStore/ProductsStoreSlice";
import { productCategoriesReducers } from "./ProductCategoryStore/ProductCategoryStoreSlice";
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
  reducer: {
    cart: cartSlice.reducer,
    product: productSliceReducer,
    productCategories: productCategoriesReducers,
  },
});

export const cartActions = cartSlice.actions;

export default store;
