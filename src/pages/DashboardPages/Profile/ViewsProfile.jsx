import React from "react";

function ViewsProfile() {
  return (
    <>
      <div className="wrapper">
        {/* <!-- Page Content  --> */}
        <div id="content-page" className="content-page">
          <div className="container-fluid">
            <div className="row profile-content">
              <div className="col-12 col-md-12 col-lg-4">
                <div className="iq-card">
                  <div className="iq-card-body profile-page">
                    <div className="profile-header">
                      <div className="cover-container text-center">
                        <img
                          src="../assets/images/user/1.jpg"
                          alt="profile-bg"
                          className="rounded-circle img-fluid"
                        />
                        <div className="profile-detail mt-3">
                          <h3>Barry Tech</h3>
                          <p className="text-primary">Web designer</p>
                          <p>
                            Phasellus faucibus mollis pharetra. Proin blandit ac
                            massa.Morbi nulla dolor, ornare at commodo non,
                            feugiat non nisi.
                          </p>
                        </div>
                        <div className="iq-social d-inline-block align-items-center">
                          <ul className="list-inline d-flex p-0 mb-0 align-items-center">
                            <li>
                              <a
                                href="#"
                                className="avatar-40 rounded-circle bg-primary mr-2 facebook"
                              >
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="avatar-40 rounded-circle bg-primary mr-2 twitter"
                              >
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="avatar-40 rounded-circle bg-primary mr-2 youtube"
                              >
                                <i
                                  className="fa fa-youtube-play"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="avatar-40 rounded-circle bg-primary pinterest"
                              >
                                <i
                                  className="fa fa-pinterest-p"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                    <div className="iq-header-title">
                      <h4 className="card-title mb-0">Personal Details</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="list-inline p-0 mb-0">
                      <li>
                        <div className="row align-items-center justify-content-between mb-3">
                          <div className="col-sm-6">
                            <h6>Birthday</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="mb-0">3rd March</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row align-items-center justify-content-between mb-3">
                          <div className="col-sm-6">
                            <h6>Address</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="mb-0">Landon</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row align-items-center justify-content-between mb-3">
                          <div className="col-sm-6">
                            <h6>Phone</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="mb-0">(010)987 543 201</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row align-items-center justify-content-between mb-3">
                          <div className="col-sm-6">
                            <h6>Email</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="mb-0">Barry@example.com</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row align-items-center justify-content-between mb-3">
                          <div className="col-sm-6">
                            <h6>Twitter</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="mb-0">@Barry</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="row align-items-center justify-content-between mb-3">
                          <div className="col-sm-6">
                            <h6>Facebook</h6>
                          </div>
                          <div className="col-sm-6">
                            <p className="mb-0">@Barry_Tech</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                    <div className="iq-header-title">
                      <h4 className="card-title mb-0">Skill Progress</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="list-inline p-0 mb-0">
                      <li>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6>Biography</h6>
                          <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                            <div className="iq-progress-bar iq-bg-primary">
                              <span
                                className="bg-primary"
                                data-percent="70"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6>Horror</h6>
                          <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                            <div className="iq-progress-bar iq-bg-danger">
                              <span
                                className="bg-danger"
                                data-percent="50"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6>Comic Book</h6>
                          <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                            <div className="iq-progress-bar iq-bg-info">
                              <span
                                className="bg-info"
                                data-percent="65"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center justify-content-between">
                          <h6>Adventure</h6>
                          <div className="iq-progress-bar-linear d-inline-block mt-1 w-50">
                            <div className="iq-progress-bar iq-bg-success">
                              <span
                                className="bg-success"
                                data-percent="85"
                              ></span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                      <div className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                        <div className="iq-header-title">
                          <h4 className="card-title mb-0">Latest Uploads</h4>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        <ul className="list-inline p-0 mb-0">
                          <li className="d-flex mb-4 align-items-center">
                            <div className="profile-icon bg-secondary">
                              <span>
                                <i className="ri-file-3-fill"></i>
                              </span>
                            </div>
                            <div className="media-support-info ml-3">
                              <h6>Documentation</h6>
                              <p className="mb-0">48kb</p>
                            </div>
                            <div className="iq-card-toolbar">
                              <div className="dropdown">
                                <span
                                  className="font-size-24"
                                  role="menu"
                                  id="dropdownMenuButton01"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-line"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right p-0">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-user-unfollow-line mr-2"></i>
                                    Share
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-close-circle-line mr-2"></i>
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center">
                            <div className="profile-icon bg-secondary">
                              <span>
                                <i className="ri-image-fill"></i>
                              </span>
                            </div>
                            <div className="media-support-info ml-3">
                              <h6>Images</h6>
                              <p className="mb-0">204kb</p>
                            </div>
                            <div className="iq-card-toolbar">
                              <div className="dropdown">
                                <span
                                  className="font-size-24"
                                  role="menu"
                                  id="dropdownMenuButton02"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-line"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right p-0">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-user-unfollow-line mr-2"></i>
                                    Share
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-close-circle-line mr-2"></i>
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center">
                            <div className="profile-icon bg-secondary">
                              <span>
                                <i className="ri-video-fill"></i>
                              </span>
                            </div>
                            <div className="media-support-info ml-3">
                              <h6>Videos</h6>
                              <p className="mb-0">509kb</p>
                            </div>
                            <div className="iq-card-toolbar">
                              <div className="dropdown">
                                <span
                                  className="font-size-24"
                                  role="menu"
                                  id="dropdownMenuButton03"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-line"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right p-0">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-user-unfollow-line mr-2"></i>
                                    Share
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-close-circle-line mr-2"></i>
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 align-items-center">
                            <div className="profile-icon bg-secondary">
                              <span>
                                <i className="ri-file-3-fill"></i>
                              </span>
                            </div>
                            <div className="media-support-info ml-3">
                              <h6>Resources</h6>
                              <p className="mb-0">48kb</p>
                            </div>
                            <div className="iq-card-toolbar">
                              <div className="dropdown">
                                <span
                                  className="font-size-24"
                                  role="menu"
                                  id="dropdownMenuButton04"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-line"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right p-0">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-user-unfollow-line mr-2"></i>
                                    Share
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-close-circle-line mr-2"></i>
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center">
                            <div className="profile-icon bg-secondary">
                              <span>
                                <i className="ri-refresh-line"></i>
                              </span>
                            </div>
                            <div className="media-support-info ml-3">
                              <h6>Celine Dion</h6>
                              <p className="mb-0">204kb</p>
                            </div>
                            <div className="iq-card-toolbar">
                              <div className="dropdown">
                                <span
                                  className="font-size-24"
                                  role="menu"
                                  id="dropdownMenuButton06"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="ri-more-line"></i>
                                </span>
                                <div className="dropdown-menu dropdown-menu-right p-0">
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-user-unfollow-line mr-2"></i>
                                    Share
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="ri-close-circle-line mr-2"></i>
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                      <div className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                        <div className="iq-header-title">
                          <h4 className="card-title mb-0">Top Books</h4>
                        </div>
                      </div>
                      <div className="iq-card-body">
                        <ul className="list-inline p-0 mb-0">
                          <li>
                            <div className="iq-details mb-2">
                              <span className="title">Adventure</span>
                              <div className="percentage float-right text-primary">
                                95 <span>%</span>
                              </div>
                              <div className="iq-progress-bar-linear d-inline-block w-100">
                                <div className="iq-progress-bar">
                                  <span
                                    className="bg-primary"
                                    data-percent="95"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="iq-details mb-2">
                              <span className="title">Horror</span>
                              <div className="percentage float-right text-warning">
                                72 <span>%</span>
                              </div>
                              <div className="iq-progress-bar-linear d-inline-block w-100">
                                <div className="iq-progress-bar">
                                  <span
                                    className="bg-warning"
                                    data-percent="72"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="iq-details mb-2">
                              <span className="title">Comic Book</span>
                              <div className="percentage float-right text-info">
                                75 <span>%</span>
                              </div>
                              <div className="iq-progress-bar-linear d-inline-block w-100">
                                <div className="iq-progress-bar">
                                  <span
                                    className="bg-info"
                                    data-percent="75"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="iq-details mb-2">
                              <span className="title">Biography</span>
                              <div className="percentage float-right text-danger">
                                70 <span>%</span>
                              </div>
                              <div className="iq-progress-bar-linear d-inline-block w-100">
                                <div className="iq-progress-bar">
                                  <span
                                    className="bg-danger"
                                    data-percent="70"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="iq-details">
                              <span className="title">Mystery</span>
                              <div className="percentage float-right text-success">
                                80 <span>%</span>
                              </div>
                              <div className="iq-progress-bar-linear d-inline-block w-100">
                                <div className="iq-progress-bar">
                                  <span
                                    className="bg-success"
                                    data-percent="80"
                                  ></span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                    <div className="iq-header-title">
                      <h4 className="card-title mb-0">Daily Sales</h4>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton05"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-fill"></i>
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton05"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2"></i>View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2"></i>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="perfomer-lists m-0 p-0">
                      <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                          <img
                            className="img-fluid avatar-50 rounded-circle"
                            src="../assets/images/user/06.jpg"
                            alt=""
                          />
                        </div>
                        <div className="media-support-info ml-3">
                          <h5>Reading on the World</h5>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy test
                          </p>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                          <span className="text-dark">
                            <b>+$82</b>
                          </span>
                        </div>
                      </li>
                      <li className="d-flex mb-4 align-items-center">
                        <div className="user-img img-fluid">
                          <img
                            className="img-fluid avatar-50 rounded-circle"
                            src="../assets/images/user/07.jpg"
                            alt=""
                          />
                        </div>
                        <div className="media-support-info ml-3">
                          <h5>Little Black Book</h5>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy test
                          </p>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-center">
                          <span className="text-dark">
                            <b>+$90</b>
                          </span>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <div className="user-img img-fluid">
                          <img
                            className="img-fluid avatar-50 rounded-circle"
                            src="../assets/images/user/08.jpg"
                            alt=""
                          />
                        </div>
                        <div className="media-support-info ml-3">
                          <h5>See the More Story</h5>
                          <p className="mb-0">
                            Lorem Ipsum is simply dummy test
                          </p>
                        </div>
                        <div className="iq-card-header-toolbar d-flex align-items-cener">
                          <span className="text-dark">
                            <b>+$85</b>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between align-items-center mb-0">
                    <div className="iq-header-title">
                      <h4 className="card-title mb-0">Top Products</h4>
                    </div>
                    <div className="iq-card-header-toolbar d-flex align-items-center">
                      <div className="dropdown">
                        <span
                          className="dropdown-toggle text-primary"
                          id="dropdownMenuButton07"
                          data-toggle="dropdown"
                        >
                          <i className="ri-more-fill"></i>
                        </span>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton05"
                        >
                          <a className="dropdown-item" href="#">
                            <i className="ri-eye-fill mr-2"></i>View
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-delete-bin-6-fill mr-2"></i>Delete
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-pencil-fill mr-2"></i>Edit
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-printer-fill mr-2"></i>Print
                          </a>
                          <a className="dropdown-item" href="#">
                            <i className="ri-file-download-fill mr-2"></i>
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <ul className="perfomer-lists m-0 p-0">
                      <li className="row mb-3 align-items-center justify-content-between">
                        <div className="col-md-8">
                          <h5>Find The Wave Book</h5>
                          <p className="mb-0">General Book</p>
                        </div>
                        <div className="col-md-4 text-right">
                          <div className="iq-card-header-toolbar d-flex align-items-center">
                            <span className="text-primary mr-3">
                              <b>+$92</b>
                            </span>
                            <div className="iq-progress-bar-linear d-inline-block mt-1 w-100">
                              <div className="iq-progress-bar iq-bg-primary">
                                <span
                                  className="bg-primary"
                                  data-percent="92"
                                ></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="row align-items-center justify-content-between">
                        <div className="col-md-8">
                          <h5>A man with those Faces</h5>
                          <p className="mb-0">Biography Book</p>
                        </div>
                        <div className="col-md-4 text-right">
                          <div className="iq-card-header-toolbar d-flex align-items-center">
                            <span className="text-danger mr-3">
                              <b>+$85</b>
                            </span>
                            <div className="iq-progress-bar-linear d-inline-block mt-1 w-100">
                              <div className="iq-progress-bar iq-bg-primary">
                                <span
                                  className="bg-danger"
                                  data-percent="85"
                                ></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Wrapper END --> */}
      <div className="rtl-box">
        <button type="button" className="btn btn-light rtl-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className="rtl-panel">
          <ul className="modes">
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="false"
              data-value="ltr"
            >
              <a href="#">LTR</a>
            </li>
            <li
              className="dir-btn"
              data-mode="rtl"
              data-active="true"
              data-value="rtl"
            >
              <a href="#">RTL</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Footer --> */}
    </>
  );
}

export default ViewsProfile;
