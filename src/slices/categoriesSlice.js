import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

export const fetchCategories = createAsyncThunk(
  "eCommerceApi/fetchCategories",
  // Async Logic Comes Here
  async () => {
    const response = await api.get("/products/categories");
    return response.data;
  },
);

export const fetchCategoriesList = createAsyncThunk(
  "eCommerceApi/fetchCategoriesList",
  // Async Logic Comes Here
  async () => {
    const response = await api.get("/products/category-list");
    return response.data;
  },
);

const initialState = {
  categories: [],
  categoriesList: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.fulfilled, (currentState, action) => {
        currentState.categories = action.payload;
      })
      .addCase(fetchCategoriesList.fulfilled, (currentState, action) => {
        currentState.categoriesList = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
