import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-200",
        "disabled:opacity-50 disabled:pointer-events-none",

        // base style
        "font-medium rounded-full",

        // variants
        variant === "default" && "bg-white text-black hover:bg-white/90",

        variant === "outline" &&
          "border border-white/20 text-white bg-white/5 hover:bg-white/10",

        className
      )}
      {...props}
    />
  );
}
