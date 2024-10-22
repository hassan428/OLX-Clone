import { InputProps } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconType } from "react-icons";

type IconComponent = IconType | LucideIcon;

export interface Option {
  label: string;
  value: string;
}

export interface LocationSelectProps {
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
  categoryName?: string;
  profileID?: string;
}

export interface LayoutProps {
  children: ReactNode;
  params: Params;
}

export interface PageProps {
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

export interface ProductOtherDetails {
  type?: string;
  condition: string;
}

export interface ProductCardProps {
  price: string;
  src: string[];
  title: string;
  description: string;
  location: string;
  time: string;
  id: string;
  productOtherDetails: ProductOtherDetails;
  className?: string;
}

export interface RenderProductCardProps {
  cardData: ProductCardProps[];
  heading: string;
  href: string;
}

export interface ViewStyle {
  Tag: IconType;
  size: number;
  onClick: () => void;
  className?: string;
  tooltipText: string;
}

export interface PriceRangeInterface {
  lowest?: string;
  highest?: string;
}

export interface CardDetailsImage {
  src: string[];
}

export interface MoreProductCardDataProps {
  categoryName: string;
}

export interface DetailProductCardDataProps {
  productID: string;
}

export interface DetailProductCardProps {
  cardDetails: ProductCardProps;
}

export interface User {
  name?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  birthDate?: Date;
  aboutMe?: string;
  avatarUrl?: string;
}

export interface TextInputProps {
  inputProps: InputProps;
  cut_handle?: () => void;
  error?: boolean;
}

export interface DropDownConfigProps {
  placeholder: string;
  defaultSelect?: string;
  selectValue?: string;
  selectHandle: (value: Option) => void;
  dropdownData: Option[];
  error?: boolean;
}

export interface BrthDate {
  dd?: Option;
  mm?: Option;
  yy?: Option;
}

export interface ErrorTextProps {
  errorText: string;
  className?: string;
}

export interface ImageItem {
  id: number;
  file: File | null;
  preview: string | null;
}

export interface ImageComponentProps {
  image: ImageItem;
  index: number;
  moveImage: (dragIndex: number, hoverIndex: number) => void;
  isFirst: boolean;

  onClick: () => void;
}

export interface ImageUploaderProps {
  onSortedImages: (sortedImages: ImageItem[]) => void;
}

export interface AlertProps {
  trigger: ReactNode;
  title: string;
  description: string;
  doneText: string;
  doneClickHandle: () => void;
  cancelText?: string;
  canceClickHandle?: () => void;
}

export interface DatePickerProps {
  sendDate: (date?: Date) => void;
}
