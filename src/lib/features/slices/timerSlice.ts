import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
};

const timerSlice = createSlice({
  initialState,
  name: "timer",
  reducers: {
    startTimer: (state, { payload }) => {
      state.time = payload;
    },

    timerDecrement: (state) => {
      if (state.time > 0) state.time -= 1;
    },

    resetTimer: (state) => {
      state.time = 0;
    },
  },
});

export default timerSlice.reducer;

export const { startTimer, timerDecrement, resetTimer } = timerSlice.actions;
