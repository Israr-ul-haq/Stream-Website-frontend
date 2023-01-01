import { useEffect, useState } from "react";
import { Routes as Switch, Route } from "react-router-dom";
import DashboardLayouts from "../Layouts/DashbaordLayouts";
import UsersLayouts from "../Layouts/UsersLayouts";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../pages/DashboardPages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import MainPayment from "../pages/UsersPages/Payments/MainPayment";
import Payment from "../pages/UsersPages/Payments/Payment";
import ViewsProfile from "../pages/DashboardPages/Profile/ViewsProfile";
import Home from "../pages/UsersPages/Home";
import UserRoutes from "../routes/DashbaordRoutes/UserRoutes";
import PricingPlan from "../pages/UsersPages/Payments/PricingPlan";

function Routes() {
  const [storage, setStorage] = useState(false);
  window.addEventListener("storage", () => {
    if (JSON.parse(sessionStorage.getItem("streamUser"))?.role === "admin") {
      debugger;
      setStorage(true);
    } else {
      setStorage(false);
    }
  });

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("streamUser"))?.role === "admin") {
      debugger;
      setStorage(true);
    } else {
      setStorage(false);
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/account/login" element={<SignIn />} />
        <Route exact path="/account/signup" element={<SignUp />} />

        {storage ? (
          <Route path="/" element={<DashboardLayouts />}>
            <Route path="/ViewProfile" element={<ViewsProfile />} />
            <Route exact path="/" element={<Dashboard />} />
            <Route path="users/*" element={<UserRoutes />} />
          </Route>
        ) : (
          <Route path="/" element={<UsersLayouts />}>
            <Route path="/" element={<Home />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/mainPayment" element={<MainPayment />} />
            <Route exact path="/pricingPlan" element={<PricingPlan />} />
          </Route>
        )}

        <Route path="*" element={<NotFound />} />
      </Switch>
    </>
  );
}

export default Routes;
