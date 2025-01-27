import { NavScreenBtnProps } from "@/interfaces";
import Link from "next/link";

export const NavScreenBtn = ({
  text,
  icon,
  className,
  href,
  SheetClose,
}: NavScreenBtnProps) => {
  const Tag = SheetClose || "p";
  return (
    <Link
      href={href}
      className="flex gap-2 items-center justify-center hover:text-blue-400 cursor-pointer"
    >
      {icon}
      <Tag className={`font-bold text-sm ${className}`}>{text}</Tag>
    </Link>
  );
};
