"use client";
import { OptionalClassName } from "@/interfaces";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { setLogJoinScreen } from "@/lib/features/slices/logJoinScreenSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { LogJoinAlert } from "@/components/LogJoinAlert";

export const Sell_btn = ({ className }: OptionalClassName) => {
  const { isLogged } = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();

  const sameClass = `bg-background border-4 border-t-purple-800 border-b-blue-800 border-l-yellow-200 border-r-green-800 px-2 py-1 rounded-full text-center font-extrabold min-w-20 
${className}`;

  return isLogged ? (
    <Button variant="link" className={sameClass}>
      <Link href={"/post"}>
        <h1>SELL</h1>
      </Link>
    </Button>
  ) : (
    <LogJoinAlert
      onClick={() => dispatch(setLogJoinScreen("login"))}
      trigger={
        <Button variant="link" className={sameClass}>
          <h1>SELL</h1>
        </Button>
      }
    />
  );
};
