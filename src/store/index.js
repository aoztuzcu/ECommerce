import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productsReducer from "./productsSlice";
import cartReducer, { storageKey } from "./cartSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();

  if (
    action.type === "cart/addItem" ||
    action.type === "cart/removeItem" ||
    action.type === "cart/clearItem" ||
    action.type === "cart/clearCart"
  ) {
    localStorage.setItem(storageKey, JSON.stringify(state.cart));
  }
  return result;
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware);
  },
});
export default store;
