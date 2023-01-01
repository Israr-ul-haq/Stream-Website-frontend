import React from "react";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import CardPayment from "./CardPayment";
import CheckOut from "./CheckOut";
import MainPayment from "./MainPayment";
import Payment from "./Payment";
import "react-tabs/style/react-tabs.css";
function PricingPlan() {
  const SwalModal = withReactContent(Swal);

  const [data, setData] = useState("");

  const subscriptionValue = (value) => {
    setData(value);
  };

  return (
    <main id="main" className="site-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="iq-pricing-card">
              <div className="table-responsive iq-pricing pt-2">
                <table id="my-table" className="table" data-active="premium">
                  <thead>
                    <tr>
                      <th className="text-center iq-price-head"></th>
                      <th className="text-center iq-price-head free">
                        <div className="iq-price-box">
                          <div className="iq-price-rate text-white d-flex align-items-end justify-content-center flex-wrap">
                            <div className="mr-2 h3">$0</div>
                            <small> / Month</small>
                          </div>
                          <span className="type">Free</span>
                        </div>
                      </th>
                      <th className="text-center iq-price-head premium">
                        <div className="iq-price-box active">
                          <div className="iq-price-rate text-white  d-flex align-items-end justify-content-center flex-wrap">
                            <div className="mr-2 h3">$39</div>
                            <small> / 3 Months</small>
                          </div>
                          <span className="type">Premium</span>
                        </div>
                      </th>
                      <th className="text-center iq-price-head basic">
                        <div className="iq-price-box">
                          <div className="iq-price-rate text-white d-flex align-items-end justify-content-center flex-wrap">
                            <div className="mr-2 h3">$19</div>
                            <small> / Month</small>
                          </div>
                          <span className="type">Basic</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-center" scope="row">
                        {" "}
                        Ad Free Entertainment
                      </th>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-times-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell active">
                        <i className="fa fa-check-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-times-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        {" "}
                        American Tv Shows
                      </th>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-times-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell active">
                        <i className="fa fa-check-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-check-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        {" "}
                        Hollywood Movies
                      </th>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-times-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell active">
                        <i className="fa fa-check-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-check-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        {" "}
                        New Movies
                      </th>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-times-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell active">
                        <i className="fa fa-check-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-check-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        {" "}
                        Streamit Special
                      </th>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-times-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell active">
                        <i className="fa fa-check-circle"></i>
                      </td>
                      <td className="text-center iq-child-cell">
                        <i className="fa fa-times-circle"></i>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-center" scope="row">
                        {" "}
                        Video Quality
                      </th>
                      <td className="text-center iq-child-cell">SD(480p)</td>
                      <td className="text-center iq-child-cell active">
                        FHD(1080p)
                      </td>
                      <td className="text-center iq-child-cell">HD(720p)</td>
                    </tr>
                    <tr>
                      <th className="text-center iq-price-footer"></th>
                      <td className="text-center iq-price-footer">
                        <div
                          className="align-items-center r-mb-23"
                          data-animation-in="fadeInUp"
                          data-delay-in="1.3"
                        >
                          <button type="button" class="btn btn-primary">
                            Subscribe
                          </button>
                        </div>
                      </td>
                      <td className="text-center iq-price-footer active">
                        <div
                          className="align-items-center r-mb-23"
                          data-animation-in="fadeInUp"
                          data-delay-in="1.3"
                        >
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            onClick={() => subscriptionValue("39")}
                          >
                            Subscribe
                          </button>
                        </div>
                      </td>
                      <td className="text-center iq-price-footer">
                        <div
                          className="align-items-center r-mb-23"
                          data-animation-in="fadeInUp"
                          data-delay-in="1.3"
                        >
                          {/* <!-- Button trigger modal --> */}
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            onClick={() => subscriptionValue("19")}
                          >
                            Subscribe
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="iq-card">
                              <Tabs>
                                <TabList>
                                  <Tab> FPX Payment</Tab>
                                  <Tab> Card Payment</Tab>
                                </TabList>
                                <TabPanel>
                                  <Payment value={data} />
                                </TabPanel>
                                <TabPanel>
                                  <CheckOut value={data} />
                                </TabPanel>
                              </Tabs>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PricingPlan;
