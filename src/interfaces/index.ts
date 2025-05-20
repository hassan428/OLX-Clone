import { InputProps } from "@/components/ui/input";
import { DialogCloseProps } from "@radix-ui/react-dialog";
import { LucideIcon } from "lucide-react";
import { ChangeEvent, ReactNode } from "react";
import { IconType } from "react-icons";

type IconComponent = IconType | LucideIcon;

export interface OptionalClassName {
  className?: string;
}

export interface ChildrenType {
  children: ReactNode;
}

export interface PageProps {
  params: Params;
}

export interface LocationDataProps {
  province:
    | "Over All, Pakistan"
    | "Sindh"
    | "Punjab"
    | "Balochistan"
    | "Khyber Pakhtunkhwa";
  cities?: string[];
}

export interface LocationSelectProps {
  options: LocationDataProps[];
  placeholder: string;
  onSelect: (value: string) => void;
  onBlurOrClose?: () => void;
  onOpen?: () => void;
  isDefaultSelect?: boolean;
  error?: boolean;
}

export interface Params {
  categoryName?: MainCtgType;
  profileID?: string;
  id?: string;
}

export interface LayoutProps extends PageProps, ChildrenType {}

export interface RouteDataProps extends OptionalClassName {
  title: string;
  Icon: IconComponent;
  href: string;
}

export interface NavScreenBtnProps extends OptionalClassName {
  text: string;
  href: string;
  icon: ReactNode;
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
  Icon: IconComponent;
}

export interface CustomImageProps {
  href: string;
  src: string;
}

export interface CategoryImage {
  href: string;
  src?: string;
}

export interface SubCategoryLink extends CategoryImage {
  title: SubCtgType;
}

export interface CategoryLink extends CategoryImage {
  title: MainCtgType;
  subCategories?: SubCategoryLink[];
}

export interface ProductOtherDetails {
  type?: string;
  condition: string;
}

export interface ProductCardProps extends OptionalClassName {
  price: string;
  src: string[];
  title: string;
  description: string;
  location: string;
  time: string;
  id: string;
  productOtherDetails: ProductOtherDetails;
}

export interface MainCtgProductCardProps {
  cardData: ProductCardProps[];
  heading: MainCtgType;
  href: string;
  subCtgCard?: SubCtgProductCardProps[];
}

export interface SubCtgProductCardProps {
  cardData: ProductCardProps[];
  heading: SubCtgType;
  href: string;
}

export interface SkeletonLineProps extends OptionalClassName {
  count: number;
}

export interface ViewStyle extends OptionalClassName {
  Tag: IconComponent;
  size: number;
  onClick: () => void;
  tooltipText: string;
}

export interface PriceRangeProps {
  lowest?: string;
  highest?: string;
}

export interface CardDetailsImage {
  src: string[];
}

export interface MoreProductCardDataProps {
  mainCtg: MainCtgType | string;
  subCtg: SubCtgType | string;
}

export interface DetailProductCardDataProps {
  productID?: string;
}

export interface DetailProductCardProps {
  cardDetails: ProductCardProps;
}

export interface StoreProviderProps extends ChildrenType {
  authApiResponse: UserDetails;
}

export interface UserDetails {
  name?: string;
  email?: string;
  phoneNumber?: string;
  isLogged?: boolean;
  gender?: string;
  birthDate?: Date;
  aboutMe?: string;
  avatarUrl?: string;
}

export interface TextInputProps extends OptionalClassName {
  inputProps: InputProps;
  cut_handle?: () => void;
  error?: boolean;
}

export interface TextProps extends OptionalClassName {
  text: string;
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

export interface DatePickerProps {
  sendDate: (date?: Date) => void;
}

export interface SentCtg {
  src?: string;
  main?: string;
  sub?: SubCtgType;
}

export interface CtgDialogProps {
  sentCtgData: (value: SentCtg) => void;
}

export interface AdDetails {
  mainCtg?: string;
  subCtg?: SubCtgType;
  image?: string[];
  adTitle?: string;
  description?: string;
  location?: string;
  price?: string;
  phoneNumber?: string;
  showMyPhNum?: boolean;
}

export interface DropDownConfigProps {
  placeholder: string;
  defaultSelect?: string;
  selectValue?: string;
  selectHandle: (value: string) => void;
  dropdownData?: string[];
  error?: boolean;
  id?: string;
  maxLength?: number;
  cut_handle?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onOpen?: () => void;
}

export interface OptionGroup {
  label: string;
  values?: string[];
  inputType?: "number" | "Text";
  helpingText?: string;
  maxLength?: number;
  nestedGroup?: NestedOptionGroup;
}

export interface CtgOptions {
  groups: OptionGroup[];
  subCtg: SubCtgType;
}

interface ConditionalOption {
  condition: string[];
  values?: string[];
  inputType?: "number" | "Text";
  maxLength?: number;
  helpingText?: string;
  label?: string;
}

export interface NestedOptionGroup {
  title: string;
  conditionalOptions?: ConditionalOption[];
}

export type MainCtgType =
  | "allcategories"
  | "Mobiles & Tablets"
  | "Fashion & Beauty"
  | "Vehicles"
  | "Birds & Animals"
  | "Electronics & Home Appliances"
  | "Furniture & Home Decorator"
  | undefined;

export type SubCtgType =
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

export type DynamicData = {
  [key: string]: any;
};

export type LogJoinScreenName =
  | "login"
  | "join"
  | "loginEmail"
  | "joinEmail"
  | "loginPhone"
  | "joinPhone"
  | "otpEmail"
  | "otpPhone"
  | "createPass"
  | "verifyPhone"
  | "verifyEmail"
  | "forgotPassPhone"
  | "forgotPassEmail";

export interface LogJoinAlertProps {
  trigger: ReactNode;
  onClick: () => void;
}

export interface LogJoinRoute {
  currentScreen: LogJoinScreenName;
  previousScreen?: LogJoinScreenName;
}

export interface LogJoinData {
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
  onComplete?: () => void; // Function to call when timer completes
}
