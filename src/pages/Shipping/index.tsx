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

// Shipping address

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
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const OnSubmit = handleSubmit(async () => {
    try {
      const {name, address, city,email} = getValues()
      const OrderDetail:OrderDetails = {
        user: { name, email },
        deliveryAddress: { address, city },
        orderItem: cart
      }
      const response = await axios.post("/Order/items", { ...OrderDetail })
      updateClientSecret(response.data.clientSecret)
      navigate("/checkout/payment")
    } catch(err) {
      console.log(err);
    }
  });

  return (
    <div className="container-page my-10 md:my-20">
      <Text variant="heading-three" className="mb-10">Shipping Address</Text>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <form className="max-w-xl space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="name" className="text-base font-semibold">Name</label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true, maxLength: 32 })}
                className={clsx("p-4 rounded-xl border border-silver focus:outline-none focus:ring-2 focus:ring-periwinkle", { "focus:ring-red": errors.name })}
                placeholder="Full name"
              />
              {errors.name && (
                <span className="flex items-center gap-2 text-red text-sm">
                  <Icon name="exclamation-triangle" />
                  <span>Required field</span>
                </span>
              )}
            </div>

            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="email" className="text-base font-semibold">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true, maxLength: 64 })}
                className={clsx("p-4 rounded-xl border border-silver focus:outline-none focus:ring-2 focus:ring-periwinkle", { "focus:ring-red": errors.email })}
                placeholder="Email address"
              />
              {errors.email && (
                <span className="flex items-center gap-2 text-red text-sm">
                  <Icon name="exclamation-triangle" />
                  <span>Required field</span>
                </span>
              )}
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label htmlFor="city" className="text-base font-semibold mb-2">City</label>
            <input
              id="city"
              placeholder="City"
              type="text"
              {...register("city", { required: true, maxLength: 32 })}
              className={clsx("p-4 rounded-xl border border-silver focus:outline-none focus:ring-2 focus:ring-periwinkle", { "focus:ring-red": errors.city })}
            />
            {errors.city && (
              <span className="flex items-center gap-2 text-red text-sm mt-2">
                <Icon name="exclamation-triangle" />
                <span>Required field</span>
              </span>
            )}
          </div>
          {/* Address */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-base font-semibold mb-2">Address</label>
            <input
              id="address"
              placeholder="Address"
              type="text"
              {...register("address", { required: true, maxLength: 120 })}
              className={clsx("p-4 rounded-xl border border-silver focus:outline-none focus:ring-2 focus:ring-periwinkle", { "focus:ring-red": errors.address })}
            />
            {errors.address && (
              <span className="flex items-center gap-2 text-red text-sm mt-2">
                <Icon name="exclamation-triangle" />
                <span>Required field</span>
              </span>
            )}
          </div>
          <div className="flex justify-end">
            <Button size="small" onClick={OnSubmit}>CONTINUE TO PAYMENT</Button>
          </div>
        </form>

        <div className="space-y-6">
          {cart.map((_items) => {
            return (
              <div key={_items.id} className="flex items-start gap-5">
                <img
                  src={_items.image}
                  alt={_items.name}
                  className="w-[120px] h-[120px] md:w-[178px] md:h-[178px] rounded-2xl object-cover shadow-card"
                  width={178}
                  height={178}
                />
                <div className="flex flex-col w-full justify-between">
                  <div className="flex justify-between gap-4">
                    <Text variant="subheading-two">{_items.name}</Text>
                    <Text variant="subheading-two">${_items.price} x {_items.quantity}</Text>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mt-6 flex justify-between">
            <Text variant="body-three">Subtotal</Text>
            <Text variant="body-three">${total}</Text>
          </div>
          <div className="mt-6 flex justify-between">
            <Text variant="body-three">Shipping</Text>
            <Text variant="body-three">Free</Text>
          </div>
          <div className="mt-10 mb-6 h-[1.8px] bg-black"></div>
          <div className="mt-6 flex justify-between">
            <Text variant="body-three">Total</Text>
            <Text variant="body-three">${total}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
