import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiStatus: "off", // 'on' or 'off'
  autoTradingStatus: "off" // 'on' or 'off'
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setApiStatus: (state, action) => {
      state.apiStatus = action.payload;
    },
    setAutoTradingStatus: (state, action) => {
      state.autoTradingStatus = action.payload;
    }
  }
});

export const { setApiStatus, setAutoTradingStatus } = statusSlice.actions;
export const selectApiStatus = (state) => state.status.apiStatus;
export const selectAutoTradingStatus = (state) =>
  state.status.autoTradingStatus;

export default statusSlice.reducer;
