import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tradesData: [], // Sample data structure, modify as required
  showTrades: false
};

const tradesSlice = createSlice({
  name: "trades",
  initialState,
  reducers: {
    setTradesData: (state, action) => {
      state.tradesData = action.payload;
    },
    toggleShowTrades: (state) => {
      state.showTrades = !state.showTrades;
    }
  }
});

export const { setTradesData, toggleShowTrades } = tradesSlice.actions;

export const selectTradesData = (state) => state.trades.tradesData;
export const selectShowTrades = (state) => state.trades.showTrades;

export default tradesSlice.reducer;
