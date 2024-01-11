import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [...getDefaultMiddleware(), thunk];

export const myStore = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware,
});
