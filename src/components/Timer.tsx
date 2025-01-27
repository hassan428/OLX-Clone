"use client";
import { useState, useEffect } from "react";
import { TimerProps } from "@/interfaces";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { timerDecrement } from "@/lib/features/slices/timerSlice";

export const Timer = ({ onComplete }: TimerProps) => {
  const { time } = useAppSelector(({ timer }) => timer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (time <= 0) {
      onComplete?.(); // Call the provided callback function
      return;
    }

    const timer = setInterval(() => {
      dispatch(timerDecrement());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [time, onComplete]);

  // Format the time (mm:ss)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return <>{formatTime(time)}</>;
};
