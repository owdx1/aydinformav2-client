import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}
const Button = forwardRef<HTMLButtonElement, ButtonProps> (({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button ref={ref} className={cn(
      `
        w-auto
        rounded-md
        bg-black
        border-transparent
        px-5
        py-3
        disabled:cursor-not-allowed
        disable:opacity-50
        font-light
        hover:opacity-75
        transition
      `,
      className
    )}>
      {children}
    </button>
  )
})

Button.displayName = "button"

export default Button