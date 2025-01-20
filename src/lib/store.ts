import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/lib/features/slices/authSlice";
import timerSlice from "@/lib/features/slices/timerSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { auth: authSlice, timer: timerSlice },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
