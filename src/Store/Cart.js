import { createSlice } from "@reduxjs/toolkit";





const cartInitialState = {
  cartExpenses: [],
  totalPrice: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      state.totalPrice = state.totalPrice + Number(action.payload.product.price);
      const existingProductIndex = state.cartExpenses.findIndex(
        (item) => item.id === action.payload.product.id
      );
      const existingProduct = state.cartExpenses[existingProductIndex];

      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          quantity: Number(existingProduct.quantity) + 1,
        };
        state.cartExpenses[existingProductIndex] = updatedProduct;
      } else {
        state.cartExpenses = state.cartExpenses.concat(action.payload.product);
      }
    },
    removeProduct(state, action) {
      const productIndex = state.cartExpenses.findIndex(
        (item) => item.id === action.id
      );
      const product = state.cartExpenses[productIndex];
      state.totalPrice = Number(
        state.totalPrice - Number(product.price * product.quantity)
      );

      state.cartExpenses = state.cartExpenses.filter(
        (item) => item.id !== action.id
      );
    },
  },
});
export const cartAction = CartSlice.actions;
export default cartInitialState.reducer;
