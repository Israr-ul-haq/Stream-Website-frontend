import React from "react";

function Dashboard() {
  return (
    <>
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-sm-6 col-lg-6 col-xl-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="iq-cart-text text-capitalize">
                          <p className="mb-0">view</p>
                        </div>
                        <div className="icon iq-icon-box-top rounded-circle bg-primary">
                          <i className="las la-eye"></i>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <h4 className="mb-0">+24K</h4>
                        <p className="mb-0 text-primary">
                          <span>
                            <i className="fa fa-caret-down mr-2"></i>
                          </span>
                          35%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6 col-xl-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="iq-cart-text text-capitalize">
                          <p className="mb-0 font-size-14">Rated This App</p>
                        </div>
                        <div className="icon iq-icon-box-top rounded-circle bg-warning">
                          <i className="lar la-star"></i>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <h4 className="mb-0">+55K</h4>
                        <p className="mb-0 text-warning">
                          <span>
                            <i className="fa fa-caret-up mr-2"></i>
                          </span>
                          50%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6 col-xl-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="iq-cart-text text-capitalize">
                          <p className="mb-0 font-size-14">Downloaded</p>
                        </div>
                        <div className="icon iq-icon-box-top rounded-circle bg-info">
                          <i className="las la-download"></i>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <h4 className="mb-0">+1M</h4>
                        <p className="mb-0 text-info">
                          <span>
                            <i className="fa fa-caret-up mr-2"></i>
                          </span>
                          80%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-6 col-xl-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="iq-cart-text text-uppercase">
                          <p className="mb-0 font-size-14">Visitors</p>
                        </div>
                        <div className="icon iq-icon-box-top rounded-circle bg-success">
                          <i className="lar la-user"></i>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <h4 className="mb-0">+2M</h4>
                        <p className="mb-0 text-success">
                          <span>
                            <i className="fa fa-caret-up mr-2"></i>
                          </span>
                          80%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between align-items-center">
                  <div className="iq-header-title">
                    <h4 className="card-title">Top Rated Item</h4>
                  </div>
                  <div
                    id="top-rated-item-slick-arrow"
                    className="slick-aerrow-block iq-rtl-direction"
                  ></div>
                </div>
                <div className="iq-card-body">
                  <ul className="list-unstyled row top-rated-item mb-0 iq-rtl-direction">
                    <li className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                      <div className="iq-card mb-0">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <a href="javascript:void(0)">
                              <img
                                src="../assets/images/dashboard/01.jpg"
                                className="img-fluid w-100 img-border-radius"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="iq-feature-list">
                            <h6 className="font-weight-600 mb-0">
                              The Last Breath
                            </h6>
                            <p className="mb-0 mt-2">T.v show</p>
                            <div className="d-flex align-items-center my-2 iq-ltr-direction">
                              <p className="mb-0 mr-2">
                                <i className="lar la-eye mr-1"></i> 134
                              </p>
                              <p className="mb-0">
                                <i className="las la-download ml-2"></i> 30 k
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                      <div className="iq-card mb-0">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <a href="javascript:void(0)">
                              <img
                                src="../assets/images/dashboard/02.jpg"
                                className="img-fluid w-100 img-border-radius"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="iq-feature-list">
                            <h6 className="font-weight-600 mb-0">Last Night</h6>
                            <p className="mb-0 mt-2">Movie</p>
                            <div className="d-flex align-items-center my-2 iq-ltr-direction">
                              <p className="mb-0 mr-2">
                                <i className="lar la-eye mr-1"></i> 133
                              </p>
                              <p className="mb-0">
                                <i className="las la-download ml-2"></i> 20 k
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                      <div className="iq-card mb-0">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <a href="javascript:void(0)">
                              <img
                                src="../assets/images/dashboard/03.jpg"
                                className="img-fluid w-100 img-border-radius"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="iq-feature-list">
                            <h6 className="font-weight-600 mb-0">
                              Jeon Woochie
                            </h6>
                            <p className="mb-0 mt-2">Movie</p>
                            <div className="d-flex align-items-center my-2 iq-ltr-direction">
                              <p className="mb-0 mr-2">
                                <i className="lar la-eye mr-1"></i> 222
                              </p>
                              <p className="mb-0">
                                <i className="las la-download ml-2"></i> 40 k
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                      <div className="iq-card mb-0">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <a href="javascript:void(0)">
                              <img
                                src="../assets/images/dashboard/04.jpg"
                                className="img-fluid w-100 img-border-radius"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="iq-feature-list">
                            <h6 className="font-weight-600 mb-0">Dino Land</h6>
                            <p className="mb-0 mt-2">T.v show</p>
                            <div className="d-flex align-items-center my-2 iq-ltr-direction">
                              <p className="mb-0 mr-2">
                                <i className="lar la-eye mr-1"></i> 122
                              </p>
                              <p className="mb-0">
                                <i className="las la-download ml-2"></i> 25 k
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                      <div className="iq-card mb-0">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <a href="javascript:void(0)">
                              <img
                                src="../assets/images/dashboard/05.jpg"
                                className="img-fluid w-100 img-border-radius"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="iq-feature-list">
                            <h6 className="font-weight-600 mb-0">Last Race</h6>
                            <p className="mb-0 mt-2">T.v show</p>
                            <div className="d-flex align-items-center my-2 iq-ltr-direction">
                              <p className="mb-0 mr-2">
                                <i className="lar la-eye mr-1"></i> 144
                              </p>
                              <p className="mb-0">
                                <i className="las la-download ml-2"></i> 35 k
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="col-sm-6 col-lg-4 col-xl-3 iq-rated-box">
                      <div className="iq-card mb-0">
                        <div className="iq-card-body p-0">
                          <div className="iq-thumb">
                            <a href="javascript:void(0)">
                              <img
                                src="../assets/images/dashboard/06.jpg"
                                className="img-fluid w-100 img-border-radius"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="iq-feature-list">
                            <h6 className="font-weight-600 mb-0">
                              Opend Dead Shot
                            </h6>
                            <p className="mb-0 mt-2">T.v show</p>
                            <div className="d-flex align-items-center my-2 iq-ltr-direction">
                              <p className="mb-0 mr-2">
                                <i className="lar la-eye mr-1"></i> 134
                              </p>
                              <p className="mb-0">
                                <i className="las la-download ml-2"></i> 30 k
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="iq-card iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header">
                  <div className="iq-header-title">
                    <h4 className="card-title text-center">
                      User's Of Product
                    </h4>
                  </div>
                </div>
                <div className="iq-card-body pb-0">
                  <div id="view-chart-01"></div>
                  <div className="row mt-1">
                    <div className="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div className="iq-card">
                        <div className="iq-card-body">
                          <div className="media align-items-center">
                            <div className="iq-user-box bg-primary"></div>
                            <div className="media-body text-white">
                              <p className="mb-0 font-size-14 line-height">
                                New <br />
                                Customer
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div className="iq-card">
                        <div className="iq-card-body">
                          <div className="media align-items-center">
                            <div className="iq-user-box bg-warning"></div>
                            <div className="media-body text-white">
                              <p className="mb-0 font-size-14 line-height">
                                Exsisting <br />
                                Subscriber's
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div className="iq-card">
                        <div className="iq-card-body">
                          <div className="media align-items-center">
                            <div className="iq-user-box bg-info"></div>
                            <div className="media-body text-white">
                              <p className="mb-0 font-size-14 line-height">
                                Daily
                                <br />
                                Visitor's
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-6 iq-user-list">
                      <div className="iq-card">
                        <div className="iq-card-body">
                          <div className="media align-items-center">
                            <div className="iq-user-box bg-danger"></div>
                            <div className="media-body text-white">
                              <p className="mb-0 font-size-14 line-height">
                                Extented <br />
                                Subscriber's
                              </p>
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
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex align-items-center justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Categories</h4>
                  </div>
                </div>
                <div className="iq-card-body p-0">
                  <div id="view-chart-03"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex align-items-center justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Top Category</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center seasons">
                    <div className="iq-custom-select d-inline-block sea-epi s-margin">
                      <select
                        name="cars"
                        className="form-control season-select"
                      >
                        <option value="season1">Today</option>
                        <option value="season2">This Week</option>
                        <option value="season2">This Month</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="iq-card-body row align-items-center">
                  <div className="col-lg-7">
                    <div className="row list-unstyled mb-0 pb-0">
                      <div className="col-sm-6 col-md-4 col-lg-6 mb-3">
                        <div className="iq-progress-bar progress-bar-vertical iq-bg-primary">
                          <span
                            className="bg-primary"
                            data-percent="100"
                            style={{
                              transition: "height 2s ease 0s",
                              width: "100%",
                              height: "40%",
                            }}
                          ></span>
                        </div>
                        <div className="media align-items-center">
                          <div className="iq-icon-box-view rounded mr-3 iq-bg-primary">
                            <i className="las la-film font-size-32"></i>
                          </div>
                          <div className="media-body text-white">
                            <h6 className="mb-0 font-size-14 line-height">
                              Actions
                            </h6>
                            <small className="text-primary mb-0">+34%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-6 mb-3">
                        <div className="iq-progress-bar progress-bar-vertical iq-bg-secondary">
                          <span
                            className="bg-secondary"
                            data-percent="100"
                            style={{
                              transition: "height 2s ease 0s",
                              width: "100%",
                              height: "70%",
                            }}
                          ></span>
                        </div>
                        <div className="media align-items-center">
                          <div className="iq-icon-box-view rounded mr-3 iq-bg-secondary">
                            <i className="las la-laugh-squint font-size-32"></i>
                          </div>
                          <div className="media-body text-white">
                            <p className="mb-0 font-size-14 line-height">
                              Comedy
                            </p>
                            <small className="text-secondary mb-0">+44%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-6 mb-3">
                        <div className="iq-progress-bar progress-bar-vertical iq-bg-info">
                          <span
                            className="bg-info"
                            data-percent="100"
                            style={{
                              transition: "height 2s ease 0s",
                              width: "100%",
                              height: "40%",
                            }}
                          ></span>
                        </div>
                        <div className="media align-items-center">
                          <div className="iq-icon-box-view rounded mr-3 iq-bg-info">
                            <i className="las la-skull-crossbones font-size-32"></i>
                          </div>
                          <div className="media-body text-white">
                            <p className="mb-0 font-size-14 line-height">
                              Horror
                            </p>
                            <small className="text-info mb-0">+56%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-6 mb-3">
                        <div className="iq-progress-bar progress-bar-vertical iq-bg-warning">
                          <span
                            className="bg-warning"
                            data-percent="100"
                            style={{
                              transition: "height 2s ease 0s",
                              width: "40%",
                              height: "40%",
                            }}
                          ></span>
                        </div>
                        <div className="media align-items-center">
                          <div className="iq-icon-box-view rounded mr-3 iq-bg-warning">
                            <i className="las la-theater-masks font-size-32"></i>
                          </div>
                          <div className="media-body text-white">
                            <p className="mb-0 font-size-14 line-height">
                              Drama
                            </p>
                            <small className="text-warning mb-0">+65%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-6 mb-lg-0 mb-3">
                        <div className="iq-progress-bar progress-bar-vertical iq-bg-success">
                          <span
                            className="bg-success"
                            data-percent="100"
                            style={{
                              transition: "height 2s ease 0s",
                              width: "60%",
                              height: "60%",
                            }}
                          ></span>
                        </div>
                        <div className="media align-items-center mb-lg-0 mb-3">
                          <div className="iq-icon-box-view rounded mr-3 iq-bg-success">
                            <i className="las la-child font-size-32"></i>
                          </div>
                          <div className="media-body text-white">
                            <p className="mb-0 font-size-14 line-height">
                              Kids
                            </p>
                            <small className="text-success mb-0">+74%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-lg-6 mb-lg-0 mb-3">
                        <div className="iq-progress-bar progress-bar-vertical iq-bg-danger">
                          <span
                            className="bg-danger"
                            data-percent="100"
                            style={{
                              transition: "height 2s ease 0s",
                              width: "80%",
                              height: " 80%",
                            }}
                          ></span>
                        </div>
                        <div className="media align-items-center">
                          <div className="iq-icon-box-view rounded mr-3 iq-bg-danger">
                            <i className="las la-grin-beam font-size-32"></i>
                          </div>
                          <div className="media-body text-white">
                            <p className="mb-0 font-size-14 line-height">
                              Thrilled
                            </p>
                            <small className="text-danger mb-0">+40%</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div id="view-chart-02" className="view-cahrt-02"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Recently Viewed Items</h4>
                  </div>
                  <div className="iq-card-header-toolbar d-flex align-items-center seasons">
                    <div className="iq-custom-select d-inline-block sea-epi s-margin">
                      <select
                        name="cars"
                        className="form-control season-select"
                      >
                        <option value="season1">Most Likely</option>
                        <option value="season2">Unlikely</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div className="table-responsive">
                    <table
                      className="data-tables table movie_table"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th style={{ width: "20%" }}>Movie</th>
                          <th style={{ width: "10%" }}>Rating</th>
                          <th style={{ width: "20%" }}>Category</th>
                          <th style={{ width: "10%" }}>Download/Views</th>
                          <th style={{ width: "10%" }}>User</th>
                          <th style={{ width: "20%" }}>Date</th>
                          <th style={{ width: "10%" }}>
                            <i className="lar la-heart"></i>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="media align-items-center">
                              <div className="iq-movie">
                                <a href="javascript:void(0);">
                                  <img
                                    src="../assets/images/movie-thumb/01.jpg"
                                    className="img-border-radius avatar-40 img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="media-body text-white text-left ml-3">
                                <p className="mb-0">Champions</p>
                                <small>1h 40m</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            <i className="lar la-star mr-2"></i> 9.2
                          </td>
                          <td>Horror</td>
                          <td>
                            <i className="lar la-eye"></i>
                          </td>
                          <td>Unsubcriber</td>
                          <td>21 July,2020</td>
                          <td>
                            <i className="las la-heart text-primary"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media align-items-center">
                              <div className="iq-movie">
                                <a href="javascript:void(0);">
                                  <img
                                    src="../assets/images/show-thumb/05.jpg"
                                    className="img-border-radius avatar-40 img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="media-body text-white text-left ml-3">
                                <p className="mb-0">Last Race</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <i className="lar la-star mr-2"></i> 7.2
                          </td>
                          <td>Horror</td>
                          <td>
                            <i className="lar la-eye"></i>
                          </td>
                          <td>subcriber</td>
                          <td>22 July,2020</td>
                          <td>
                            <i className="las la-heart text-primary"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media align-items-center">
                              <div className="iq-movie">
                                <a href="javascript:void(0);">
                                  <img
                                    src="../assets/images/show-thumb/07.jpg"
                                    className="img-border-radius avatar-40 img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="media-body text-white text-left ml-3">
                                <p className="mb-0">Boop Bitty</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <i className="lar la-star mr-2"></i> 8.2
                          </td>
                          <td>Thriller</td>
                          <td>
                            <i className="lar la-eye"></i>
                          </td>
                          <td>Unsubcriber</td>
                          <td>23 July,2020</td>
                          <td>
                            <i className="las la-heart text-primary"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media align-items-center">
                              <div className="iq-movie">
                                <a href="javascript:void(0);">
                                  <img
                                    src="../assets/images/show-thumb/10.jpg"
                                    className="img-border-radius avatar-40 img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="media-body text-white text-left ml-3">
                                <p className="mb-0">Dino Land</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <i className="lar la-star mr-2"></i> 8.5
                          </td>
                          <td>Action</td>
                          <td>
                            <i className="lar la-eye"></i>
                          </td>
                          <td>Unsubcriber</td>
                          <td>24 July,2020</td>
                          <td>
                            <i className="las la-heart text-primary"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media align-items-center">
                              <div className="iq-movie">
                                <a href="javascript:void(0);">
                                  <img
                                    src="../assets/images/show-thumb/04.jpg"
                                    className="img-border-radius avatar-40 img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="media-body text-white text-left ml-3">
                                <p className="mb-0">The Last Breath</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <i className="lar la-star mr-2"></i> 8.9
                          </td>
                          <td>Horror</td>
                          <td>
                            <i className="lar la-eye"></i>
                          </td>
                          <td>subcriber</td>
                          <td>25 July,2020</td>
                          <td>
                            <i className="las la-heart text-primary"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
