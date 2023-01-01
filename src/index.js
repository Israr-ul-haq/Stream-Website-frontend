import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import App from "./App";
import { HashRouter } from "react-router-dom";

document.addEventListener("DOMContentLoaded", async () => {
  const stripePromise = loadStripe(
    "pk_test_51J8V6kGmZwffOfAoYmVJwQsIQC8npiQe2SicwnOK6M8YV4eauIbjIduFcAe6UFZ2qXH4henlV9r5KapWlWiwBadw00oK0IyvYi"
  );

  ReactDOM.createRoot(document.getElementById("root")).render(
    <Elements stripe={stripePromise}>
      <HashRouter>
        <App />
      </HashRouter>
    </Elements>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
