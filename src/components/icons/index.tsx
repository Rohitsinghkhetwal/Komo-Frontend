
import ArrowDown from "./arrow-down"
import ArrowSmallRight from "./arrow-small-right"
import CartIcon from "./cart-icon"
import ExclamationTriangle from "./exclamation-triangle"
import Logo from "./logo"
import MinusSmall from "./minus-small"
import PlusSmall from "./plus-small"
import Trash from "./trash"
import Xmark from "./xmark"

type IconName = "arrow-down" 
| "arrow-small-right"
| "cart-icon"
| "exclamation-triangle"
| "minus-small" 
| "plus-small"
| "trash"
| "xmark"
| "logo"

// here we will iterate over all the element
// plus-icon:  <PlusIcon/>
type IconType = {
    [k in IconName]: JSX.Element
}

const Icons: IconType = {
    "arrow-down": <ArrowDown/>,
    "arrow-small-right": <ArrowSmallRight/>,
    "cart-icon": <CartIcon/>,
    "exclamation-triangle": <ExclamationTriangle/>,
    "minus-small": <MinusSmall/>,
    "plus-small": <PlusSmall/>,
    "trash": <Trash/>,
    "xmark": <Xmark/>,
    "logo": <Logo/>

}

type IconProp = {
    name: keyof typeof Icons

}

const Icon = ({name}: IconProp) => {
  return Icons[name]
}

export default Icon