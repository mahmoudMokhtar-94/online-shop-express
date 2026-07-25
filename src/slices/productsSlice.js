import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/axios";

export const fetchProductsByCategory = createAsyncThunk(
  "eCommerceApi/fetchProductsByCategory",
  // Async Logic Comes Here
  async (cat, { rejectWithValue }) => {
    try {
      const response = await api.get(`/products/category/${cat}`);
      return response.data.products;
    } catch (error) {
      if (!error.response) {
        return rejectWithValue({
          type: "NETWORK_ERROR",
          message: "Oops, Seems that you have lost your internet connection.",
        });
      }

      return rejectWithValue("Oops, Failed to load products of this category");
    }
  },
);

export const fetchProductById = createAsyncThunk(
  "eCommerceApi/fetchProductById",
  // Async Logic Comes Here
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return rejectWithValue("Oops, product not found");
      }

      if (!error.response) {
        return rejectWithValue(
          "Oops, Seems that you have lost your internet connection",
        );
      }

      return rejectWithValue("Oops, an unexpected error has occured");
    }
  },
);

export const fetchProductsByQuery = createAsyncThunk(
  "eCommerceApi/fetchProductByQuery",
  // Async Logic Comes Here
  async (query) => {
    const response = await api.get(`products/search?q=${query}`);
    return response.data.products;
  },
);

const initialState = {
  productsOfCategory: { products: {} },
  product: {},
  statusOfCategory: {}, //  Status of the request that fetchs products of specific category
  errorOfCategory: {}, //  Potential Error thrown when trying to fetch products of a specific category
  statusOfID: "", // Status of the request that fetchs product of specific id
  errorOfID: "", // Potential error thrown when trying to fetch a product of specific id
  statusofQuery: "", // Status of the request that fetchs products by query (i.e. Search Functionality)
  productsOfQuery: { products: [] },
  isNetworkError: false, // Global Flag that indicates Network Error
};

export const productSlice = createSlice({
  name: "productsOfCategory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsByCategory.pending, (currentState, action) => {
        const category = action.meta.arg;
        currentState.statusOfCategory[category] = "pending";
      })
      .addCase(fetchProductsByCategory.fulfilled, (currentState, action) => {
        const category = action.meta.arg;
        currentState.productsOfCategory.products[category] = action.payload;
        currentState.statusOfCategory[category] = "fulfilled";
      })
      .addCase(fetchProductsByCategory.rejected, (currentState, action) => {
        const category = action.meta.arg;
        currentState.errorOfCategory[category] = action.payload;
        currentState.statusOfCategory[category] = "rejected";
        if (action.payload.type === "NETWORK_ERROR") {
          currentState.isNetworkError = true;
        }
      })
      .addCase(fetchProductById.pending, (currentState) => {
        currentState.statusOfID = "pending";
      })
      .addCase(fetchProductById.fulfilled, (currentState, action) => {
        currentState.product = action.payload;
        currentState.statusOfID = "fulfilled";
      })
      .addCase(fetchProductById.rejected, (currentState, action) => {
        currentState.statusOfID = "rejected";
        currentState.errorOfID = action.payload;
      })
      .addCase(fetchProductsByQuery.pending, (currentState) => {
        currentState.statusofQuery = "pending";
      })
      .addCase(fetchProductsByQuery.fulfilled, (currentState, action) => {
        currentState.productsOfQuery.products = action.payload;
        currentState.statusofQuery = "fulfilled";
      });
  },
});

export default productSlice.reducer;
