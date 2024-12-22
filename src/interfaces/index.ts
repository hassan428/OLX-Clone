import { InputProps } from "@/components/ui/input";
import { DialogCloseProps } from "@radix-ui/react-dialog";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes, ChangeEvent, ReactNode } from "react";
import { IconType } from "react-icons";

type IconComponent = IconType | LucideIcon;

export interface Option {
  label: string;
  value: string;
}

export interface LocationDataProps {
  province: Option;
  cities?: Option[];
}

export interface LocationSelectProps {
  options: LocationDataProps[];
  placeholder: string;
  onSelect: (value: Option) => void;
  onBlurOrClose?: () => void;
  onOpen?: () => void;
  isDefaultSelect?: boolean;
  error?: boolean;
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
  SheetClose?: React.ForwardRefExoticComponent<
    DialogCloseProps & React.RefAttributes<HTMLButtonElement>
  >;
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

export interface SubCategoryLink {
  href: string;
  src?: string;
  title: SubCategoryType;
}

export interface CategoryLink {
  href: string;
  src?: string;
  title: MainCategoryType;
  subCategories?: SubCategoryLink[];
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
  mainCategory: MainCategoryType;
  subCategory: SubCategoryType;
}

export interface DetailProductCardDataProps {
  productID: string;
}

export interface DetailProductCardProps {
  cardDetails: ProductCardProps;
}

export interface UserDetails {
  name?: string;
  email?: string;
  phoneNumber?: string;
}

export interface UserDetailsOpional {
  gender?: string;
  birthDate?: Date;
  aboutMe?: string;
  avatarUrl?: string;
}

export interface TextInputProps {
  inputProps: InputProps;
  cut_handle?: () => void;
  error?: boolean;
  className?: string;
}

export interface DropDownConfigProps {
  placeholder: string;
  defaultSelect?: string;
  selectValue?: string;
  selectHandle: (value: Option) => void;
  dropdownData?: Option[];
  error?: boolean;
  id?: string;
  cut_handle?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onOpen?: () => void;
}

export interface TextProps {
  text: string;
  className?: string;
  error?: boolean;
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

export interface LoginSignupAlertProps {
  trigger: ReactNode;
}

export interface DatePickerProps {
  sendDate: (date?: Date) => void;
}

export interface SentCategory {
  src?: string;
  main?: string;
  sub?: SubCategoryType;
}

export interface CategoryDialogProps {
  sentCategoryData: (value: SentCategory) => void;
}

export interface AdDetails {
  mainCategory?: string;
  subCategory?: SubCategoryType;
  image?: string[];
  adTitle?: string;
  description?: string;
  location?: string;
  price?: string;
  // name?: string;
  phoneNumber?: string;
  showMyPhNum?: boolean;
}

interface ConditionalOption {
  condition: string[];
  values?: Option[];
  inputType?: "number" | "Text";
  maxLength?: number;
  helpingText?: string;
  label?: string;
}

export interface NestedOptionGroup {
  title: string;
  conditionalOptions?: ConditionalOption[];
}

export type MainCategoryType =
  | "allcategories"
  | "Mobiles & Tablets"
  | "Fashion & Beauty"
  | "Vehicles"
  | "Birds & Animals"
  | "Electronics & Home Appliances"
  | "Furniture & Home Decorator"
  | undefined;

export type SubCategoryType =
  | "Tablets"
  | "Mobiles"
  | "Makeup"
  | "Footwear"
  | "Other Fashion"
  | "Bikes"
  | "Cars"
  | "Rickshaw & Chingchi"
  | "Living Room Furniture"
  | "Bedroom Furniture"
  | "Office Furniture"
  | "Home Decor"
  | "Other Furniture"
  | "Computers & Accessories"
  | "Games"
  | "Televisions & Accessories"
  | "Audio"
  | "Home Appliances"
  | "Other Electronics"
  | "Cats"
  | "Hens"
  | "Dogs"
  | "Parrots"
  | "Pigeons"
  | "Other Birds & Animals"
  | "Rabbits"
  | "Buses and Vans"
  | "Other Vehicles"
  | "Kid's Fashion"
  | "Women's Fashion"
  | "Accessories"
  | "Jewellery"
  | "Clothes"
  | "Smart Watches"
  | "Tables & Dining"
  | "Garden & Outdoor"
  | "Bathroom Accessories"
  | "Men's Fashion"
  | "Beds & Wardrobes"
  | "Sofa & Chairs";

export interface OptionGroup {
  label: string;
  values?: Option[];
  inputType?: "number" | "Text";
  helpingText?: string;
  maxLength?: number;
  nestedGroup?: NestedOptionGroup;
}

export interface CategoryOptions {
  groups: OptionGroup[];
  subCategory: SubCategoryType;
}

export interface DropDownConfigProps {
  placeholder: string;
  defaultSelect?: string;
  selectValue?: string;
  selectHandle: (value: Option) => void;
  dropdownData?: Option[];
  error?: boolean;
  id?: string;
  maxLength?: number;
  cut_handle?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type DynamicData = {
  [key: string]: any;
};

export type LoginSignupScreenName =
  | "login"
  | "join"
  | "loginEmail"
  | "joinEmail"
  | "loginPhone"
  | "joinPhone"
  | "otpEmail"
  | "otpPhone"
  | "createPass"
  | "forgotPassPhone"
  | "forgotPassEmail";

export interface LoginSignupRoute {
  current: LoginSignupScreenName;
  previous?: LoginSignupScreenName;
}

export interface LoginSignup {
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
}

export interface SubmitButton {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface OTP_input_props {
  onChange: (value: string) => void;
  value: string;
  errorText?: string;
}

export interface SellButtonProps {
  className?: string;
}

export interface BackToTopButtonProps {
  className?: string;
}

export interface PasswordRules {
  hasMinLength?: boolean;
  hasNumber?: boolean;
  hasSpecialChar?: boolean;
  hasLetter?: boolean;
}

export interface PasswordStrength {
  text: string;
  value: number;
}

export interface PasswordValidationData {
  text: string;
  condition?: boolean;
}

export interface TimerProps {
  duration: number; // Timer duration in seconds
  onComplete: () => void; // Function to call when timer completes
}