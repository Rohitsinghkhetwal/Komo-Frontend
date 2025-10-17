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
    <div className="container-page my-10 md:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        <div className="max-w-2xl">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>

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
                    <Text variant="subheading-two">
                      ${_items.price} x {_items.quantity}
                    </Text>
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

export default Payment;
