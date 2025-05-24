"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface DialogContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const DialogContext = createContext<DialogContextType | null>(null);

interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dialog({
  children,
  open: controlledOpen,
  onOpenChange,
}: DialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : isOpen;

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setIsOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  return (
    <DialogContext.Provider
      value={{
        isOpen: open,
        open: () => setOpen(true),
        close: () => setOpen(false),
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}

interface DialogTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

type DialogTriggerChildProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  children?: React.ReactNode;
};

export function DialogTrigger({
  children,
  asChild = false,
}: DialogTriggerProps) {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("DialogTrigger must be used within a Dialog");
  }

  const { open } = context;

  if (asChild) {
    const child = React.Children.only(
      children
    ) as React.ReactElement<DialogTriggerChildProps>;
    const childProps: DialogTriggerChildProps = {
      ...child.props,
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        open();
        if (child.props.onClick) {
          child.props.onClick(e);
        }
      },
      className: `${child.props.className || ""} cursor-pointer`,
    };
    return React.cloneElement(child, childProps);
  }

  return (
    <div onClick={open} className="cursor-pointer">
      {children}
    </div>
  );
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function DialogContent({
  children,
  className,
  ...props
}: DialogContentProps) {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("DialogContent must be used within a Dialog");
  }

  const { isOpen, close } = context;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal modal-open" role="dialog" aria-modal="true">
      <div className="modal-backdrop" onClick={close} aria-hidden="true" />
      <div
        className={cn(
          "modal-box relative max-w-2xl max-h-[90vh] overflow-y-auto",
          "transform transition-all duration-300 ease-out",
          "bg-base-100 shadow-2xl rounded-box",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        role="document"
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-2 mb-4 pb-2 border-b border-base-300",
        className
      )}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "modal-action mt-6 pt-4 border-t border-base-300",
        className
      )}
      {...props}
    />
  );
}

export function DialogTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold leading-6 text-base-content", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base text-base-content/90", className)} {...props} />
  );
}

export function DialogClose({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("DialogClose must be used within a Dialog");
  }

  const { close } = context;

  return (
    <button
      type="button"
      className={cn(
        "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
        "text-base-content/70 hover:text-base-content hover:bg-base-200",
        className
      )}
      onClick={close}
      aria-label="Close dialog"
      {...props}
    >
      {children || (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
