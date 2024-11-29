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
import {
  LoginSignup,
  LoginSignupAlertProps,
  LoginSignupRoute,
  LoginSignupScreenName,
  SubmitButton,
} from "@/interfaces";
import { RiArrowLeftWideLine } from "react-icons/ri";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsGoogle } from "react-icons/bs";
import { ReactNode, useEffect, useState } from "react";
import { TextInput } from "@/components/Text_input";
import { Text } from "@/components/Text";

const screenRoute: LoginSignupRoute[] = [
  {
    current: "join",
  },
  {
    current: "joinEmail",
    previous: "join",
  },
  {
    current: "joinPhone",
    previous: "join",
  },
  {
    current: "login",
  },
  {
    current: "loginEmail",
    previous: "login",
  },
  {
    current: "loginPhone",
    previous: "login",
  },
  {
    current: "forgotPassPhone",
    previous: "loginPhone",
  },
  {
    current: "forgotPassEmail",
    previous: "loginEmail",
  },
];

export const LoginSignupAlert = ({ trigger }: LoginSignupAlertProps) => {
  const [screen, setScreen] = useState<LoginSignupScreenName>("login");
  const [prevScreen, setPrevScreen] = useState<LoginSignupScreenName>("login");
  const [error, setError] = useState<LoginSignup | null>(null);
  const [data, setData] = useState<LoginSignup | null>(null);

  useEffect(() => {
    screenRoute.find(({ current, previous }) => {
      screen == current && previous && setPrevScreen(previous);
    });
  }, [screen]);

  const setDataHandle = (newData: LoginSignup) => {
    setData((pre) => {
      return { ...pre, ...newData };
    });
  };

  const setErrorHandle = (newError: LoginSignup) => {
    setError((pre) => {
      return { ...pre, ...newError };
    });
  };

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
      </div>
    );
  };

  const emailInput = (): ReactNode => {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Email address</h1>
        <div>
          <TextInput
            error={error?.email ? true : false}
            cut_handle={() => {
              setDataHandle({ email: "" });
              setErrorHandle({ email: "email is required!" });
            }}
            inputProps={{
              type: "email",
              placeholder: "Enter email address",
              autoComplete: "email",
              value: data?.email,
              id: "email",
              onChange: ({ target }) => {
                setErrorHandle({
                  [target.id]: target.value
                    ? undefined
                    : `${target.id} is required!`,
                });
                setDataHandle({ [target.id]: target.value });
              },
            }}
          />
          {error?.email && <Text error text={error.email} className="mt-1" />}
        </div>
      </div>
    );
  };

  const phoneInput = (): ReactNode => {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Phone number</h1>
        <div>
          <div className="flex">
            <div
              className={`border border-foreground rounded-l-md ${
                error?.phoneNumber && "border-error text-error"
              } text-base px-2 flex items-center`}
            >
              <h1>+92</h1>
            </div>
            <TextInput
              error={error?.phoneNumber ? true : false}
              cut_handle={() => {
                setDataHandle({ phoneNumber: "" });
                setErrorHandle({
                  phoneNumber: "Phone number is required!",
                });
              }}
              className="rounded-l-none"
              inputProps={{
                id: "phoneNumber",
                value: data?.phoneNumber || "",
                placeholder: "Enter Phone number",
                maxLength: 10,
                onChange: (e) => {
                  const { value } = e.target;
                  if (value.length == 0) {
                    setDataHandle({ phoneNumber: "" });
                    setErrorHandle({
                      phoneNumber: "Phone number is required!",
                    });
                  }

                  for (let i = 0; i < value.length; i++)
                    if (!Number.isNaN(Number(value.split("")[i]))) {
                      setErrorHandle({ phoneNumber: undefined });
                      setDataHandle({
                        phoneNumber: value.slice(0).split(" ").join(""),
                      });
                    } else setDataHandle({});
                },
              }}
            />
          </div>
          {error?.phoneNumber && (
            <Text className="mt-1" error text={error.phoneNumber} />
          )}
        </div>
      </div>
    );
  };

  const passwordInput = (): ReactNode => {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Password</h1>
        <div>
          <TextInput
            error={error?.password ? true : false}
            cut_handle={() => {
              setDataHandle({ password: "" });
              setErrorHandle({ password: "password is required!" });
            }}
            inputProps={{
              type: "password",
              placeholder: "Enter password",
              autoComplete: "new-password",
              value: data?.password,
              id: "password",
              onChange: ({ target }) => {
                setErrorHandle({
                  [target.id]: target.value
                    ? undefined
                    : `${target.id} is required!`,
                });
                setDataHandle({ [target.id]: target.value });
              },
            }}
          />
          {error?.password && (
            <Text error text={error.password} className="mt-1" />
          )}
        </div>
      </div>
    );
  };

  const loginEmailUi = (): ReactNode => {
    return (
      <>
        {emailInput()}
        <div>
          {passwordInput()}
          {forgotPasswordButtonUi("forgotPassEmail")}
        </div>
        {submitButtonUi({ text: "Log in", onClick: loginWithEmailHandle })}
      </>
    );
  };

  const loginPhoneUi = (): ReactNode => {
    return (
      <>
        {phoneInput()}
        <div>
          {passwordInput()}
          {forgotPasswordButtonUi("forgotPassPhone")}
        </div>
        {submitButtonUi({ text: "Log in", onClick: loginWithPhoneHandle })}
      </>
    );
  };

  const joinEmailUi = (): ReactNode => {
    return (
      <>
        {emailInput()}
        {submitButtonUi({ text: "Next", onClick: navigatePasswordHandle })}
      </>
    );
  };

  const joinPhoneUi = (): ReactNode => {
    return (
      <>
        {phoneInput()}
        {submitButtonUi({ text: "Next", onClick: navigatePasswordHandle })}
      </>
    );
  };

  const forgotPassEmailUi = (): ReactNode => {
    return (
      <>
        <h1 className="text-sm">
          We'll send a verification code to this email address if it matches an
          existing account
        </h1>
        {emailInput()}

        {submitButtonUi({ text: "Next", onClick: navigateOTPVerifyHandle })}
      </>
    );
  };

  const forgotPassPhoneUi = (): ReactNode => {
    return (
      <>
        <h1 className="text-sm">
          We’ll send a verification code to this phone number if it matches an
          existing account
        </h1>
        {phoneInput()}

        {submitButtonUi({ text: "Next", onClick: navigateOTPVerifyHandle })}
      </>
    );
  };

  const footer = (): ReactNode => {
    return (
      <AlertDialogFooter className="sm:justify-center">
        {screen.includes("login") ? (
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

  const forgotPasswordButtonUi = (
    screenName: LoginSignupScreenName
  ): ReactNode => {
    return (
      <Button
        variant={"link"}
        className="text-blue-500 justify-start p-0 font-bold"
        onClick={() => setScreen(screenName)}
      >
        Forgot your Password?
      </Button>
    );
  };

  const backButtonUi = (): ReactNode => {
    return (
      !(screen == "join" || screen == "login") && (
        <Button
          variant={"outline"}
          className="bg-foreground text-background absolute top-1 left-1 sm:top-4 sm:left-4 mt-2 sm:mt-0"
          onClick={() => setScreen(prevScreen)}
        >
          <RiArrowLeftWideLine size={20} />
        </Button>
      )
    );
  };

  const submitButtonUi = ({ text, onClick }: SubmitButton): ReactNode => {
    return (
      <Button className="font-bold" onClick={onClick}>
        {text}
      </Button>
    );
  };

  const loginWithEmailHandle = () => {};
  const loginWithPhoneHandle = () => {};
  const navigatePasswordHandle = () => {};
  const navigateOTPVerifyHandle = () => {};

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col px-2 sm:px-5 py-5  max-sm:min-h-screen sm:max-h-[25rem] overflow-y-auto w-full sm:w-2/5 rounded-lg">
        {/* Header */}
        <AlertDialogHeader className="sm:text-center">
          <div className="flex justify-center mb-2">
            <Logo />
          </div>
          <AlertDialogTitle className="text-xl font-bold ">
            {screen == "login"
              ? "Login into your LOX account"
              : screen == "join"
              ? "Create a new LOX account"
              : screen == "joinEmail"
              ? "Create account with Email"
              : screen == "joinPhone"
              ? "Create account with Phone"
              : screen == "loginEmail"
              ? "Log in with Email"
              : screen == "loginPhone"
              ? "Log in with Phone"
              : screen == "forgotPassEmail" || screen == "forgotPassPhone"
              ? "Forgot Password"
              : ""}
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex flex-col flex-1 sm:gap-3 gap-2 space-y-4 text-xs">
          {/* Scrollable Content */}
          {(screen === "login" || screen === "join") && loginSignupUi(screen)}
          {screen === "loginEmail" && loginEmailUi()}
          {screen === "loginPhone" && loginPhoneUi()}
          {screen === "joinEmail" && joinEmailUi()}
          {screen === "joinPhone" && joinPhoneUi()}
          {screen === "forgotPassEmail" && forgotPassEmailUi()}
          {screen === "forgotPassPhone" && forgotPassPhoneUi()}
        </div>

        {footer()}

        {backButtonUi()}
        {/* Close Button */}
        <AlertDialogCancel className="bg-foreground text-background absolute top-1 right-1 sm:top-4 sm:right-4">
          <IoCloseSharp size={20} />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
