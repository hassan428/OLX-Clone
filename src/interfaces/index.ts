import { InputProps } from "@/components/ui/input";
import { DialogCloseProps } from "@radix-ui/react-dialog";
import { LucideIcon } from "lucide-react";
import { ChangeEvent, ReactNode } from "react";
import { IconType } from "react-icons";

type IconComponent = IconType | LucideIcon;

export interface OptionalClassName {
  className?: string;
}

export interface HasOptionalError {
  error?: boolean;
}

export interface HasHref {
  href: string;
}

export interface HasText {
  text: string;
}

export interface HasTitle {
  title: string;
}

export interface HasOnClick {
  onClick: () => void;
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

export interface LocationSelectProps extends HasOptionalError {
  options: LocationDataProps[];
  placeholder: string;
  onSelect: (value: string) => void;
  onBlurOrClose?: () => void;
  onOpen?: () => void;
  isDefaultSelect?: boolean;
}

export interface Params {
  categoryName?: MainCtgType;
  profileID?: string;
  id?: string;
}

export interface LayoutProps extends PageProps, ChildrenType {}

export interface RouteDataProps extends OptionalClassName, HasHref, HasTitle {
  Icon: IconComponent;
}

export interface NavScreenBtnProps extends OptionalClassName, HasHref, HasText {
  icon: ReactNode;
  SheetClose?: React.ForwardRefExoticComponent<
    DialogCloseProps & React.RefAttributes<HTMLButtonElement>
  >;
}

export interface FooterLink extends HasHref, HasText {}

export interface FooterLinkSection extends HasTitle {
  data: FooterLink[];
}

export interface SocialMediaLinks extends HasHref {
  Icon: IconComponent;
}

export interface CustomImageProps extends HasHref {
  src: string;
}

export interface CategoryImage extends HasHref {
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

export interface ProductCardProps extends OptionalClassName, HasTitle {
  price: string;
  src: string[];
  description: string;
  location: string;
  time: string;
  id: string;
  productOtherDetails: ProductOtherDetails;
}

export interface MainCtgProductCardProps extends HasHref {
  cardData: ProductCardProps[];
  heading: MainCtgType;
  subCtgCard?: SubCtgProductCardProps[];
}

export interface SubCtgProductCardProps extends HasHref {
  cardData: ProductCardProps[];
  heading: SubCtgType;
}

export interface SkeletonLineProps extends OptionalClassName {
  count: number;
}

export interface ViewStyle extends OptionalClassName, HasOnClick {
  Tag: IconComponent;
  size: number;
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

export interface TextInputProps extends OptionalClassName, HasOptionalError {
  inputProps: InputProps;
  cut_handle?: () => void;
}

export interface TextProps
  extends OptionalClassName,
    HasText,
    HasOptionalError {}

export interface ImageItem {
  id: number;
  file: File | null;
  preview: string | null;
}

export interface ImageComponentProps extends HasOnClick {
  image: ImageItem;
  index: number;
  moveImage: (dragIndex: number, hoverIndex: number) => void;
  isFirst: boolean;
}

export interface ImageUploaderProps {
  onSortedImages: (sortedImages: ImageItem[]) => void;
}

export interface AlertProps extends HasTitle {
  trigger: ReactNode;
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

export interface DropDownConfigProps extends HasOptionalError {
  placeholder: string;
  defaultSelect?: string;
  selectValue?: string;
  selectHandle: (value: string) => void;
  dropdownData?: string[];
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

export interface NestedOptionGroup extends HasTitle {
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

export interface LogJoinAlertProps extends HasOnClick {
  trigger: ReactNode;
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

export interface HasOther {
  other?: string;
}

export interface SubmitButton extends HasText, HasOnClick {
  disabled?: boolean;
}

export interface OtpEmailSent {
  email: string;
  name: string;
  otp: number;
}

export interface HasErrorText {
  errorText?: string;
}

export interface OtpInputProps extends HasErrorText {
  onChange: (value: string) => void;
  value: string;
}

export interface PasswordRules {
  hasMinLength?: boolean;
  hasNumber?: boolean;
  hasSpecialChar?: boolean;
  hasLetter?: boolean;
}

export interface PasswordStrength extends HasText {
  value: number;
}

export interface PasswordValidationData extends HasText {
  condition?: boolean;
}

export interface TimerProps {
  onComplete?: () => void; // Function to call when timer completes
}

export interface CloudinaryUploadOptions {
  file: File; // Required
  folder?: string; // Optional (e.g., "user_avatars", "ads/2025")
  public_id?: string; // Optional (Custom file name)
  tags?: string | string[]; // Optional tags
  context?: string; // Optional image context info (e.g., "alt=My Image")
  transformation?: string; // Optional transformation string
  resource_type?: "image" | "video" | "raw"; // Default is "image"
  [key: string]: any; // For any extra options you may want later
}