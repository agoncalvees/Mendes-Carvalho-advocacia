import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-[2px] border text-sm font-semibold transition-colors duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "border-cobalt bg-cobalt text-on-cobalt hover:border-cobalt-hover hover:bg-cobalt-hover",
        outline: "border-line bg-transparent text-ink hover:border-ink hover:bg-surface",
        light: "border-paper bg-paper text-ink hover:border-surface-strong hover:bg-surface-strong",
        ghost: "border-transparent bg-transparent text-ink hover:bg-surface",
      },
      size: {
        default: "px-5 py-3",
        sm: "min-h-10 px-4 py-2",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
