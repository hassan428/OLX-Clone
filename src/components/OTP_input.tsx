"use client";
import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Text } from "@/components//Text";
import { OTP_input_props } from "@/interfaces";

export const OTP_input = ({ onChange, value }: OTP_input_props) => {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={onChange}
        pattern={REGEXP_ONLY_DIGITS}
        containerClassName="w-max"
      >
        <InputOTPGroup className="gap-2 w-full">
          {Array(6)
            .fill("")
            .map((_, i) => (
              <InputOTPSlot
                className="h-[50px] w-[50px] border border-foreground"
                index={i}
              />
            ))}
        </InputOTPGroup>
      </InputOTP>
      <Text
        text={`${
          value ? `You entered: ${value}` : "Enter your one-time password."
        }`}
      />
    </div>
  );
};
