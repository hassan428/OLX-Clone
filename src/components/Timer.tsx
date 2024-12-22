import React, { useState, useEffect } from "react";
import { TimerProps } from "@/interfaces";

export const Timer = ({ duration, onComplete }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete(); // Call the provided callback function
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [timeLeft, onComplete]);

  // Format the time (mm:ss)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return <>{formatTime(timeLeft)}</>;
};
