"use client";
import { NavScreenBtnProps, LogOutBtnProps } from "@/interfaces";
import Link from "next/link";
import { Alert } from "@/components/Alert";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { useAppDispatch } from "@/lib/hooks";
import { userLoggedOut } from "@/lib/features/slices/authSlice";
import { setLoading } from "@/lib/features/slices/loaderSlice";

const commonClass =
  "flex gap-2 items-center justify-center hover:text-blue-400 cursor-pointer";

export const NavScreenBtn = ({
  text,
  icon,
  className,
  href,
  SheetClose,
}: NavScreenBtnProps) => {
  const Tag = SheetClose || "p";
  return (
    <Link href={href} className={commonClass}>
      {icon}
      <Tag className={`font-bold text-sm ${className}`}>{text}</Tag>
    </Link>
  );
};

export const LogOutBtn = ({ className }: LogOutBtnProps) => {
  const dispatch = useAppDispatch();

  const logOutHandle = async () => {
    dispatch(setLoading(true));
    try {
      const res = await axios.post(`/api/logout`);
      console.log("res.data", res.data);

      if (res.data.success) {
        console.log("abc");
        dispatch(userLoggedOut());
      }
      dispatch(setLoading(false));
      return;
    } catch (err) {
      dispatch(setLoading(false));

      console.log("err", err);
    }
  };

  return (
    <Alert
      trigger={
        <div className={commonClass}>
          <IoLogOutOutline size={25} />
          <p className={`font-bold text-sm ${className}`}>Logout</p>
        </div>
      }
      title="Logout?"
      description="Are you sure you want to logout from your account?"
      doneText="Logout"
      doneClickHandle={logOutHandle}
      cancelText="Cancel"
    />
  );
};
