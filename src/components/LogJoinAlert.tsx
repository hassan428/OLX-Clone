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
  LogJoinData,
  LogJoinAlertProps,
  LogJoinRoute,
  LogJoinScreenName,
  PasswordValidationData,
  SubmitButton,
  PasswordRules,
  PasswordStrength,
  HasOther,
  HasErrorText,
  OptionalClassName,
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
import { Timer } from "@/components/Timer";
import { Progress } from "@/components/ui/progress";
import {
  checkPasswordStrength,
  isError,
  isNumber,
  validateEmail,
  validatePassword,
  validatePhone,
} from "@/utils";

import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setUserDetails } from "@/lib/features/slices/authSlice";
import { startTimer, resetTimer } from "@/lib/features/slices/timerSlice";
import { setLogJoinScreen } from "@/lib/features/slices/logJoinScreenSlice";
import { uploadToCloudinary } from "@/services/cloudinary/uploadImage";

export const LogJoinAlert = ({ trigger, onClick }: LogJoinAlertProps) => {
  const dispatch = useAppDispatch();
  const userDetails = useAppSelector(({ auth }) => auth);
  const { currentScreen } = useAppSelector(({ logJoin }) => logJoin);
  const { isLogged } = userDetails;

  const logJoinRoute: LogJoinRoute[] = [
    {
      currentScreen: "join",
    },
    {
      currentScreen: "joinEmail",
      previousScreen: "join",
    },
    {
      currentScreen: "joinPhone",
      previousScreen: "join",
    },
    {
      currentScreen: "login",
    },
    {
      currentScreen: "loginEmail",
      previousScreen: "login",
    },
    {
      currentScreen: "loginPhone",
      previousScreen: "login",
    },
    {
      currentScreen: "forgotPassPhone",
      previousScreen: "loginPhone",
    },
    {
      currentScreen: "forgotPassEmail",
      previousScreen: "loginEmail",
    },
    {
      currentScreen: "otpEmail",
      previousScreen: isLogged ? "verifyEmail" : undefined,
    },
    {
      currentScreen: "otpPhone",
      previousScreen: isLogged ? "verifyPhone" : undefined,
    },
  ];

  const [prevScreen, setPrevScreen] = useState<LogJoinScreenName>("login");
  const [error, setError] = useState<(LogJoinData & HasOther) | null>(null);
  const [data, setData] = useState<LogJoinData | null>(null);
  const [otp, setOtp] = useState<string>("");
  const [timeUp, setTimeUp] = useState<boolean>(false);
  const [api_res, set_api_res] = useState<any>();
  const [showPasswordValidation, setShowPasswordValidation] =
    useState<boolean>(true);
  const [passwordRules, setPasswordRules] = useState<PasswordRules | null>(
    null
  );
  const [passwordStrength, setPasswordStrength] =
    useState<PasswordStrength | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const phoneOrEmailString: string = currentScreen?.slice(
    currentScreen.length - 5
  );

  const passwordValidationData: PasswordValidationData[] = [
    { text: "8 characters", condition: passwordRules?.hasMinLength },
    { text: "1 number", condition: passwordRules?.hasNumber },
    {
      text: "1 special character",
      condition: passwordRules?.hasSpecialChar,
    },
    { text: "1 letter", condition: passwordRules?.hasLetter },
  ];

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPassInputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    logJoinRoute.find(
      ({ currentScreen: current, previousScreen }) =>
        currentScreen == current &&
        previousScreen &&
        setPrevScreen(previousScreen)
    );
    if (currentScreen?.includes("login") || currentScreen?.includes("join")) {
      ["name", "email", "phoneNumber", "password", "confirmPassword"].map(
        (key) => setDataHandle({ [key]: undefined })
      );
      setTimeUp(false);
      setPasswordRules(null);
      setPasswordStrength(null);
    }
    if (currentScreen?.includes("verify")) {
      setDataHandle(userDetails);
      setTimeUp(false);
    }
    setError(null);
    setLoading(false);
    setShowPasswordValidation(true);
    setOtp("");
  }, [currentScreen]);

  const setDataHandle = (newData: LogJoinData): void => {
    setData((pre) => {
      return { ...pre, ...newData };
    });
  };

  const setErrorHandle = (newError: LogJoinData & HasOther): void => {
    setError((pre) => {
      return { ...pre, ...newError };
    });
  };

  const checkPassword = (): string | undefined => {
    const missingConditions: string[] = [];
    !currentScreen?.includes("login") &&
      passwordValidationData.filter(
        ({ text, condition }) => !condition && missingConditions.push(text)
      );

    if (missingConditions.length > 0) {
      passwordInputRef.current?.focus();

      return `Password should be at least ${missingConditions
        .join(", ")
        .replace(/, ([^,]*)$/, " & $1")}.`;
    }
  };

  const errorCheck = (value?: string): LogJoinData & HasOther => ({
    name:
      !value && !data?.name
        ? "Name is required!"
        : !validatePassword(value || data?.name).hasLetter
        ? "Name must contain at least one alphabet"
        : undefined,
    email:
      !value && !data?.email
        ? "Email is required!"
        : !validateEmail(value || data?.email)
        ? "Please enter a valid email address"
        : undefined,
    phoneNumber:
      !value && !data?.phoneNumber
        ? "Phone Number is required!"
        : !validatePhone(value || data?.phoneNumber)
        ? "Please enter a valid phone number"
        : undefined,
    password:
      !value && !data?.password ? "Password is required!" : checkPassword(),
    confirmPassword:
      !value && !data?.confirmPassword
        ? "Confirm Password is required!"
        : data?.confirmPassword !== (value || data?.password)
        ? "Confirm Password does not match"
        : undefined,
  });

  const ErrorText = ({
    errorText,
    className,
  }: HasErrorText & OptionalClassName) =>
    errorText && (
      <Text
        className={`mt-1 first-letter:capitalize ${className}`}
        error
        text={errorText}
      />
    );

  const LogJoinUi = (): ReactNode =>
    (currentScreen == "login" || currentScreen == "join") && (
      <>
        <Button
          onClick={currentScreen == "login" ? loginWithGoogle : joinWithGoogle}
          variant="outline"
          className="w-full border-2 border-primary capitalize flex gap-2 items-center justify-center font-semibold"
        >
          <BsGoogle size={20} /> {` ${currentScreen} with Google`}
        </Button>

        <input
          type="file"
          onChange={(e) => {
            const checkImageUpload = async () => {
              try {

                const file = e.target.files?.[0];
                const url =
                file && (await uploadToCloudinary({ file, public_id: "logo" }));
                console.log("Uploaded Image URL:", url);
              }
              catch (err:any) {
                console.log("err", err);
                console.log("err.message", err.message);
              }
              };
            checkImageUpload();
          }}
        />

        <h1 className="text-center text-muted-foreground">OR</h1>

        {/* Email and Phone Login Buttons */}
        <Button
          onClick={() => dispatch(setLogJoinScreen(`${currentScreen}Email`))}
          variant="outline"
          className="w-full border-2 border-primary capitalize flex gap-2 items-center justify-center font-semibold"
        >
          <MdOutlineEmail size={20} /> {` ${currentScreen} with Email`}
        </Button>

        <Button
          onClick={() => dispatch(setLogJoinScreen(`${currentScreen}Phone`))}
          variant="outline"
          className="w-full border-2 border-primary capitalize flex gap-2 items-center justify-center font-semibold"
        >
          <MdOutlinePhone size={20} />
          {` ${currentScreen} with Phone`}
        </Button>
      </>
    );

  const PhoneInput = (): ReactNode => (
    <div className="flex flex-col gap-1">
      <h1
        onClick={() => phoneInputRef.current?.focus()}
        className="font-bold cursor-pointer"
      >
        Phone number
      </h1>
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
              placeholder: "Enter Phone Number",
              maxLength: 10,
              onBlur: () =>
                !errorCheck().name &&
                setErrorHandle({
                  phoneNumber: errorCheck().phoneNumber,
                }),
              onFocus: () => {
                if (errorCheck().name) {
                  nameInputRef.current?.focus();
                  setErrorHandle({
                    name: errorCheck().name,
                  });
                }
              },
              onChange: (e) => {
                const { value } = e.target;
                if (isNumber(value)) {
                  setErrorHandle({
                    phoneNumber: !value
                      ? "Phone Number is required!"
                      : value.length == 10
                      ? errorCheck(value).phoneNumber
                      : undefined,
                  });
                  setDataHandle({
                    phoneNumber: value,
                  });
                }
              },
            }}
          />
        </div>
        <ErrorText errorText={error?.phoneNumber} />
      </div>
    </div>
  );

  const NameInput = () => (
    <div className="flex flex-col gap-1">
      <h1
        onClick={() => nameInputRef.current?.focus()}
        className="font-bold cursor-pointer"
      >
        Name
      </h1>
      <div>
        <TextInput
          error={!!error?.name}
          cut_handle={() => {
            setDataHandle({ name: "" });
            setErrorHandle({ name: "Name is required!" });
          }}
          ref={nameInputRef}
          inputProps={{
            autoComplete: "name",
            id: "name",
            value: data?.name || "",
            placeholder: "Enter Name",
            maxLength: 20,
            onBlur: () =>
              setErrorHandle({
                name: errorCheck().name,
              }),
            onChange: (e) => {
              const { value } = e.target;
              setDataHandle({ name: value });
              setErrorHandle({
                name: !value
                  ? "Name is required!"
                  : value.length >= 2
                  ? errorCheck(value).name
                  : undefined,
              });
            },
          }}
        />
        <ErrorText errorText={error?.name} />
      </div>
    </div>
  );

  const EmailInput = (): ReactNode => (
    <div className="flex flex-col gap-1">
      <h1
        onClick={() => emailInputRef.current?.focus()}
        className="font-bold cursor-pointer"
      >
        Email address
      </h1>
      <div>
        <TextInput
          error={!!error?.email}
          ref={emailInputRef}
          cut_handle={() => {
            setDataHandle({ email: "" });
            setErrorHandle({ email: "email is required!" });
          }}
          inputProps={{
            autoComplete: "email",
            id: "email_address",
            value: data?.email || "",
            placeholder: "Enter Email",
            onBlur: () =>
              !errorCheck().name &&
              setErrorHandle({
                email: errorCheck().email,
              }),
            onFocus: () => {
              if (errorCheck().name) {
                nameInputRef.current?.focus();
                setErrorHandle({
                  name: errorCheck().name,
                });
              }
            },
            onChange: (e) => {
              const { value } = e.target;
              setDataHandle({
                email: value.split(" ").join(""),
              });
              setErrorHandle({
                email: !value
                  ? "Email is required!"
                  : value.length >= 25
                  ? errorCheck(value).email
                  : undefined,
              });
            },
          }}
        />
        <ErrorText errorText={error?.email} />
      </div>
    </div>
  );

  const PasswordInput = (isLoginForm?: boolean): ReactNode => (
    <div className="flex flex-col gap-1">
      <h1
        onClick={() => passwordInputRef.current?.focus()}
        className="font-bold cursor-pointer"
      >
        Password
      </h1>
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
            onBlur: () => {
              setShowPasswordValidation(false);
              (validateEmail(data?.email) ||
                validatePhone(data?.phoneNumber)) &&
                setErrorHandle({
                  password: errorCheck().password,
                });
            },
            onFocus: () => {
              setShowPasswordValidation(true);
              if (!validateEmail(data?.email)) {
                emailInputRef.current?.focus();
                setErrorHandle({
                  email: errorCheck().email,
                });
              }
              if (!validatePhone(data?.phoneNumber)) {
                phoneInputRef.current?.focus();
                setErrorHandle({
                  phoneNumber: errorCheck().phoneNumber,
                });
              }
            },
            onChange: ({ target }) => {
              const { value } = target;
              setPasswordRules(validatePassword(value));
              setPasswordStrength(checkPasswordStrength(value));
              setErrorHandle({
                password: !value ? "Password is required!" : undefined,
              });
              setDataHandle({ password: value });
            },
          }}
        />
        <ErrorText errorText={error?.password} />
      </div>
    </div>
  );

  const ConfirmPasswordInput = (): ReactNode => (
    <div className="flex flex-col gap-1">
      <h1
        onClick={() => confirmPassInputRef.current?.focus()}
        className="font-bold cursor-pointer"
      >
        Confirm Password
      </h1>
      <div>
        <TextInput
          error={!!error?.confirmPassword}
          cut_handle={() => {
            setDataHandle({ confirmPassword: "" });
            setErrorHandle({
              confirmPassword: "Confirm Password is required!",
            });
          }}
          ref={confirmPassInputRef}
          inputProps={{
            type: "password",
            placeholder: "Enter Password Again",
            autoComplete: "new-password",
            value: data?.confirmPassword || "",
            id: "confirmPassword",
            onBlur: () =>
              !checkPassword() &&
              setErrorHandle({
                confirmPassword: errorCheck().confirmPassword,
              }),
            onFocus: () => {
              setShowPasswordValidation(false);
              if (!data?.password) {
                passwordInputRef.current?.focus();
                setErrorHandle({
                  password: errorCheck().password,
                });
              } else {
                checkPassword();
              }
            },
            onChange: ({ target }) => {
              const { value } = target;
              setErrorHandle({
                confirmPassword: !value
                  ? "Confirm Password is required!"
                  : undefined,
              });
              setDataHandle({ confirmPassword: value });
            },
          }}
        />
        <ErrorText errorText={error?.confirmPassword} />
      </div>
    </div>
  );

  const LoginEmailUi = (): ReactNode => (
    <>
      <div>
        <h1 className="text-sm mb-2">
          Enter your email address and password to log in and access your
          account.
        </h1>
        {EmailInput()}
      </div>
      <div>
        {PasswordInput(true)}
        <ForgotPasswordButtonUi currentScreen="forgotPassEmail" />
        <ErrorText errorText={error?.other} className="text-center" />
      </div>
      <SubmitButtonUi
        text="Log in"
        onClick={loginWithEmailHandle}
        disabled={!passwordRules?.hasMinLength}
      />
    </>
  );

  const LoginPhoneUi = (): ReactNode => (
    <>
      <div>
        <h1 className="text-sm mb-2">
          Enter your phone number and password to log in and access your
          account.
        </h1>
        {PhoneInput()}
      </div>
      <div>
        {PasswordInput(true)}
        <ForgotPasswordButtonUi currentScreen="forgotPassPhone" />
        <ErrorText errorText={error?.other} className="text-center" />
      </div>
      <SubmitButtonUi
        text="Log in"
        onClick={loginWithPhoneHandle}
        disabled={!passwordRules?.hasMinLength}
      />
    </>
  );

  const OtpUi = (): ReactNode => {
    return (
      <>
        <h1 className="text-center text-sm">
          You will receive a 6-digit code through a{" "}
          {currentScreen === "otpEmail" ? (
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
            value.length == 6 && otpVerifyHandle(value);
            setOtp(value);
          }}
        />

        {!timeUp && (
          <div className="text-center font-bold">
            <h1>Hurry up! OTP will expire in </h1>
            <Timer onComplete={() => setTimeUp(true)} />.
          </div>
        )}

        {LinkButtonUi({
          text: `Resend Code ${currentScreen === "otpPhone" ? "by SMS" : ""}`,
          onClick:
            currentScreen === "otpPhone"
              ? resendCodeBySMSHandle
              : resendCodeByEmailHandle,
          disabled: !timeUp,
        })}

        {currentScreen !== "otpEmail" && (
          <div className="flex flex-col items-center">
            <h1 className="text-sm text-center">
              If you have not recieved the code by SMS, please request
            </h1>
            {LinkButtonUi({
              text: "Resend Code by Call",
              onClick: resendCodeByCallHandle,
              disabled: !timeUp,
            })}
          </div>
        )}
      </>
    );
  };

  const JoinEmailUi = (): ReactNode => (
    <>
      <h1 className="text-sm">
        Enter your email address to create a new account and start your journey
        with us.
      </h1>
      <div className="flex flex-col gap-3 mb-2">
        {NameInput()}
        {EmailInput()}
        <ErrorText errorText={error?.other} className="text-center" />
      </div>
      <SubmitButtonUi
        text="Next"
        onClick={navigatePasswordScreenHandle}
        disabled={
          isError({ name: data?.name, email: data?.email }) ||
          isError({ name: error?.name, email: error?.email }, true)
        }
      />
    </>
  );

  const JoinPhoneUi = (): ReactNode => (
    <>
      <h1 className="text-sm">
        Enter your phone number to create a new account and start your journey
        with us.
      </h1>
      <div className="flex flex-col gap-3 mb-2">
        {NameInput()}
        {PhoneInput()}
        <ErrorText errorText={error?.other} className="text-center" />
      </div>
      <SubmitButtonUi
        text="Next"
        onClick={navigatePasswordScreenHandle}
        disabled={
          isError({ name: data?.name, phoneNumber: data?.phoneNumber }) ||
          isError({ name: error?.name, phoneNumber: error?.phoneNumber }, true)
        }
      />
    </>
  );

  const ForgotPassEmailUi = (): ReactNode => (
    <>
      <h1 className="text-sm">
        We'll send a verification code to this email address if it matches an
        existing account
      </h1>
      {EmailInput()}
      <ErrorText errorText={error?.other} className="text-center" />
      <SubmitButtonUi
        text="Next"
        onClick={() => dispatch(setLogJoinScreen("otpEmail"))}
        disabled={
          isError({ email: data?.email }) ||
          isError({ email: error?.email }, true) ||
          userDetails.email == data?.email
        }
      />
    </>
  );

  const ForgotPassPhoneUi = (): ReactNode => (
    <>
      <h1 className="text-sm">
        We’ll send a verification code to this phone number if it matches an
        existing account
      </h1>
      {PhoneInput()}
      <ErrorText errorText={error?.other} className="text-center" />
      <SubmitButtonUi
        text="Next"
        onClick={() => dispatch(setLogJoinScreen("otpPhone"))}
        disabled={
          isError({ phoneNumber: data?.phoneNumber }) ||
          isError({ phoneNumber: error?.phoneNumber }, true) ||
          userDetails.phoneNumber == data?.phoneNumber
        }
      />
    </>
  );

  const CreatePassUi = (): ReactNode => (
    <>
      <h1 className="text-sm m-0 p-0">
        To secure your account and log in faster, choose a strong password you
        haven’t used before.
      </h1>

      <div className="flex flex-col gap-3 my-2">
        <div>
          {PasswordInput()}
          {!error?.password && showPasswordValidation && (
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
                  {passwordValidationData.map(({ text, condition }, i) => (
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
        {ConfirmPasswordInput()}
        <ErrorText errorText={error?.other} className="text-center" />
      </div>
      <SubmitButtonUi
        text="Create Account"
        onClick={createAccountHandle}
        disabled={
          !data?.confirmPassword || data?.password !== data?.confirmPassword
        }
      />
    </>
  );

  const Footer = (): ReactNode => {
    const isLoginScreen: boolean = currentScreen?.includes("login");
    return (
      <AlertDialogFooter className="sm:justify-center">
        <Button
          variant={"link"}
          onClick={() =>
            dispatch(setLogJoinScreen(isLoginScreen ? "join" : "login"))
          }
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

  const ForgotPasswordButtonUi = ({
    currentScreen,
  }: LogJoinRoute): ReactNode => (
    <Button
      variant={"link"}
      className="text-blue-500 justify-start p-0 font-bold"
      onClick={() => dispatch(setLogJoinScreen(currentScreen))}
    >
      Forgot your Password?
    </Button>
  );

  const BackButtonUi = (): ReactNode =>
    !(
      currentScreen == "join" ||
      currentScreen == "login" ||
      currentScreen?.includes("verify")
    ) && (
      <Button
        variant={"outline"}
        className="bg-primary text-background absolute top-1 left-1 sm:top-4 sm:left-4 mt-2 sm:mt-0"
        onClick={() => dispatch(setLogJoinScreen(prevScreen))}
      >
        <RiArrowLeftWideLine size={20} />
      </Button>
    );

  const SubmitButtonUi = ({
    text,
    onClick,
    disabled,
  }: SubmitButton): ReactNode => (
    <Button className="font-bold" disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );

  const LinkButtonUi = ({
    text,
    onClick,
    disabled,
  }: SubmitButton): ReactNode => (
    <Button
      variant={"link"}
      onClick={onClick}
      disabled={disabled}
      className="font-semibold hover:underline text-blue-500"
    >
      <AlertDialogDescription className="text-blue-500">
        {text}
      </AlertDialogDescription>
    </Button>
  );

  const loginWithEmailHandle = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/login`, data);
      if (res.data) {
        const { data, success, message } = res.data;
        console.log("data", data);
      }
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };

  const loginWithPhoneHandle = async () => {};

  const createAccountHandle = async () => {
    setLoading(true);
    try {
      delete data?.confirmPassword;
      const res = await axios.post(`/api/join`, {
        ...data,
        ...api_res,
      });
      console.log("res.data", res.data);
      if (res.data) {
        const { data, success, message } = res.data;
        if (success) {
          set_api_res(undefined);
          setLoading(false);
          dispatch(setLogJoinScreen(data?.email ? "otpEmail" : "otpPhone"));
          dispatch(startTimer(150));
        } else {
          const key = ["name", "email", "phone number"].find((k) =>
            message.toLowerCase().includes(k)
          );
          setErrorHandle({ [key || "other"]: message });
        }
      }
      return;
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };

  const navigatePasswordScreenHandle = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/join`, data);
      console.log("res.data", res.data);
      if (res.data) {
        const { data, success, message } = res.data;
        if (success) {
          set_api_res(data);
          dispatch(setLogJoinScreen("createPass"));
        } else {
          const key = ["name", "email", "phone number"].find((k) =>
            message.toLowerCase().includes(k)
          );
          setErrorHandle({ [key || "other"]: message });
        }
      }
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };

  const loginWithGoogle = async () => {
    console.log("loginWithGoogle");
  };

  const joinWithGoogle = async () => {
    console.log("joinWithGoogle");
  };

  const otpVerifyHandle = async (otp: string) => {
    setLoading(true);
    try {
      const res = await axios.post(`/api/otpVerify`, {
        otp,
        data,
      });
      console.log("res.data", res.data);

      if (res.data.success) {
        dispatch(setUserDetails({ ...res.data.data, isLogged: true }));
        dispatch(resetTimer());
        closeButtonRef.current?.click();
      }
      setLoading(false);
      return;
    } catch (err) {
      setLoading(false);
      console.log("err", err);
    }
  };

  const resendCodeBySMSHandle = async () => {
    setTimeUp(false);
    dispatch(startTimer(150));
  };

  const resendCodeByCallHandle = async () => {
    setTimeUp(false);
    dispatch(startTimer(150));
  };

  const resendCodeByEmailHandle = async () => {
    setTimeUp(false);
    dispatch(startTimer(150));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={onClick} asChild>
        {trigger}
      </AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col px-2 sm:px-5 py-5 max-sm:min-h-screen max-h-screen sm:max-h-[31rem] overflow-y-auto w-full sm:w-2/4 xmd:w-2/5 rounded-lg">
        {loading && <Loader />}

        <AlertDialogHeader className="sm:text-center">
          <div className="flex justify-center mb-2">
            <Logo />
          </div>
          <AlertDialogTitle className="text-xl sm:text-2xl font-bold">
            {currentScreen == "login"
              ? "Login into your LOX account"
              : currentScreen == "join"
              ? "Create a new LOX account"
              : currentScreen == "joinEmail" || currentScreen == "joinPhone"
              ? `Create account with ${phoneOrEmailString}`
              : currentScreen?.includes("verify")
              ? `Verify ${phoneOrEmailString}`
              : currentScreen == "loginEmail" || currentScreen == "loginPhone"
              ? `Log in with ${phoneOrEmailString}`
              : currentScreen?.includes("forgotPass")
              ? "Forgot Password"
              : currentScreen == "createPass"
              ? "Create a password"
              : currentScreen?.includes("otp")
              ? "Enter confirmation code"
              : ""}
          </AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex flex-col flex-1 gap-3 text-sm">
          {/* Scrollable Content */}
          <LogJoinUi />
          {currentScreen === "loginEmail" && LoginEmailUi()}
          {currentScreen === "loginPhone" && LoginPhoneUi()}
          {currentScreen === "joinEmail" && JoinEmailUi()}
          {currentScreen === "joinPhone" && JoinPhoneUi()}
          {currentScreen?.includes("otp") && OtpUi()}
          {currentScreen === "createPass" && CreatePassUi()}
          {(currentScreen === "verifyEmail" ||
            currentScreen === "forgotPassEmail") &&
            ForgotPassEmailUi()}
          {(currentScreen === "verifyPhone" ||
            currentScreen === "forgotPassPhone") &&
            ForgotPassPhoneUi()}
        </div>

        {!currentScreen?.includes("otp") && <Footer />}

        <BackButtonUi />
        {/* Close Button */}
        <AlertDialogCancel
          ref={closeButtonRef}
          className="bg-primary text-background absolute top-1 right-1 sm:top-4 sm:right-4"
        >
          <IoCloseSharp size={20} />
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
