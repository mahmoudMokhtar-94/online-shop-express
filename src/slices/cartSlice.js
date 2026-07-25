import { createSlice } from "@reduxjs/toolkit";

const storageCartProducts = JSON.parse(localStorage.getItem("cart-products"));

const initialState = {
  cartProducts: storageCartProducts ?? [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (currentState, action) => {
      const productToAdd = {
        ...action.payload.product,
      };

      currentState.cartProducts.push(productToAdd);
      localStorage.setItem(
        "cart-products",
        JSON.stringify(currentState.cartProducts),
      );
    },
    removeFromCart: (currentState, action) => {
      let productsAfterRemoving = currentState.cartProducts.filter(
        (cartProduct) => cartProduct.id != action.payload.id,
      );
      currentState.cartProducts = productsAfterRemoving;
      localStorage.setItem(
        "cart-products",
        JSON.stringify(productsAfterRemoving),
      );
    },
    incrementOrderedQuantity: (currentState, action) => {
      const productToBeIncremented = currentState.cartProducts.find(
        (product) => product.id == action.payload.id,
      );
      if (productToBeIncremented) {
        productToBeIncremented.orderedQuantity++;
      }
      localStorage.setItem(
        "cart-products",
        JSON.stringify(currentState.cartProducts),
      );
    },
    decrementOrderedQuantity: (currentState, action) => {
      const productToBeDecremented = currentState.cartProducts.find(
        (product) => product.id == action.payload.id,
      );
      if (
        productToBeDecremented &&
        productToBeDecremented.orderedQuantity > 1
      ) {
        productToBeDecremented.orderedQuantity--;
      }
      localStorage.setItem(
        "cart-products",
        JSON.stringify(currentState.cartProducts),
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementOrderedQuantity,
  decrementOrderedQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
