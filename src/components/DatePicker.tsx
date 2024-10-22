"use client";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { DatePickerProps } from "@/interfaces";

export const DatePicker = ({ sendDate }: DatePickerProps) => {
  const [dob, setdob] = useState<Date>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-full pl-3 text-left font-normal")}
        >
          <span>{dob?.toDateString() || "Pick a date"}</span>
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={dob}
          onSelect={(date) => {
            setdob(date);
            sendDate(date);
          }}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
