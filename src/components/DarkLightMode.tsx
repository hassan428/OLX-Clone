"use client";

import * as React from "react";
import { Moon, Sun, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DarkLightModeBtn() {
  const { setTheme, theme } = useTheme();

  const title_theme: [string, string, string] = ["light", "dark", "system"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {title_theme.map((themesName: string, i) => (
          <DropdownMenuItem
            className="cursor-pointer justify-between"
            key={i}
            onClick={() => setTheme(themesName)}
          >
            {themesName[0].toUpperCase() + themesName.slice(1)}
            {theme == themesName && (
             <CheckCircle className="mr-2 text-green-500" />
            )} 
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DarkLightModeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Switch
      defaultChecked={resolvedTheme == "dark"}
      id="dark"
      className="data-[state=unchecked]:bg-gray-400 data-[state=checked]:bg-green-400"
      onCheckedChange={(val: boolean) =>
        val ? setTheme("dark") : setTheme("light")
      }
    />
  );
}
