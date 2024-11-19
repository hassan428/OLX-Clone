"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LoginSignupAlertProps, LoginSignupScreen } from "@/interfaces";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsGoogle } from "react-icons/bs";
import { ReactNode, useState } from "react";
import { TextInput } from "@/components/Text_input";

export const LoginSignupAlert = ({ trigger }: LoginSignupAlertProps) => {
  const [screen, setScreen] = useState<LoginSignupScreen>("login");

  const loginWithGoogle = async () => {
    console.log("loginWithGoogle");
  };

  const joinWithGoogle = async () => {
    console.log("joinWithGoogle");
  };

  const loginSignupUi = (logOrjoin: "login" | "join"): ReactNode => {
    return (
      <div className="flex-1 overflow-y-auto space-y-4">
        {/* Social Login Buttons */}
        <Button
          onClick={logOrjoin == "login" ? loginWithGoogle : joinWithGoogle}
          variant="outline"
          className="w-full border-2 border-primary capitalize flex gap-2 items-center justify-center font-semibold"
        >
          <BsGoogle size={20} /> {` ${logOrjoin} with Google`}
        </Button>

        <h1 className="text-center text-muted-foreground">OR</h1>

        {/* Email and Phone Login Buttons */}
        <Button
          onClick={() => setScreen(`${logOrjoin}Email`)}
          variant="outline"
          className="w-full border-2 border-primary capitalize flex gap-2 items-center justify-center font-semibold"
        >
          <MdOutlineEmail size={20} /> {` ${logOrjoin} with Email`}
        </Button>

        <Button
          onClick={() => setScreen(`${logOrjoin}Phone`)}
          variant="outline"
          className="w-full border-2 border-primary capitalize flex gap-2 items-center justify-center font-semibold"
        >
          <MdOutlinePhone size={20} />
          {` ${logOrjoin} with Phone`}
        </Button>

        {footer()}
      </div>
    );
  };

  const loginEmailUi = (): ReactNode => {
    return (
      <div className="flex-1 overflow-y-auto space-y-4">
        <div>
          <h1>Email address</h1>
          <TextInput
            inputProps={{
              type: "email",
              placeholder: "Enter email address",
              autoComplete: "email",
            }}
          />
        </div>
      </div>
    );
  };

  const footer = (): ReactNode => {
    return (
      <AlertDialogFooter className="sm:justify-center">
        {screen == "login" ? (
          <Button
            variant={"link"}
            onClick={() => setScreen("join")}
            className="font-semibold hover:underline"
          >
            New to LOX? Create an account
          </Button>
        ) : (
          <Button
            variant={"link"}
            onClick={() => setScreen("login")}
            className="font-semibold hover:underline"
          >
            Already have an account? Log in
          </Button>
        )}
      </AlertDialogFooter>
    );
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col p-5 max-sm:min-h-screen sm:max-h-[25rem] overflow-hidden w-full sm:w-2/4 rounded-lg">
        {/* Header */}
        <AlertDialogHeader className="sm:text-center mb-2">
          <div className="flex justify-center">
            <Logo />
          </div>
          <AlertDialogTitle className="text-lg font-bold ">
            {screen == "login"
              ? "Login into your LOX account"
              : screen == "join"
              ? "Create a new LOX account"
              : screen == "loginEmail"
              ? "Log in with Email"
              : ""}
          </AlertDialogTitle>
        </AlertDialogHeader>

        {/* Scrollable Content */}
        {(screen === "login" || screen === "join") && loginSignupUi(screen)}
        {screen === "loginEmail" && loginEmailUi()}

        {/* Close Button */}
        <AlertDialogCancel className="absolute top-1 right-1 sm:top-4 sm:right-4">
          <IoCloseSharp size={20} />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
