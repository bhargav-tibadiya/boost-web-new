import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../resources/images/Logo.svg";
import telegram from "../resources/images/logo-telegram.svg";
import twitter from "../resources/images/logo-twitter.svg";
import appStore from "../resources/images/App_Store_Badge.svg";
import playStore from "../resources/images/Google_Play_Badge.svg";
import "../styles/Navbar.css";

const menuData = [
  { text: "Home", path: "/" },
  // { text: "PRE-SALE", path: "/pre-sale" },
  { text: "Token", path: "/token" },
  { text: "FAQ", path: "/faq" },
];

const Navbar = () => {
  //  const navigate = useNavigate();

  //  const handleBoostBuy = () => {
  //    navigate("/boost-buy");
  //  };
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuClick = () => {
    setIsMenuActive((prevState) => !prevState);
  };
  return (
    <>
      <nav className="header_area">
        <div className="container">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <Link className="navbar-brand" to="/">
                <img src={Logo} alt="Logo" />
              </Link>
              <div className="navbar_main">
                <nav className={`navbar ${isMenuActive ? "active" : ""}`}>
                  <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                  <ul className="menu">
                    {menuData.map((item) => (
                      <li className="nav-item" key={item.text}>
                        <a className="nav-link" href={item.path}>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* <button className="join-btn" onClick={handleBoostBuy}>
                    buy $boost
                  </button> */}
                  {/* <div className="app-btn">
                    <Link to="">
                      <img src={appStore} alt="AppStore" />
                    </Link>
                    <Link to="">
                      <img src={playStore} alt="PlayStore" />
                    </Link>
                  </div> */}
                  <div className="social_icon">
                    <h6>Join our vibrant community!</h6>
                    <div className="icon">
                      <Link to="https://t.me/+70WQZc5RMyNlMzBk" target="_blank">
                        <img src={telegram} alt="" />
                      </Link>
                      <Link
                        to="https://twitter.com/Boost_Social_"
                        target="_blank"
                      >
                        <img src={twitter} alt="" />
                      </Link>
                    </div>
                  </div>
                </nav>
                {/* <button className="join-btn" onClick={handleBoostBuy}>
                  buy $boost
                </button> */}
                <div className="social_icon">
                  <h6>Join our vibrant community!</h6>
                  <div className="icon">
                    <Link to="https://t.me/+70WQZc5RMyNlMzBk" target="_blank">
                      <img src={telegram} alt="" />
                    </Link>
                    <Link
                      to="https://twitter.com/Boost_Social_"
                      target="_blank"
                    >
                      <img src={twitter} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="icon">
                <Link to="https://t.me/+70WQZc5RMyNlMzBk" target="_blank">
                  <img src={telegram} alt="" />
                </Link>
                <Link to="https://twitter.com/Boost_Social_" target="_blank">
                  <img src={twitter} alt="" />
                </Link>
              </div>
                <div
                  className={`show_menu ${isMenuActive ? "active" : ""}`}
                  onClick={handleMenuClick}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
