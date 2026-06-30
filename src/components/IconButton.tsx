import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "ghost" | "outline" | "fill";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, variant = "ghost", size = "md", asChild = false, className = "", ...props }, ref) => {
    const variants = {
      ghost: "text-stone-500 hover:text-stone-700 hover:bg-stone-100",
      outline: "border border-stone-300 text-stone-600 hover:bg-stone-50 hover:border-stone-400",
      fill: "bg-stone-900 text-white hover:bg-stone-700",
    };
    const sizes = {
      sm: "p-1.5",
      md: "p-2",
      lg: "p-3",
    };
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={`inline-flex items-center justify-center rounded-lg transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
IconButton.displayName = "IconButton";
