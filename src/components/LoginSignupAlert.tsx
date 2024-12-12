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
  PasswordValidationData,
  SubmitButton,
  PasswordRules,
  PasswordStrength,
} from "@/interfaces";
import { RiArrowLeftWideLine } from "react-icons/ri";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { GiCheckMark } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { BsGoogle } from "react-icons/bs";
import { ReactNode, useEffect, useRef, useState } from "react";
import { TextInput } from "@/components/Text_input";
import { Text } from "@/components/Text";
import { OTP_input } from "@/components/OTP_input";
import { Loader } from "@/components/Loader";
import { Progress } from "@/components/ui/progress";
import {
  checkPasswordStrength,
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils";

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
  const [otp, setOtp] = useState<string>("");
  const [passwordRules, setPassWordRules] = useState<PasswordRules | null>(
    null
  );
  const [passwordStrength, setPassWordStrength] =
    useState<PasswordStrength | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const loginOrEmail = screen.slice(screen.length - 5);

  const PasswordValidationData: PasswordValidationData[] = [
    { text: "8 characters", condition: passwordRules?.hasMinLength },
    { text: "1 number", condition: passwordRules?.hasNumber },
    {
      text: "1 special character",
      condition: passwordRules?.hasSpecialChar,
    },
    { text: "1 letter", condition: passwordRules?.hasLetter },
  ];

  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    screenRoute.find(({ current, previous }) => {
      screen == current && previous && setPrevScreen(previous);
    });
    if (screen.includes("login") || screen.includes("join")) {
      setData(null);
      setPassWordRules(null);
      setPassWordStrength(null);
    }
    setError(null);
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

  const phoneInput = (): ReactNode => {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Phone number</h1>
        <div>
          <div className="flex">
            <div
              className={`border rounded-l-md ${
                error?.phoneNumber
                  ? "border-error text-error"
                  : "border-foreground"
              } text-base px-2 flex items-center`}
            >
              <h1>+92</h1>
            </div>
            <TextInput
              error={!!error?.phoneNumber}
              ref={phoneInputRef}
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
            <Text
              className="mt-1 first-letter:capitalize"
              error
              text={error.phoneNumber}
            />
          )}
        </div>
      </div>
    );
  };

  const emailInput = (): ReactNode => {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Email address</h1>
        <div>
          <TextInput
            error={!!error?.email}
            ref={emailInputRef}
            cut_handle={() => {
              setDataHandle({ email: "" });
              setErrorHandle({ email: "email is required!" });
            }}
            inputProps={{
              type: "email",
              placeholder: "Enter email address",
              autoComplete: "email",
              value: data?.email || "",
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
          {error?.email && (
            <Text
              error
              text={error.email}
              className="mt-1 first-letter:capitalize"
            />
          )}
        </div>
      </div>
    );
  };

  const passwordInput = (isLoginForm?: boolean): ReactNode => {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Password</h1>
        <div>
          <TextInput
            error={!!error?.password}
            cut_handle={() => {
              setDataHandle({ password: "" });
              setErrorHandle({ password: "password is required!" });
            }}
            ref={passwordInputRef}
            inputProps={{
              type: "password",
              placeholder: "Enter password",
              autoComplete: isLoginForm ? "current-password" : "new-password",
              value: data?.password || "",
              id: "password",

              onFocus: () => {
                if (!data?.email || !validateEmail(data.email)) {
                  emailInputRef.current?.focus();
                  setErrorHandle({
                    email: !data?.email
                      ? "Email is required!"
                      : "Please enter a valid email address",
                  });
                }
                if (!data?.phoneNumber || data.phoneNumber.length !== 10) {
                  phoneInputRef.current?.focus();

                  setErrorHandle({
                    phoneNumber: !data?.phoneNumber
                      ? "Phone Number is required!"
                      : "Please enter a valid Phone Number",
                  });
                }
              },
              onChange: ({ target }) => {
                const { id, value } = target;

                setPassWordRules(validatePassword(value));
                setPassWordStrength(checkPasswordStrength(value));

                setErrorHandle({
                  [id]: value ? undefined : `${id} is required!`,
                });
                setDataHandle({ [id]: value });
              },
            }}
          />
          {error?.password && (
            <Text
              error
              text={error.password}
              className="mt-1 first-letter:capitalize"
            />
          )}
        </div>
      </div>
    );
  };

  const confirmPasswordInput = (): ReactNode => {
    return (
      <div className="flex flex-col gap-1">
        <h1 className="font-bold">Confirm Password</h1>
        <div>
          <TextInput
            error={!!error?.confirmPassword}
            cut_handle={() => {
              setDataHandle({ confirmPassword: "" });
              setErrorHandle({
                confirmPassword: "Confirm Password is required!",
              });
            }}
            inputProps={{
              type: "password",
              placeholder: "Enter Password Again",
              autoComplete: "new-password",
              value: data?.confirmPassword || "",
              id: "confirmPassword",
              onFocus: () => {
                if (!data?.password) {
                  passwordInputRef.current?.focus();
                  setErrorHandle({
                    password: !data?.password
                      ? "Password is required!"
                      : undefined,
                  });
                } else {
                  const missingConditions: string[] = [];
                  PasswordValidationData.filter(
                    ({ text, condition }) =>
                      !condition && missingConditions.push(text)
                  );

                  if (missingConditions.length > 0) {
                    passwordInputRef.current?.focus();

                    setErrorHandle({
                      password: `Password should be at least ${missingConditions
                        .join(", ")
                        .replace(/, ([^,]*)$/, " & $1")}.`,
                    });
                  }
                }
              },
              onChange: ({ target }) => {
                setErrorHandle({
                  [target.id]: target.value
                    ? undefined
                    : `confirm password is required!`,
                });
                setDataHandle({ [target.id]: target.value });
              },
            }}
          />
          {error?.confirmPassword && (
            <Text
              error
              text={error.confirmPassword}
              className="mt-1 first-letter:capitalize"
            />
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
          {passwordInput(true)}
          {forgotPasswordButtonUi("forgotPassEmail")}
        </div>
        {submitButtonUi({
          text: "Log in",
          onClick: loginWithEmailHandle,
          disabled: !data?.password,
        })}
      </>
    );
  };

  const loginPhoneUi = (): ReactNode => {
    return (
      <>
        {phoneInput()}
        <div>
          {passwordInput(true)}
          {forgotPasswordButtonUi("forgotPassPhone")}
        </div>
        {submitButtonUi({
          text: "Log in",
          onClick: loginWithPhoneHandle,
          disabled: !passwordRules?.hasMinLength,
        })}
      </>
    );
  };

  const otpUi = (): ReactNode => {
    return (
      <>
        <h1 className="text-center text-sm">
          You will receive a 6-digit code through a{" "}
          {screen === "otpEmail" ? (
            <>
              Email Address on <strong>{data?.email}</strong>
            </>
          ) : (
            <>
              SMS on <strong>{data?.phoneNumber}</strong>
            </>
          )}
        </h1>

        <OTP_input
          value={otp}
          onChange={(value: string) => {
            value.length == 6 && OTPVerifyHandle();
            setOtp(value);
          }}
        />
        {LinkButtonUi({
          text: `Resend Code by ${
            screen === "otpEmail" ? "Email Address" : "SMS"
          }`,
          onClick:
            screen === "otpEmail"
              ? resendCodeByEmailHandle
              : resendCodeBySMSHandle,
        })}

        {screen !== "otpEmail" && (
          <div className="flex flex-col items-center">
            <h1 className="text-sm text-center">
              If you have not recieved the code by SMS, please request
            </h1>
            {LinkButtonUi({
              text: "Resend Code by Call",
              onClick: resendCodeByCallHandle,
            })}
          </div>
        )}
      </>
    );
  };

  const joinEmailUi = (): ReactNode => {
    return (
      <>
        {emailInput()}
        {submitButtonUi({
          text: "Next",
          onClick: navigatePasswordScreenHandle,
        })}
      </>
    );
  };

  const joinPhoneUi = (): ReactNode => {
    return (
      <>
        {phoneInput()}
        {submitButtonUi({
          text: "Next",
          onClick: navigatePasswordScreenHandle,
        })}
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

        {submitButtonUi({ text: "Next", onClick: OTPEmailScreenHandle })}
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

        {submitButtonUi({ text: "Next", onClick: OTPPhoneScreenHandle })}
      </>
    );
  };

  const createPassUi = (): ReactNode => {
    return (
      <>
        <h1 className="text-sm">
          To secure your account and log in faster, choose a strong password you
          haven’t used before.
        </h1>

        <div className="flex flex-col gap-3 my-2">
          <div>
            {passwordInput()}
            {!error?.password && (
              <>
                <Text
                  className="mb-1 mt-2"
                  text={passwordStrength?.text || "Password Strength"}
                />
                <Progress
                  className="h-1.5"
                  value={passwordStrength?.value || 0}
                />
                <div className="flex flex-col gap-2 bg-input rounded-md p-2 my-2 text-sm">
                  <Text text="Password must contain at least:" />
                  <div className="space-y-2 font-bold">
                    {PasswordValidationData.map(({ text, condition }, i) => (
                      <div className="flex items-start" key={i}>
                        <span className="mr-3">•</span> {text}
                        {condition ? (
                          <GiCheckMark className="ml-2 text-success" />
                        ) : (
                          <IoCloseSharp className="ml-2 text-error" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {confirmPasswordInput()}
        </div>

        {submitButtonUi({
          text: "Create Account",
          onClick: createAccountHandle,
          disabled:
            !data?.confirmPassword || data?.password !== data?.confirmPassword,
        })}
      </>
    );
  };

  const footer = (): ReactNode => {
    const isLoginScreen: boolean = screen.includes("login");
    return (
      <AlertDialogFooter className="sm:justify-center">
        <Button
          variant={"link"}
          onClick={() => setScreen(isLoginScreen ? "join" : "login")}
          className="font-semibold hover:underline text-blue-500"
        >
          <AlertDialogDescription className="text-blue-500">
            {isLoginScreen
              ? "New to LOX? Create an account"
              : "Already have an account? Log in"}
          </AlertDialogDescription>
        </Button>
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
          className="bg-primary text-background absolute top-1 left-1 sm:top-4 sm:left-4 mt-2 sm:mt-0"
          onClick={() => setScreen(prevScreen)}
        >
          <RiArrowLeftWideLine size={20} />
        </Button>
      )
    );
  };

  const commonClick = () => {
    setErrorHandle({
      email: !data?.email
        ? "Email is required!"
        : !validateEmail(data.email)
        ? "Please enter a valid email address"
        : undefined,
      phoneNumber: !data?.phoneNumber
        ? "Phone Number is required!"
        : !validatePhone(data.phoneNumber)
        ? // : data.phoneNumber.length !== 10
          "Please enter a valid Phone Number ssssss"
        : undefined,
      password: !data?.password ? "Password is required!" : undefined,
      confirmPassword: !data?.confirmPassword
        ? "Confirm Password is required!"
        : undefined,
    });
  };

  const submitButtonUi = ({
    text,
    onClick,
    disabled,
  }: SubmitButton): ReactNode => {
    // if (!data || isError({ ...data }) || isError({ ...error }, true))
    return (
      <Button
        className="font-bold"
        disabled={disabled}
        onClick={() => {
          onClick();
          commonClick();
        }}
      >
        {text}
      </Button>
    );
  };

  const LinkButtonUi = ({ text, onClick }: SubmitButton): ReactNode => {
    return (
      <Button
        variant={"link"}
        onClick={onClick}
        className="font-semibold hover:underline text-blue-500"
      >
        <AlertDialogDescription className="text-blue-500">
          {text}
        </AlertDialogDescription>
      </Button>
    );
  };

  const loginWithEmailHandle = () => {};
  const loginWithPhoneHandle = () => {};
  const createAccountHandle = () => {};
  const navigatePasswordScreenHandle = () => {
    setScreen("createPass");
  };
  const OTPEmailScreenHandle = () => {
    setScreen("otpEmail");
  };

  const OTPPhoneScreenHandle = () => {
    setScreen("otpPhone");
  };
  const OTPVerifyHandle = () => {
    console.log("OTPVerifyHandle");
  };
  const resendCodeBySMSHandle = () => {};
  const resendCodeByCallHandle = () => {};
  const resendCodeByEmailHandle = () => {};

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col px-2 sm:px-5 py-5 max-sm:min-h-screen max-h-screen sm:max-h-[31rem] overflow-y-auto w-full sm:w-2/4 xmd:w-2/5 rounded-lg">
        {/* Header */}
        {loading && <Loader />}

        <AlertDialogHeader className="sm:text-center">
          <div className="flex justify-center mb-2">
            <Logo />
          </div>
          <AlertDialogTitle className="text-xl sm:text-2xl font-bold my-2">
            {screen == "login"
              ? "Login into your LOX account"
              : screen == "join"
              ? "Create a new LOX account"
              : screen == "joinEmail" || screen == "joinPhone"
              ? `Create account with ${loginOrEmail}`
              : screen == "loginEmail" || screen == "loginPhone"
              ? `Log in with ${loginOrEmail}`
              : screen.includes("forgotPass")
              ? "Forgot Password"
              : screen == "createPass"
              ? "Create a password"
              : screen.includes("otp")
              ? "Enter confirmation code"
              : ""}
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex flex-col flex-1 sm:gap-3 gap-3 text-sm">
          {/* Scrollable Content */}
          {(screen === "login" || screen === "join") && loginSignupUi(screen)}
          {screen === "loginEmail" && loginEmailUi()}
          {screen === "loginPhone" && loginPhoneUi()}
          {screen === "joinEmail" && joinEmailUi()}
          {screen === "joinPhone" && joinPhoneUi()}
          {screen.includes("otp") && otpUi()}
          {screen === "createPass" && createPassUi()}
          {screen === "forgotPassEmail" && forgotPassEmailUi()}
          {screen === "forgotPassPhone" && forgotPassPhoneUi()}
        </div>

        {!screen.includes("otp") && footer()}

        {backButtonUi()}
        {/* Close Button */}
        <AlertDialogCancel className="bg-primary text-background absolute top-1 right-1 sm:top-4 sm:right-4">
          <IoCloseSharp size={20} />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
