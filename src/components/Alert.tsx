import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AlertProps } from "@/interfaces";

export const Alert = ({
  trigger,
  description,
  title,
  doneText,
  doneClickHandle,
  cancelText,
  canceClickHandle,
}: AlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="max-sm:p-3 w-[90%] rounded-lg">
        <AlertDialogHeader className="text-left">
          <AlertDialogTitle className="max-sm:text-sm">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="max-sm:text-xs">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-row items-center gap-2 justify-end ">
          {cancelText && (
            <AlertDialogCancel
              className="m-0 max-sm:text-xs"
              onClick={canceClickHandle}
            >
              {cancelText}
            </AlertDialogCancel>
          )}
          <AlertDialogAction
            className="m-0 max-sm:text-xs"
            onClick={doneClickHandle}
          >
            {doneText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
