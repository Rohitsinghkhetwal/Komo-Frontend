import { useEffect } from "react";
import useGlobalStore from "../../Store"



const Success = () => {
    const {  emptyCart } = useGlobalStore();

    useEffect(() => {
        emptyCart();
    })

  return (
    <div className="flex items-center h-screen justify-center">
        Payment successful
        
    </div>
  )
}

export default Success