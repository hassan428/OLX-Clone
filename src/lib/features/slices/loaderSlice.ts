import { LoaderSlice } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: LoaderSlice = {
  loading: true,
};

const loaderSlice = createSlice({
  initialState,
  name: "loader",
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export default loaderSlice.reducer;

export const { setLoading } = loaderSlice.actions;
