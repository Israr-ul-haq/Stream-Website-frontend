import React from "react";

function UserFooter() {
  return (
    <footer id="contact" className="footer-one iq-bg-dark">
      {/* <!-- Address --> */}
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row footer-standard">
            <div className="col-lg-6">
              <div className="widget text-left">
                <div className="menu-footer-link-1-container">
                  <ul id="menu-footer-link-1" className="menu p-0">
                    <li
                      id="menu-item-7314"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314"
                    >
                      <a href="#">Terms Of Use</a>
                    </li>
                    <li
                      id="menu-item-7316"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7316"
                    >
                      <a href="../html/privacy-policy.html">Privacy-Policy</a>
                    </li>
                    <li
                      id="menu-item-701"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-701"
                    >
                      <a href="../html/faq.html">FAQ</a>
                    </li>
                    <li
                      id="menu-item-7118"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7118"
                    >
                      <a href="../html/watch-video.html">Watch List</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget text-left">
                <div className="textwidget">
                  <p>
                    <small>
                      © 2021 STREAMIT. All Rights Reserved. All videos and shows
                      on this platform are trademarks of, and all related images
                      and content are the property of, Streamit Inc. Duplication
                      and copy of this is strictly prohibited. All rights
                      reserved.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <h6 className="footer-link-title">Follow Us :</h6>
              <ul className="info-share">
                <li>
                  <a target="_blank" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
              <div className="widget text-left">
                <div className="textwidget">
                  <h6 className="footer-link-title">Streamit App</h6>
                  <div className="d-flex align-items-center">
                    <a className="app-image" href="#">
                      <img
                        src="../images/Website/footer/01.jpg"
                        loading="lazy"
                        alt="play-store"
                      />
                    </a>
                    <a className="ml-3 app-image" href="#">
                      <img
                        src="../images/Website/footer/02.jpg"
                        loading="lazy"
                        alt="app-store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Address END --> */}
    </footer>
  );
}

export default UserFooter;
