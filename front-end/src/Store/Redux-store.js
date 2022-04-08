import { createSlice, configureStore } from "@reduxjs/toolkit";
import { productSliceReducer } from "./ProductsStore/ProductsStoreSlice";
import { productCategoriesReducers } from "./ProductCategoryStore/ProductCategoryStoreSlice";
const initalCartState = {
  isCartVisible: false,
  totalItems: 0,
  productsInCart: [],
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
