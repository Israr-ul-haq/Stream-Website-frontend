import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";

function CardPayment({ value }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [loader, setLoader] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const Submit = async () => {
    debugger;
    setLoader(true);
    if (!stripe || !elements) {
      toast.error("Stripe not yet loaded");
      setLoader(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/#/mainPayment?return=true`,
      },
    });
    setLoader(false);

    if (error) {
      setErrorMessage(error.message);
    } else {
    }
  };

  return (
    <>
      <form action="movie-list.html" onSubmit={handleSubmit(Submit)}>
        <div className="row">
          <div className="form-group col-md-6">
            <PaymentElement className="pay_element" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-primary" disabled={loader}>
            {loader ? (
              <div class="loader">Loading...</div>
            ) : (
              <div>Pay {"$" + value}</div>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default CardPayment;
