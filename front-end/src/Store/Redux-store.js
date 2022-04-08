import { configureStore } from "@reduxjs/toolkit";
import { productSliceReducer } from "./ProductsStore/ProductsStoreSlice";
import { productCategoriesReducers } from "./ProductCategoryStore/ProductCategoryStoreSlice";
import { cartReducers } from "./CartStore/CartStore";
import { userReducers } from "./UserStroe/UserStore";

const store = configureStore({
  reducer: {
    cart: cartReducers,
    product: productSliceReducer,
    productCategories: productCategoriesReducers,
    user: userReducers,
  },
});

export default store;
