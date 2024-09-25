import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

type IconComponent = IconType | LucideIcon;

export interface Option {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: Option[];
  placeholder: string;
  onSelect: (value: Option) => void;
  defaultSelect: Option | null;
}

export interface InputValue {
  target: {
    value: string;
    id: string;
  };
}

export interface Params {
  name: string;
  id: string;
}

export interface LayoutProps {
  children: ReactNode;
  params: Params;
}

export interface NavbarRoute {
  title: string;
  className?: string;
  Icon: IconType;
  href: string;
}

export interface RouteData {
  title: string;
  Icon: IconComponent;
  href: string;
  className?: string;
}

export interface NavigateButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  pageName: string;
  btnText: string;
  variant:
    | "secondary"
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline";
  method: "push" | "replace" | "forward" | "back" | "refresh";
}

export interface NavScreenBtnProps {
  text: string;
  href: string;
  icon: ReactNode;
  className?: string;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterLinkSection {
  title: string;
  data: FooterLink[];
}

export interface SocialMediaLinks {
  href: string;
  Icon: IconType;
}

export interface AppImage {
  href: string;
  src: string;
}

export interface SliderSrc {
  src: string;
}

export interface CategoryLink {
  href: string;
  src: string;
  title: string;
}

export interface ProductCardProps {
  price: string;
  src: string;
  title: string;
  location: string;
  time: string;
  id: string;
  className?: string;
}

export interface RenderProductCardProps {
  cardData: ProductCardProps[];
  heading: string;
  href: string;
}
