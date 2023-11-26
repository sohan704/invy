import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeForm from "./StripeForm";


//TODO
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)

const Stripepayment = () => {
  return (
    <div>
      <div>
        <div className=" text-2xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-500 to-gray-400 text-center mt-16 mb-12 ">
          STRIPE PAYMENT
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <Elements stripe={stripePromise}>
          <StripeForm></StripeForm>
        </Elements>
      </div>
    </div>
  );
};

export default Stripepayment;