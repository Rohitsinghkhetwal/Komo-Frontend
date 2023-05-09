import clsx from "clsx";
import { ReactNode } from "react";

type Size = "small" | "large"
type Variant = "primary" | "secondary"

const sizes: Record<Size, string> = {
    small: "px-[18px] py-5 hover:bg-periwinkle hover:text-raisin-black duration-300 transition-all rounded-[18px] bg-violet-blue text-white",
    large: "py-5 px-20  rounded-[180px] bg-violet-blue text-white hover:bg-periwinkle hover:text-raisin-black duration-300 transition-all"

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
    {
      "bg-silver hover:bg-silver hover:text-white cursor-not-allowed":
        disabled,
    },
    className
  )}
  disabled={disabled}
  {...props}>
  {children}
</button>
}

export default Button