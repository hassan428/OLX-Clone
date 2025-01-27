import { UserDetails } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserDetails = {
  isLogged: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setUserDetails: (state, { payload }) => {
      console.log("payload", payload);
      return { ...payload };
    },
  },
});

export default authSlice.reducer;

export const { setUserDetails } = authSlice.actions;
