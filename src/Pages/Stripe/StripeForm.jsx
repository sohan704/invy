import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { AuthContext } from "../../Providers/AuthProvider";
import UseShopData from "../../Hooks/UseShopData";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const StripeForm = ({ price, limit }) => {

  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = UseAxiosPublic();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const [transactionId, setTransactionId] = useState(null);
  const [,shopData] = UseShopData();
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price }).then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
    }
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });


    if (error) {
      console.log('[error]', error);

      toast.error(`${error?.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      console.log('[PaymentMethod]', paymentMethod);

    }



    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })

    if (confirmError) {

      toast.error(`confirmation error`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      console.log('Payment Intent', paymentIntent);

      if (paymentIntent.status === 'succeeded') {
        console.log('Transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
      toast.success('Payment Success!', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      toast.success(`Payment Amount ${paymentIntent?.amount / 100} $`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });



      axiosSecure.patch(`/increaseAdminIncome/${price}`).then(res => console.log(res.data));

      axiosSecure.patch(`/increaseLimit/${shopData?._id}/${limit}`).then(res=> {
        console.log(res.data);
      })
    }







  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '30px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-neutral my-5 text-2xl" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>


      <div className="flex justify-center items-center my-5">
        {transactionId && <div className="card bg-gray-100 shadow-xl">
          <div className="card-body border-2 border-neutral rounded-lg">
            <div className="card-actions justify-end">
           
            </div>
            <p className="text-2xl text-neutral "> Transaction Id :- {transactionId}</p>
          </div>
        </div>}
      </div>

    </form>
  );
};

export default StripeForm;