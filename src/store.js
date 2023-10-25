// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./redux/headerSlice";
import tradesReducer from "./redux/tradesSlice";
import statusReducer from "./redux/statusSlice";

// A simple slice for now (you'll replace this later)
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    header: headerReducer,
    trades: tradesReducer,
    status: statusReducer
  }
});

export default store;
