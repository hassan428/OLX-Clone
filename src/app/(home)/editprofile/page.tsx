"use client";
import { Alert } from "@/components/Alert";
import { DatePicker } from "@/components/DatePicker";
import { InputAndDropdown } from "@/components/InputAndDropdown";
import { LogJoinAlert } from "@/components/LogJoinAlert";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/Text_input";
import { Button } from "@/components/ui/button";
import { UserDetails } from "@/interfaces";
import { useRouter } from "next/navigation";
import { genderData, isError, validatePassword } from "@/utils";
import Image from "next/image";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoCameraReverseOutline, IoCloseOutline } from "react-icons/io5";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setLogJoinScreen } from "@/lib/features/slices/logJoinScreenSlice";

const EditProfilePage = () => {
  const userOldDetails = useAppSelector(({ auth }) => auth);
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const defaultAvatarUrl = "/assets/images/load_avatar.png";
  const [data, setData] = useState<UserDetails | null>(null);
  const [error, setError] = useState<UserDetails | null>(null);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  const hasChanges = (oldData: any, newData: any): boolean => {
    if (!oldData || !newData) return false;

    return Object.keys(newData).some((key) => oldData[key] !== newData[key]);
  };

  useEffect(() => {
    setDataHandle(userOldDetails);
  }, []);

  useEffect(() => {
    const changed = hasChanges(userOldDetails, data);
    const hasErr = isError({ ...error }, true) || isError({ ...data });

    // agar changes hain aur error nahi hai → enable
    setBtnDisabled(!(changed && !hasErr));
  }, [data, error, userOldDetails]);

  const setDataHandle = (newData: UserDetails) => {
    setData((pre) => {
      return { ...pre, ...newData };
    });
  };

  const setErrorHandle = (newError: UserDetails) => {
    setError((pre) => {
      return { ...pre, ...newError };
    });
  };

  const imageAvatarHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { files } = target;
    const url = files && files[0];
    if (url) {
      const reader = new FileReader();
      reader.onload = ({ target }: ProgressEvent<FileReader>) => {
        setDataHandle({ avatarUrl: target?.result?.toString() });
      };
      reader.readAsDataURL(url);
    }
  };

  const connectGoogle = () => {
    console.log("connectGoogle");
  };

  const discardHandle = () => navigate.push("/");

  const errorCheck = (value?: string): UserDetails => {
    const val = value || data?.name;
    return {
      name: !val
        ? "Name is required!"
        : !validatePassword(val).hasLetter
        ? "Name must contain at least one alphabet"
        : undefined,
    };
  };

  const saveChangesHandle = () => {
    console.log("send data to bakend");
  };

  const deleteAccount = () => {
    console.log("deleteAccount");
  };

  // console.log("data", data);

  const nameInput = (id: string, className?: string): ReactNode => (
    <div className={`flex flex-col w-full sm:gap-2 ${className}`}>
      <h1 className={`text-sm font-bold ${error?.name && "text-error"}`}>
        Name
      </h1>
      <TextInput
        error={!!error?.name}
        cut_handle={() => {
          setDataHandle({ name: "" });
          setErrorHandle({ name: "Name is required!" });
        }}
        inputProps={{
          autoComplete: "name",
          id,
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
      {error?.name && <Text error={!!error?.name} text={error.name} />}
    </div>
  );

  const phoneInput = (): ReactNode => (
    <div className="sm:flex items-center gap-2">
      <div className="w-full">
        <div className="flex">
          <div className="border border-foreground rounded-l-md text-base px-2 flex items-center">
            <h1>+92</h1>
          </div>
          <TextInput
            className="rounded-l-none"
            inputProps={{
              readOnly: true,
              id: "phoneNumber",
              value: data?.phoneNumber || "",
              placeholder: "Enter Phone Number",
            }}
          />
        </div>
      </div>
      <h1 className="hidden sm:inline w-full text-xs text-muted-foreground">
        This is the number for buyers contacts, reminders, and other
        notifications.
      </h1>
    </div>
  );

  const emailInput = (): ReactNode => (
    <div className="flex items-center gap-2">
      <div className="w-full">
        <TextInput
          inputProps={{
            readOnly: true,
            autoComplete: "email",
            id: "email_address",
            value: data?.email || "",
            placeholder: "Email",
          }}
        />
      </div>
      <h1 className="hidden sm:inline w-full text-xs text-muted-foreground">
        {
          "We won't reveal your email to anyone else not use it to send you spam"
        }
      </h1>
    </div>
  );

  return (
    <div className="m-3 sm:mx-20 flex flex-col gap-10">
      <div className="sm:p-5 flex flex-col gap-5 sm:border border-border">
        <div className="flex flex-col gap-2 sm:pb-5 sm:border-b border-muted-foreground">
          <h1 className="hidden sm:inline text-sm font-bold">Profile Photo</h1>
          <h1 className="inline sm:hidden text-lg font-bold">
            Basic Information
          </h1>
          <div className="flex justify-start gap-5 items-center">
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="hidden"
              onChange={imageAvatarHandle}
            />
            <div className="relative">
              {data?.avatarUrl && (
                <div
                  className="bg-foreground cursor-pointer absolute p-1 rounded-full right-0 top-0 text-background"
                  onClick={() => setDataHandle({ avatarUrl: undefined })}
                >
                  <IoCloseOutline />
                </div>
              )}
              <Image
                src={data?.avatarUrl || defaultAvatarUrl}
                alt="Avatar"
                width={75}
                height={75}
                priority={true}
                className="rounded-full object-cover min-w-20 h-20"
              />
              {!data?.avatarUrl && (
                <label
                  htmlFor="avatar"
                  className="bg-foreground cursor-pointer flex sm:hidden absolute p-1 rounded-full right-0 bottom-0 text-background"
                >
                  <IoCameraReverseOutline />
                </label>
              )}
            </div>
            <div className="hidden sm:flex flex-col gap-1">
              <Button className="font-bold py-2 px-5">
                <label htmlFor="avatar">Upload Photo</label>
              </Button>
              <h1 className="text-xs">JPG, JPEG, PNG </h1>
            </div>
            {nameInput("name", "sm:hidden")}
          </div>
        </div>

        <div className="sm:flex w-full gap-2 items-start sm:border-b border-muted-foreground">
          <div className="flex w-full flex-col gap-5 sm:pb-5">
            {nameInput("name", "hidden sm:flex")}

            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-sm font-bold">Date of Birth</h1>
              <div>
                <DatePicker
                  sendDate={(birthDate) => setDataHandle({ birthDate })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-sm font-bold">Gender</h1>
              <div>
                <InputAndDropdown
                  placeholder={"Select your gender"}
                  selectValue={data?.gender || ""}
                  dropdownData={genderData}
                  selectHandle={(gender) => setDataHandle({ gender })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <textarea
                id="aboutMe"
                className={`border border-foreground resize-none outline-0 bg-background p-2 leading-5 text-sm`}
                rows={5}
                placeholder="About me (Optional)"
                maxLength={200}
                value={data?.aboutMe || ""}
                onChange={(e) => setDataHandle({ aboutMe: e.target.value })}
              />
              <div className="flex items-center justify-end">
                <Text text={`${data?.aboutMe?.length || "0"} / 200`} />
              </div>
            </div>
          </div>

          <div className="w-full hidden sm:flex text-xs">
            <div className="flex flex-col gap-1 w-3/4 p-2 border border-muted-foreground">
              <div className="flex items-center gap-1">
                <HiLightBulb size={20} color="yellow" />
                <strong>Why is it important?</strong>
              </div>
              <h1 className="text-muted-foreground">
                LOX is built on trust. Help other people get to know you. Tell
                them about the things you like. Share your favorite brands,
                books, movies, shows, music, food. And you will see the results.
              </h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:pb-5 sm:border-b border-muted-foreground">
          <div className="flex flex-col gap-3">
            <h1
              className={`text-sm font-bold ${
                error?.phoneNumber && error?.email && "text-error"
              }`}
            >
              Contact
            </h1>
            <LogJoinAlert
              onClick={() => dispatch(setLogJoinScreen("verifyPhone"))}
              trigger={phoneInput()}
            />
            <LogJoinAlert
              onClick={() => dispatch(setLogJoinScreen("verifyEmail"))}
              trigger={emailInput()}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:pb-5 sm:border-b border-muted-foreground">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-bold">Optional Information</h1>
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-start w-full text-sm gap-1">
                <h1 className="font-bold">Google</h1>
                <h6 className="text-muted-foreground text-xs">
                  Connect your OLX account to your Google account for simplicity
                  and ease.
                </h6>
              </div>
              <div className="sm:w-full">
                <Button
                  className="border border-foreground sm:w-1/2"
                  variant={"outline"}
                  onClick={connectGoogle}
                >
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex w-full justify-between items-center max-sm:border-b border-muted-foreground max-sm:pb-5">
          <Alert
            trigger={
              <Button
                disabled={btnDisabled}
                className="hidden sm:flex"
                variant="outline"
              >
                Discard
              </Button>
            }
            title="Discard Changes?"
            description="Are you sure you want to discard all unsaved changes? This action cannot be undone."
            doneText="Discard"
            doneClickHandle={discardHandle}
            cancelText="Cancel"
          />
          <Alert
            trigger={
              <Button disabled={btnDisabled} className="max-sm:w-full">
                Save Changes
              </Button>
            }
            title="Save Changes?"
            description="Are you sure you want to save these changes?"
            doneText="Save"
            doneClickHandle={saveChangesHandle}
            cancelText="Cancel"
          />
        </div>
      </div>

      <div className="sm:p-5 flex flex-col gap-3 sm:border border-border">
        <h1 className="font-bold sm:border-b border-muted-foreground sm:pb-3">
          Delete this account
        </h1>
        <h1 className="sm:font-semibol max-sm:text-xs max-sm:text-muted-foreground">
          Are you sure you want to delete your account?
        </h1>

        <Alert
          trigger={
            <Button
              className="max-w-max border border-foreground"
              variant="outline"
            >
              Yes, delete my account
            </Button>
          }
          title="Are you absolutely sure?"
          description=" This action cannot be undone. This will permanently delete your
            account and remove your data from our servers."
          doneText="Delete"
          doneClickHandle={deleteAccount}
          cancelText="Cancel"
        />
      </div>
    </div>
  );
};

export default EditProfilePage;
