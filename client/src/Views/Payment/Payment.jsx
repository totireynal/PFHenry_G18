import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import Register from "../Register/Register"
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   fetch("/config").then(async (r) => {
  //     const { publishableKey } = await r.json();
  //     setStripePromise(loadStripe(publishableKey));
  //   });
  // }, []);

  useEffect(() => {
    axios.get("/config").then(async (response) => {
      const { publishableKey } = response.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  // useEffect(() => {
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     body: JSON.stringify({}),
  //   }).then(async (result) => {
  //     var { clientSecret } = await result.json();
  //     setClientSecret(clientSecret);
  //   });
  // }, []);

  useEffect(() => {
    axios.post('/create-payment-intent', {})
      .then(response => {
        const { clientSecret } = response.data;
        setClientSecret(clientSecret);
      })
      .catch(error => {
        console.error('Error fetching payment intent:', error);
      });
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Register options={clientSecret} />
        </Elements>
      )}
    </>
  );
}
export default Payment;