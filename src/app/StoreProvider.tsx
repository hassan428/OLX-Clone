"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { userLoggedIn } from "@/lib/features/slices/authSlice";
import { StoreProviderProps } from "@/interfaces";

export default function StoreProvider({
  children,
  authApiResponse,
}: StoreProviderProps) {
  const storeRef = useRef<AppStore>(undefined);
  const { success, data } = authApiResponse;
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    success ? storeRef.current.dispatch(userLoggedIn(data)) : null;
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
