import { LogJoinRoute } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: LogJoinRoute = {
  currentScreen: "login",
};

const logJoinSlice = createSlice({
  initialState,
  name: "logJoin",
  reducers: {
    setLogJoinScreen: (state, { payload }) => (state.currentScreen = payload),
  },
});
export default logJoinSlice.reducer;

export const { setLogJoinScreen } = logJoinSlice.actions;
