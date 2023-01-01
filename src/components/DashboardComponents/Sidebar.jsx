import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      {/* <!-- Sidebar  --> */}
      <div className="iq-sidebar">
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <Link to="index.html" className="header-logo">
            <img
              src="../assets/images/logo.png"
              className="img-fluid rounded-normal"
              alt=""
            />
            <div className="logo-title">
              <span className="text-primary text-uppercase">Streamit </span>
            </div>
          </Link>
          <div className="iq-menu-bt-sidebar">
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">
                  <i className="las la-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
              <li>
                <Link to="/" className="iq-waves-effect">
                  <i className="las la-home iq-arrow-left"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/Users" className="iq-waves-effect">
                  <i className="las la-user-friends"></i>
                  <span>User</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#category"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="las la-list-ul"></i>
                  <span>Category</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </Link>
                <ul
                  id="category"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="add-category.html">
                      <i className="las la-user-plus"></i>Add Category
                    </Link>
                  </li>
                  <li>
                    <Link to="category-list.html">
                      <i className="las la-eye"></i>Category List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#movie"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="las la-film"></i>
                  <span>Movie</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </Link>
                <ul
                  id="movie"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="add-movie.html">
                      <i className="las la-user-plus"></i>Add Movie
                    </Link>
                  </li>
                  <li>
                    <Link to="movie-list.html">
                      <i className="las la-eye"></i>Movie List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#show"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="las la-film"></i>
                  <span>Show</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </Link>
                <ul
                  id="show"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link to="add-show.html">
                      <i className="las la-user-plus"></i>Add Show
                    </Link>
                  </li>
                  <li>
                    <Link to="show-list.html">
                      <i className="las la-eye"></i>Show List
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="pages-pricing.html" className="iq-waves-effect">
                  <i className="ri-price-tag-line"></i>
                  <span>Pricing</span>
                </Link>
              </li>

              <li>
                <Link
                  to="#ui-elements"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="lab la-elementor iq-arrow-left"></i>
                  <span>UI Elements</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </Link>
                <ul
                  id="ui-elements"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li className="elements">
                    <Link
                      to="#sub-menu"
                      className="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-play-circle-line"></i>
                      <span>UI Kit</span>
                      <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                    </Link>
                    <ul
                      id="sub-menu"
                      className="iq-submenu collapse"
                      data-parent="#ui-elements"
                    >
                      <li>
                        <Link to="ui-colors.html">
                          <i className="las la-palette"></i>colors
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-typography.html">
                          <i className="las la-keyboard"></i>Typography
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-alerts.html">
                          <i className="las la-tag"></i>Alerts
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-badges.html">
                          <i className="lab la-atlassian"></i>Badges
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-breadcrumb.html">
                          <i className="las la-bars"></i>Breadcrumb
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-buttons.html">
                          <i className="las la-tablet"></i>Buttons
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-cards.html">
                          <i className="las la-credit-card"></i>Cards
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-carousel.html">
                          <i className="las la-film"></i>Carousel
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-embed-video.html">
                          <i className="las la-video"></i>Video
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-grid.html">
                          <i className="las la-border-all"></i>Grid
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-images.html">
                          <i className="las la-images"></i>Images
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-list-group.html">
                          <i className="las la-list"></i>list Group
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-media-object.html">
                          <i className="las la-ad"></i>Media
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-modal.html">
                          <i className="las la-columns"></i>Modal
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-notifications.html">
                          <i className="las la-bell"></i>Notifications
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-pagination.html">
                          <i className="las la-ellipsis-h"></i>Pagination
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-popovers.html">
                          <i className="las la-eraser"></i>Popovers
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-progressbars.html">
                          <i className="las la-hdd"></i>Progressbars
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-tabs.html">
                          <i className="las la-database"></i>Tabs
                        </Link>
                      </li>
                      <li>
                        <Link to="ui-tooltips.html">
                          <i className="las la-magnet"></i>Tooltips
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="form">
                    <Link
                      to="#forms"
                      className="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="lab la-wpforms"></i>
                      <span>Forms</span>
                      <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                    </Link>
                    <ul
                      id="forms"
                      className="iq-submenu collapse"
                      data-parent="#ui-elements"
                    >
                      <li>
                        <Link to="form-layout.html">
                          <i className="las la-book"></i>Form Elements
                        </Link>
                      </li>
                      <li>
                        <Link to="form-validation.html">
                          <i className="las la-edit"></i>Form Validation
                        </Link>
                      </li>
                      <li>
                        <Link to="form-switch.html">
                          <i className="las la-toggle-off"></i>Form Switch
                        </Link>
                      </li>
                      <li>
                        <Link to="form-chechbox.html">
                          <i className="las la-check-square"></i>Form Checkbox
                        </Link>
                      </li>
                      <li>
                        <Link to="form-radio.html">
                          <i className="ri-radio-button-line"></i>Form Radio
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="#wizard-form"
                      className="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-archive-drawer-line"></i>
                      <span>Forms Wizard</span>
                      <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                    </Link>
                    <ul
                      id="wizard-form"
                      className="iq-submenu collapse"
                      data-parent="#ui-elements"
                    >
                      <li>
                        <Link to="form-wizard.html">
                          <i className="ri-clockwise-line"></i>Simple Wizard
                        </Link>
                      </li>
                      <li>
                        <Link to="form-wizard-validate.html">
                          <i className="ri-clockwise-2-line"></i>Validate Wizard
                        </Link>
                      </li>
                      <li>
                        <Link to="form-wizard-vertical.html">
                          <i className="ri-anticlockwise-line"></i>Vertical
                          Wizard
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="#tables"
                      className="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-table-line"></i>
                      <span>Table</span>
                      <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                    </Link>
                    <ul
                      id="tables"
                      className="iq-submenu collapse"
                      data-parent="#ui-elements"
                    >
                      <li>
                        <Link to="tables-basic.html">
                          <i className="ri-table-line"></i>Basic Tables
                        </Link>
                      </li>
                      <li>
                        <Link to="data-table.html">
                          <i className="ri-database-line"></i>Data Table
                        </Link>
                      </li>
                      <li>
                        <Link to="table-editable.html">
                          <i className="ri-refund-line"></i>Editable Table
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      to="#icons"
                      className="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-list-check"></i>
                      <span>Icons</span>
                      <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                    </Link>
                    <ul
                      id="icons"
                      className="iq-submenu collapse"
                      data-parent="#ui-elements"
                    >
                      <li>
                        <Link to="icon-dripicons.html">
                          <i className="ri-stack-line"></i>Dripicons
                        </Link>
                      </li>
                      <li>
                        <Link to="icon-fontawesome-5.html">
                          <i className="ri-facebook-fill"></i>Font Awesome 5
                        </Link>
                      </li>
                      <li>
                        <Link to="icon-lineawesome.html">
                          <i className="ri-keynote-line"></i>line Awesome
                        </Link>
                      </li>
                      <li>
                        <Link to="icon-remixicon.html">
                          <i className="ri-remixicon-line"></i>Remixicon
                        </Link>
                      </li>
                      <li>
                        <Link to="icon-unicons.html">
                          <i className="ri-underline"></i>unicons
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#pages"
                  className="iq-waves-effect collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="las la-file-alt iq-arrow-left"></i>
                  <span>Pages</span>
                  <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                </Link>
                <ul
                  id="pages"
                  className="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li>
                    <Link
                      to="#authentication"
                      className="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-pages-line"></i>
                      <span>Authentication</span>
                      <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                    </Link>
                    <ul
                      id="authentication"
                      className="iq-submenu collapse"
                      data-parent="#pages"
                    >
                      <li>
                        <Link to="sign-in.html">
                          <i className="las la-sign-in-alt"></i>Login
                        </Link>
                      </li>
                      <li>
                        <Link to="sign-up.html">
                          <i className="ri-login-circle-line"></i>Register
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-recoverpw.html">
                          <i className="ri-record-mail-line"></i>Recover
                          Password
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-confirm-mail.html">
                          <i className="ri-file-code-line"></i>Confirm Mail
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-lock-screen.html">
                          <i className="ri-lock-line"></i>Lock Screen
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to="#extra-pages"
                      className="iq-waves-effect collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-pantone-line"></i>
                      <span>Extra Pages</span>
                      <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                    </Link>
                    <ul
                      id="extra-pages"
                      className="iq-submenu collapse"
                      data-parent="#pages"
                    >
                      <li>
                        <Link to="pages-timeline.html">
                          <i className="ri-map-pin-time-line"></i>Timeline
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-invoice.html">
                          <i className="ri-question-answer-line"></i>Invoice
                        </Link>
                      </li>
                      <li>
                        <Link to="blank-page.html">
                          <i className="ri-invision-line"></i>Blank Page
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-error.html">
                          <i className="ri-error-warning-line"></i>Error 404
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-error-500.html">
                          <i className="ri-error-warning-line"></i>Error 500
                        </Link>
                      </li>

                      <li>
                        <Link to="pages-maintenance.html">
                          <i className="ri-archive-line"></i>Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-comingsoon.html">
                          <i className="ri-mastercard-line"></i>Coming Soon
                        </Link>
                      </li>
                      <li>
                        <Link to="pages-faq.html">
                          <i className="ri-compasses-line"></i>Faq
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
