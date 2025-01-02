import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "test",
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
});
// now available:
// slice.actions.increment(2);
// also available:
// slice.caseReducers.increment(0, { type: "increment", payload: 5 });

export const { increment } = slice.actions;
export default slice.reducer;
