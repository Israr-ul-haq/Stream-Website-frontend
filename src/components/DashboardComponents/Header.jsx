import React from "react";
import { Detector } from "react-detect-offline";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const remove_storage = () => {
    sessionStorage.removeItem("streamUser");
    setTimeout(() => {
      navigate("/account/login");
    }, 0);
  };
  return (
    <>
      {/* <!-- TOP Nav Bar --> */}
      <div className="iq-top-navbar">
        <Toaster />
        <Detector
          render={({ online }) => {
            if (online) {
              toast.success("Online");
            } else {
              toast.error("Offline");
            }
          }}
        />
        <div className="iq-navbar-custom">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-menu-bt d-flex align-items-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="las la-bars"></i>
                </div>
              </div>
              <div className="iq-navbar-logo d-flex justify-content-between">
                <Link to="index.html" className="header-logo">
                  <img
                    src="../images/logo.png"
                    className="img-fluid rounded-normal"
                    alt=""
                  />
                  <div className="logo-title">
                    <span className="text-primary text-uppercase">
                      Streamit{" "}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="iq-search-bar ml-auto">
              {/* <form action="#" className="searchbox">
                <input
                  type="text"
                  className="text search-input"
                  placeholder="Search Here..."
                />
                <Link className="search-link" to="">
                  <i className="ri-search-line"></i>
                </Link>
              </form> */}
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-label="Toggle navigation"
            >
              <i className="ri-menu-3-line"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto navbar-list">
                <li className="nav-item nav-icon search-content">
                  <Link
                    to=""
                    className="search-toggle iq-waves-effect text-gray rounded"
                  >
                    <i className="ri-search-line"></i>
                  </Link>
                  <form action="#" className="search-box p-0">
                    <input
                      type="text"
                      className="text search-input"
                      placeholder="Type here to search..."
                    />
                    <Link className="search-link" to="#">
                      <i className="ri-search-line"></i>
                    </Link>
                  </form>
                </li>
              </ul>
              <div class="dropdown _dropdown_pading">
                <div
                  class=" dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../../../images/user/1.jpg"
                    className="img-fluid avatar-40 rounded-circle"
                    alt="user"
                    loading="lazy"
                  />
                </div>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link class="dropdown-item" to="/ViewProfile">
                    Profile
                  </Link>
                  <div class="dropdown-item" onClick={remove_storage}>
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- TOP Nav Bar END --> */}
    </>
  );
}

export default Header;
