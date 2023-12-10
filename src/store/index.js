import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-Slice";
import counterReducer from "./counter-Slice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
