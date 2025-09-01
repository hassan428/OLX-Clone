import { configureStore } from "@reduxjs/toolkit";
import auth from "@/lib/features/slices/authSlice";
import timer from "@/lib/features/slices/timerSlice";
import loader from "@/lib/features/slices/loaderSlice";
import logJoin from "@/lib/features/slices/logJoinScreenSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { auth, timer, logJoin, loader },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
