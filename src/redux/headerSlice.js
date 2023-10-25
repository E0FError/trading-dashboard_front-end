// src/redux/headerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: { title: 'Sherperd' },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { setTitle } = headerSlice.actions;
export default headerSlice.reducer;
