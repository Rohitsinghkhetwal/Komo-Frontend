import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useGlobalStore from "../../Store";
import { StripeElementsOptions } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkoutForm";
import Text from "../../components/Text";
import { getCartTotal } from "../../helper";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  const { clientSecret, cart } = useGlobalStore();
  const total = getCartTotal(cart);

  const options: StripeElementsOptions = {
    clientSecret,
  };

  return (
    <div className="mx-[50px]  my-[82px]">
      <div className="grid grid-cols-2 gap-40">
        <div className="max-w-2xl">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>

        <div className="space-y-7 ">
          {cart.map((_items) => {
            return (
              <div key={_items.id} className="flex items-start  mx-[10px]">
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
                    <Text variant="subheading-two">
                      ${_items.price} x {_items.quantity}
                    </Text>
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

export default Payment;
