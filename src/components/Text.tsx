import clsx from "clsx"

type Variant = "heading-one" 
| "heading-two"
| "heading-three" 
| "heading-four"
| "subheading-one"
| "subheading-two"
| "subheading-three"
| "body-one"
| "body-two"
| "body-three"
| "caption-one"
| "caption-two"
| "caption-three"
| "caption-four"


type textProps = {
    children: React.ReactNode | React.ReactNode[],
    variant : Variant,
    className?: string
}

const variants: Record<Variant, string>= {
    "heading-one": "font-bold text-3xl leading-9 md:text-5xl md:leading-[64px]",
    "heading-two": "font-bold text-2xl leading-8 md:text-4xl md:leading-[51px]",
    "heading-three": "font-bold text-xl leading-7 md:text-2xl md:leading-[41px]",
    "heading-four": "font-bold text-lg leading-[28px] md:text-2xl md:leading-[31px]",
    "subheading-one": "font-semibold text-lg leading-8 md:text-2xl md:leading-[42px]",
    "subheading-two": "font-semibold text-base leading-6 md:text-xl md:leading-[30px]",
    "subheading-three": "text-base font-semibold",
    "body-one": "text-lg leading-8 md:text-2xl md:leading-[42px]",
    "body-two": "text-base leading-6 md:text-xl md:leading-[30px]",
    "body-three": "text-sm md:text-base",
    "caption-one": "uppercase text-xs md:text-base",
    "caption-two": "uppercase text-xs md:text-base font-semibold",
    "caption-three": "uppercase text-xs md:text-base font-semibold",
    "caption-four": "uppercase text-[10px] leading-[14px] md:text-xs md:leading-[18px]"
}

const Text = ({children, variant = "heading-one", className}: textProps) => {
  return <p className={clsx("text-raisin-black", variants[variant], className)}>{children}</p>
}

export default Text
