import { useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

function PaymentReturn() {
  const stripe = useStripe();
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const client_secret = query.get("payment_intent_client_secret");
  const [reviewurl, setReviewUrl] = useState();
  useEffect(() => {
    stripe?.retrievePaymentIntent(client_secret).then(({ paymentIntent }) => {
      if (!stripe) {
        toast.error("Stripe not yet loaded");
        return;
      }
      toast.success(paymentIntent.status);
      setReviewUrl(paymentIntent.id);
      console.log(reviewurl);
    });
  }, [client_secret]);

  const returnUrl = () => {
    navigate("/");
  };

  return (
    <section className="sign-in-page">
      <Toaster />
      <div className="container">
        <div className="row justify-content-center align-items-center height-self-center">
          <div className="col-lg-5 col-md-12 align-self-center form-padding">
            <div className="sign-user_card">
              <div className="sign-in-page-data">
                <div className="sign-in-from w-100 m-auto">
                  <h3 className="mb-3 text-center">Thank You</h3>
                  <div className="buttonsDetails">
                    {/* <a
                      class="btn btn-primary mt-3"
                      href={
                        reviewurl
                          ? "https://dashboard.stripe.com/test/payments/" +
                            reviewurl
                          : ""
                      }
                      target="_blank"
                    >
                      View payment Details
                    </a> */}
                    <button
                      class="btn btn-primary mt-3 text-center"
                      onClick={returnUrl}
                    >
                      Back to Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PaymentReturn;
