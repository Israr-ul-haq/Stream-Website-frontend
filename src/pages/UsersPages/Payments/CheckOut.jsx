import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { paymentCardIntent } from "../../../services/UsersServices/PaymentService";
import { loadStripe } from "@stripe/stripe-js";
import CardPayment from "./CardPayment";
import toast from "react-hot-toast";

function CheckOut({ value }) {
  const [loader, setLoader] = useState(false);
  const [cardSecret, setCardSecret] = useState(null);
  useEffect(() => {
    secret();
  }, []);
  console.log();
  const stripe = useStripe();
  const elements = useElements();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const secret = async () => {
    setLoader(true);
    const response = await paymentCardIntent("10" + value);

    setCardSecret(response?.data?.client_secret);
    setLoader(false);
  };

  const stripePromise = loadStripe(
    "pk_test_51J8V6kGmZwffOfAoYmVJwQsIQC8npiQe2SicwnOK6M8YV4eauIbjIduFcAe6UFZ2qXH4henlV9r5KapWlWiwBadw00oK0IyvYi"
  );

  const options = {
    // passing the client secret obtained from the server
    clientSecret: cardSecret,
  };
  return (
    <div>
      {loader ? (
        <div class="loader">Loading...</div>
      ) : cardSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CardPayment value={value} />
        </Elements>
      ) : (
        ""
      )}
    </div>
  );
}

export default CheckOut;
