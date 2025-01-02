"use client";
import { useRef } from "react";
import { useAppSelector, useAppDispatch, useAppStore } from "../lib/hooks";
import { increment } from "../lib/features/counter/counterSlice";

export default function ProductName() {
  // Initialize the store with the product information
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    store.dispatch(increment(2));
    initialized.current = true;
  }
  const name = useAppSelector((state) => state.test);
  const dispatch = useAppDispatch();

  return (
    <input
      value={name}
      onChange={(e) => dispatch(increment(+e.target.value))}
    />
  );
}
