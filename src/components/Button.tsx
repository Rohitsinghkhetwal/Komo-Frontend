import clsx from "clsx";
import { ReactNode } from "react";

type Size = "small" | "large"
type Variant = "primary" | "secondary"

const sizes: Record<Size, string> = {
  small: "px-5 py-3 rounded-xl text-sm md:text-base",
  large: "py-4 px-10 rounded-full text-base md:text-lg"
}

const variants: Record<Variant, string> = {
  primary: "bg-violet-blue text-white hover:bg-violet-blue-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-blue/40 transition-all duration-200 ease-out-expo shadow-sm",
  secondary: "bg-white text-raisin-black border border-silver hover:bg-white-smoke focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver/40 transition-all duration-200 ease-out-expo"
}

type ButtonProps = {
  children?: ReactNode | ReactNode[];
  size?: Size;
  variant?: Variant;
} & JSX.IntrinsicElements["button"]

const Button = ({children,
   size= "small",
   variant="primary",
   disabled,
   className,
   ...props
  }: ButtonProps) => {
  return <button
    className={clsx(
      sizes[size],
      variants[variant],
      {
        "bg-silver hover:bg-silver text-white cursor-not-allowed": disabled,
      },
      className
    )}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
}

export default Button
