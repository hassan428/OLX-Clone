import { LogJoinRoute } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: LogJoinRoute = {
  currentScreen: "login",
};

const logJoinSlice = createSlice({
  name: "logJoin",
  initialState,
  reducers: {
    setLogJoinScreen: (
      state,
      { payload }: PayloadAction<LogJoinRoute["currentScreen"]>
    ) => {
      state.currentScreen = payload;
    },
  },
});

export default logJoinSlice.reducer;
export const { setLogJoinScreen } = logJoinSlice.actions;
