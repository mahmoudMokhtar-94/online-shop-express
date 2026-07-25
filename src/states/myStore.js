import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slices/categoriesSlice";
import productsOfCategoryReducer from "../slices/productsSlice";
import cartSliceReducer from "../slices/cartSlice";
import favSliceReducer from "../slices/favoritesSlice";
import authReducer from "../slices/authSlice";
export const myStore = configureStore({
  reducer: {
    categories: categoriesReducer,
    productsOfCategory: productsOfCategoryReducer,
    cartProducts: cartSliceReducer,
    favProducts: favSliceReducer,
    authCredentials: authReducer,
  },
});
