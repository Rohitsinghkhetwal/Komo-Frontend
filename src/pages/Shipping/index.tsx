import clsx from "clsx";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { useForm } from "react-hook-form";
import Icon from "../../components/icons";
import useGlobalStore from "../../Store";
import { getCartTotal } from "../../helper";
import { ICartItem } from "../../Types";
import axios from "../../apis/axios";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  city: string;
  address: string;
};

type OrderDetails = {
    user: {
        name: string
        email: string
    }
    deliveryAddress: {
        address: string
        city: string
    }
    orderItem: ICartItem[]

}

const ShippingAddress = () => {
  const { cart, updateClientSecret} = useGlobalStore();
  const total = getCartTotal(cart);
  const navigate = useNavigate();


  const {
    register,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const OnSubmit = handleSubmit(async (data) => {
    try {
    const {name, address, city,email} = getValues()
    const OrderDetail:OrderDetails = {
        user: {
            name,
            email
        },
        deliveryAddress: {
            address,
            city
        },
        orderItem: cart
    }
     const response = await axios.post("/Order/items", {
        ...OrderDetail
     })
     console.log(response.data);
     updateClientSecret(response.data.clientSecret)
     navigate("/checkout/payment")

}catch(err){
    console.log(err);
        
}

  });

  return (
    <div className="my-[82px] mx-[50px] ">
      <Text variant="heading-three" className="mb-[50px]">
        Shipping Address
      </Text>
      <div className="grid grid-cols-2 gap-8">
        <form className="max-w-xl ">
          {/* first name and last name */}
          <div className="flex space-x-[18px] ">
            <div className=" flex flex-col  space-y-3 w-full">
              <label htmlFor="first-name" className="text-base font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 18,
                })}
                className={clsx("p-5 rounded-[18px] border border-silver", {
                  "focus:outline-red focus:ring-red": errors.name,
                })}
                placeholder="First name"
              />
              {errors.name && (
                <span className="flex space-x-3">
                  <Icon name="exclamation-triangle" />
                  <span className="text-red">Required field</span>
                </span>
              )}
            </div>

            <div className=" flex flex-col items-start space-y-3">
              <label htmlFor="last-name" className="text-base font-semibold">
                Email
              </label>
              <input
                id="Emial"
                type="text"
                {...register("email", {
                  required: true,
                  maxLength: 20,
                })}
                className={clsx("p-5 rounded-[18px] border border-silver", {
                  "focus:outline-red focus:ring-red": errors.email,
                })}
                placeholder="Last name"
              />
              {errors.email && (
                <span className="flex space-x-3">
                  <Icon name="exclamation-triangle" />
                  <span className="text-red">Required field</span>
                </span>
              )}
            </div>
          </div>

          {/* city details  */}
          <div className="flex flex-col items-start mt-7 w-full">
            <label htmlFor="postal" className="text-base font-semibold mb-3">
              City
            </label>
            <input
              id="city"
              placeholder="Postal-code"
              type="text"
              {...register("city", {
                required: true,
                maxLength: 10,
                minLength: 8,
              })}
              className={clsx("p-5 rounded-[18px] border border-silver", {
                "focus:outline-red focus:ring-red": errors.city,
              })}
            />
            {errors.city && (
              <span className="flex space-x-3">
                <Icon name="exclamation-triangle" />
                <span className="text-red">Required field</span>
              </span>
            )}
          </div>
          {/* Address */}

          <div className="flex flex-col items-start mt-7">
            <label htmlFor="address" className="text-base font-semibold mb-3">
              Address
            </label>
            <input
              id="address"
              placeholder="Address"
              type="text"
              {...register("address", {
                required: true,
                maxLength: 56,
              })}
              className={clsx("p-5 rounded-[18px] border border-silver", {
                "focus:outline-red focus:ring-red": errors.address,
              })}
            />
            {errors.address && (
              <span className="flex space-x-3">
                <Icon name="exclamation-triangle" />
                <span className="text-red">Required field</span>
              </span>
            )}
          </div>
          <div className="flex justify-end mt-7">
            <Button size="small" onClick={OnSubmit}>
              {" "}
              CONTINUE TO PAYMENT
            </Button>
          </div>
        </form>
        <div className="space-y-7 ">
          {cart.map((_items) => {
            return (
              <div key={_items.id} className="flex items-start justify-between  mx-[10px]">
               
                  <img
                    src={_items.image}
                    alt="image"
                    className="w-[178px] h-[178px] rounded-[18px] mr-[46px]"
                    width={178}
                    height={178}
                  />

                  <div className=" flex  flex-col w-full justify-between  ">
                    <div className="flex justify-between ">
                      <Text variant="subheading-two">{_items.name}</Text>
                      <Text variant="subheading-two">${_items.price} x {_items.quantity}</Text>
                    </div>
                  </div>
                
              </div>
            );
          })}
          <div className="mt-10 flex justify-between mx-[12px]">
            <Text variant="body-three">Subtotal</Text>
            <Text variant="body-three">${total}</Text>
          </div>
          <div className="mt-10 flex justify-between mx-[12px]">
            <Text variant="body-three">Shipping</Text>
            <Text variant="body-three">Free</Text>
          </div>
          <div className="mt-[46px] mb-10 h-[1.8px] bg-black"></div>
          <div className="mt-10 flex justify-between mx-[12px]">
            <Text variant="body-three">Total</Text>
            <Text variant="body-three">${total}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
