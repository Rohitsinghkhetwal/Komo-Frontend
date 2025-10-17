import { useState } from "react";
import Icon from "./icons"
import {Link} from "react-router-dom"
import Text from "./Text"
import Logo from "./icons/logo"
import { getCartLength } from "../helper"
import useGlobalStore from "../Store"

const Header = () => {
  const { cart } = useGlobalStore();
  const Length = getCartLength(cart);
  const [open, setOpen] = useState(false);
  
  return (
    <header className="container-page mt-4 mb-6">
      <div className="px-4 py-3 rounded-2xl bg-white-smoke/70 backdrop-blur-md border border-white/60 shadow-sm">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="shrink-0">
            <Logo/>
          </Link>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-silver/60" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <Icon name="xmark"/> : (
              <span className="block w-5 h-0.5 bg-raisin-black relative">
                <span className="absolute block w-5 h-0.5 bg-raisin-black -translate-y-2"></span>
                <span className="absolute block w-5 h-0.5 bg-raisin-black translate-y-2"></span>
              </span>
            )}
          </button>

          <nav className="hidden md:flex flex-row items-center gap-8">
            <Link to={"/shop"}>
              <Text variant="caption-two">Shop</Text>
            </Link>
            <Link to={"/about"}>
              <Text variant="caption-two">About</Text>
            </Link>
            <Link to={"/cart"} className="relative">
              <Icon name="cart-icon"/>
              <span className="absolute -right-2 bottom-4 bg-white rounded-full w-[18px] h-[18px] text-xs flex items-center justify-center">{Length}</span>
            </Link>
          </nav>
        </div>

        {open && (
          <div className="md:hidden mt-4 border-t border-white/70 pt-4">
            <div className="flex flex-col gap-4">
              <Link to={"/shop"} onClick={() => setOpen(false)}>
                <Text variant="caption-two">Shop</Text>
              </Link>
              <Link to={"/about"} onClick={() => setOpen(false)}>
                <Text variant="caption-two">About</Text>
              </Link>
              <Link to={"/cart"} className="relative w-max" onClick={() => setOpen(false)}>
                <Icon name="cart-icon"/>
                <span className="absolute -right-2 -top-2 bg-white rounded-full w-[18px] h-[18px] text-xs flex items-center justify-center">{Length}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
