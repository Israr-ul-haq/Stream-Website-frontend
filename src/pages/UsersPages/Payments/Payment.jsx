import {
  FpxBankElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { paymentIntent } from "../../../services/UsersServices/PaymentService";

function Payment({ value }) {
  const [loader, setLoader] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const Submit = async (formData) => {
    debugger;
    setLoader(true);
    if (!stripe || !elements) {
      toast.error("Stripe not yet loaded");
      return;
    }

    const finalData = {
      amount: value + "00",
      currency: "myr",
    };
    debugger;
    const response = await paymentIntent(finalData);

    if (response.status === 200) {
      const { error } = await stripe.confirmFpxPayment(
        response.data.client_secret,
        {
          payment_method: {
            fpx: elements.getElement(FpxBankElement),
            billing_details: {
              name: formData.firstName + formData.lastName,
              email: formData.email,
            },
          },
          return_url: `${window.location.origin}/#/mainPayment?return=true`,
        }
      );

      setLoader(false);
      if (error) {
        toast.error(error.message);
        setLoader(false);
      }
    } else {
      toast.error(response.error.message);
      setLoader(false);
      console.log(response);
    }
  };

  return (
    <div>
      <div className="iq-card-body">
        <form action="movie-list.html" onSubmit={handleSubmit(Submit)}>
          <div className="row">
            <div className="form-group col-md-6">
              <label for="exampleInputEmail4">First Name</label>
              <input
                type="text"
                className="form-control mb-0 btn-border"
                id="exampleInputEmail4"
                placeholder="Name"
                autocomplete="off"
                {...register("firstName", { required: true })}
              />
              {errors.first_name?.type === "required" && (
                <p className="error_validation">First name is required</p>
              )}
            </div>
            <div className="form-group col-md-6">
              <label for="exampleInputEmail4">Last Name</label>
              <input
                type="text"
                className="form-control mb-0 btn-border"
                id="exampleInputEmail4"
                placeholder="Name"
                autocomplete="off"
                {...register("lastName", { required: true })}
              />
              {errors.first_name?.type === "required" && (
                <p className="error_validation">Last name is required</p>
              )}
            </div>

            <div className="form-group col-md-6">
              <label for="exampleInputEmail3">E-mail</label>
              <input
                type="email"
                className="form-control mb-0 btn-border"
                id="exampleInputEmail3"
                placeholder="Enter email"
                autocomplete="off"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="error_validation">Email is required</p>
              )}
            </div>
            <div className="form-group col-md-6">
              <label for="exampleInputEmail4">FPX bank</label>

              <FpxBankElement
                className="fpx_pay mb-0"
                options={{ accountHolderType: "individual" }}
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
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
      </div>
    </div>
  );
}

export default Payment;
