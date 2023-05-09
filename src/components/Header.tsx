import Icon from "./icons"
import {Link} from "react-router-dom"
import Text from "./Text"
import Logo from "./icons/logo"
import { getCartLength } from "../helper"
import useGlobalStore from "../Store"

const Header = () => {
  const { cart } = useGlobalStore();
  const Length = getCartLength(cart);

  
  return (
    <header className="p-[22px] flex items-center justify-between my-[18px] mx-[50px] rounded-[26px] bg-[#f5f5f5] backdrop-blur-[10px] ">
        <Link to={"/"}>
        <Logo/>
        </Link>
        
        <div className="flex flex-row items-center space-x-[38px] ">
            <Link to={"/shop"}>
                <Text variant="caption-two">Shop</Text>
            </Link>
            <a href="">
            <Text variant="caption-two">About</Text>
            </a>
            <Link to={"/cart"} className="relative">
            <Icon name="cart-icon"/>
            <span className="absolute -right-2 bottom-4 bg-white rounded-full w-[18px] h-[18px] flex items-center justify-center" >{Length}</span>
            </Link> 
            
        </div>
    </header>
  )
}

export default Header