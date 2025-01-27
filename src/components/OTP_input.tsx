"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Text } from "@/components//Text";
import { OTP_input_props } from "@/interfaces";

export const OTP_input = ({ onChange, value, errorText }: OTP_input_props) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={onChange}
        pattern={REGEXP_ONLY_DIGITS}
        containerClassName="w-max"
      >
        <InputOTPGroup className="gap-1 sm:gap-2 w-full">
          {Array(6)
            .fill("")
            .map((_, i) => (
              <InputOTPSlot
                className="h-14 w-11 text-lg border border-foreground bg-input"
                index={i}
                key={i}
              />
            ))}
        </InputOTPGroup>
      </InputOTP>
      <Text
        error={!!errorText}
        text={`${
          errorText ||
          (value ? `You entered: ${value}` : "Enter your one-time password.")
        }`}
      />
    </div>
  );
};
