import { createSlice } from "@reduxjs/toolkit";

const storageFavorites = JSON.parse(localStorage.getItem("favorite-products"));

const initialState = {
  favProducts: storageFavorites ?? [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (currentState, action) => {
      const productToAdd = action.payload.product;
      currentState.favProducts.push(productToAdd);
      localStorage.setItem(
        "favorite-products",
        JSON.stringify(currentState.favProducts),
      );
      console.log("ADDED TO FAVORITES");
    },
    removeFromFavorites: (currentState, action) => {
      let productsAfterRemoving = currentState.favProducts.filter(
        (favProduct) => favProduct.id != action.payload.id,
      );
      currentState.favProducts = productsAfterRemoving;
      localStorage.setItem(
        "favorite-products",
        JSON.stringify(productsAfterRemoving),
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
