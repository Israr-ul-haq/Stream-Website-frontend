import React from "react";
import { useLocation } from "react-router-dom";
import Payment from "./Payment";
import PaymentReturn from "./PaymentReturn";

function MainPayment() {
  const query = new URLSearchParams(useLocation()?.search);
  if (query.get("return")) {
    return <PaymentReturn />;
  } else {
    debugger;
    return <Payment />;
  }
}

export default MainPayment;
