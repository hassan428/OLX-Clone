import { UserDetails } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserDetails = {
  isLogged: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    userLoggedIn: (state, { payload }) => {
      return { ...state, ...payload, isLogged: true };
    },
    userLoggedOut: () => {
      return { isLogged: false };
    },
  },
});

export default authSlice.reducer;

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
