import React from "react";
import telegram from "../resources/images/logo-telegram.svg";
import twitter from "../resources/images/logo-twitter.svg";
import appStore from "../resources/images/App_Store_Badge.svg";
import playStore from "../resources/images/Google_Play_Badge.svg";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="row footer_desktop">
        <div className="col-12">
          <div className="footer_top">
            <div className="footer_left">
              <h1>boost!</h1>
              {/* <div className="join_button">
                <button>Join the Waitlist</button>
                <button>Read Whitepaper</button>
              </div>
              <ul>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Cookie Policy</Link>
                </li>
                <li>
                  <Link>Disclaimer</Link>
                </li>
              </ul> */}
            </div>
            <div className="footer_right">
              <div className="app-btn">
                <Link to="">
                  <img src={appStore} alt="AppStore" />
                </Link>
                <Link to="">
                  <img src={playStore} alt="PlayStore" />
                </Link>
              </div>
            </div>
          </div>
          <div className="horizontal_line"></div>
          <div className="footer_bottom">
            <h6>© {new Date().getFullYear()} BOOST. All rights reserved.</h6>
            <div className="social_icon">
              <h6>Join our vibrant community!</h6>
              <div className="icon">
                <Link>
                  <img src={telegram} alt="" />
                </Link>
                <Link>
                  <img src={twitter} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer_tablet">
        <div className="footer_top">
          <div className="footer_left">
            <h1>boost!</h1>
            {/* <div className="join_button">
              <button>Join the Waitlist</button>
              <button>Read Whitepaper</button>
            </div>
            <ul>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Cookie Policy</Link>
              </li>
              <li>
                <Link>Disclaimer</Link>
              </li>
            </ul> */}
          </div>
          <div className="social_icon">
            <h6>Join our vibrant community!</h6>
            <div className="icon">
              <Link>
                <img src={telegram} alt="" />
              </Link>
              <Link>
                <img src={twitter} alt="" />
              </Link>
            </div>
          </div>
          <div className="footer_right">
            <div className="app-btn">
              <Link to="">
                <img src={appStore} alt="AppStore" />
              </Link>
              <Link to="">
                <img src={playStore} alt="PlayStore" />
              </Link>
            </div>
          </div>
          <h6>© {new Date().getFullYear()} BOOST. All rights reserved.</h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
