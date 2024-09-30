import React, { useEffect, useState } from "react";
import homeBg from "../resources/images/home_page_bg.png";
import homeBgMobile from "../resources/images/home_texture_bg.png";

import Slider1 from "../resources/images/Polygon_Slider.svg";
import Slider2 from "../resources/images/Rush_Slider.svg";
import Slider3 from "../resources/images/Deep_Green_Ai.svg";
import Slider4 from "../resources/images/Ostecndo_Slider.svg";
import Slider5 from "../resources/images/Roberi_Slider.svg";
import boostFeatures from "../resources/images/Boost_Features.png";
// import bnbIconActive from "../resources/images/bnb_icon_active.svg";
// import bnbIconInactive from "../resources/images/bnb_icon.svg";
// import usdtIconActive from "../resources/images/usdt_icon_active.svg";
// import usdtIconInactive from "../resources/images/usdt_icon.svg";
// import ethIconActive from "../resources/images/eth_icon_active.svg";
// import ethIconInactive from "../resources/images/eth_icon.svg";
import boostFeaturesMobile from "../resources/images/Boost_Features_Mobile.png";
import createIcon from "../resources/images/Create_Icon.svg";
import monetizeIcon from "../resources/images/Monetize_Icon.svg";
import connectIcon from "../resources/images/Connect_Icon.svg";
import gamifyingImage from "../resources/images/Gamifying_image.png";
import gamifyingText from "../resources/images/Gamifying_Text.svg";
import gamifyingTextMobile from "../resources/images/Gamifying_Text_Mobile.svg";
import brandIcon from "../resources/images/Brand_Icon.svg";
import aiMatchingIcon from "../resources/images/AI_Matching_Icon.svg";
import ugcIcon from "../resources/images/Ugc_Brand_Icon.svg";
import fansIcon from "../resources/images/Fans_Icon.svg";
import boostIcon from "../resources/images/Boost_Icon.svg";
import creatorsIcon from "../resources/images/Creators_Icon.svg";
import buildingArrowsIcon from "../resources/images/Building_Trust_Arrow_Icon.svg";
import buildingArrowsIconTablet from "../resources/images/Building_Trust_Arrow_Icon_Tablet.svg";
import buildingArrowsIconMobile from "../resources/images/Building_Trust_Arrow_Icon_Mobile.svg";
import buildingTrustIcon from "../resources/images/Building_Trust_Icon.png";
import meaningFulIcon from "../resources/images/Meaningful_Icon.png";
import increasedsIcon from "../resources/images/Increases_Ro_Icon.png";
import anasMartirosian from "../resources/images/Anas_Martirosian.png";
import xavierVilar from "../resources/images/Xavier_Vilar.png";
import dmitryKurlo from "../resources/images/Dmitry_Kurlo.png";
import dmitryKurloText from "../resources/images/dmitry_kurilo_text.png";
import paulSajulla from "../resources/images/Paul_Sajulla.png";
import tomPutter from "../resources/images/Tom_Putter.png";
import rohanTyagi from "../resources/images/Rohan_Tyagi.png";
import chrisopherJones from "../resources/images/Chrisopher_jones.png";
import appStore from "../resources/images/App_Store_Badge.svg";
import playStore from "../resources/images/Google_Play_Badge.svg";
import footerBg from "../resources/images/Footer_Bg.png";
import "../styles/Home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const teamData = [
  {
    id: 1,
    image: anasMartirosian,
    name: "anas martirosian",
    role: (
      <>
        Founder, Chief <br /> Executive Officer
      </>
    ),
    des: (
      <>
        Founder of multiple successful startups in tech, media, and wellness.
        Established international
      </>
    ),
    fullDec: (
      <>
        Founder of multiple successful startups in tech, media, and wellness.
        Established international business executive with seasoned experience in
        forging strategic commercial partnerships and go-to-market strategy
        design.
      </>
    ),
  },
  {
    id: 2,
    image: xavierVilar,
    name: "xavier vilar",
    role: (
      <>
        Chief Strategy <br /> Officer
      </>
    ),
    des: (
      <>
        Entrepreneur with extensive international business development,
        investment, and strategy
      </>
    ),
    fullDec: (
      <>
        Entrepreneur with extensive international business development,
        investment, and strategy expertise in blue chip financial (incl.
        Fidelity International) and alternative investment management firms and
        as Co-Founding Partner of a technology and real assets focused advisory
        boutique in London (UK). B.S.F.S. in International Economics at
        Georgetown University School of Foreign Service and MBA at SDA Bocconi
        School of Management (Milan, Italy)
      </>
    ),
  },
  {
    id: 3,
    image: dmitryKurlo,
    name: "dmitry kurilo",
    textImage: dmitryKurloText,
    role: (
      <>
        Chief Technology <br />
        Officer
      </>
    ),
    des: (
      <>
        Entrepreneur and software engineer behind multiple mobile apps rolled
        out globally.
      </>
    ),
    fullDec: (
      <>
        Entrepreneur and software engineer behind multiple mobile apps rolled
        out globally. Most notably the creator of the technology behind the
        Spark AR platform within Meta (formerly Facebook). Recently engineered
        Spark AR Polar and Spark AR Studio.
      </>
    ),
  },
  {
    id: 4,
    image: paulSajulla,
    name: "paul sajulla",
    role: (
      <>
        UI/UX <br /> Designer
      </>
    ),
    des: (
      <>
        Designed various website UIs and developed branding for multiple retail,
        technology,
      </>
    ),
    fullDec: (
      <>
        Designed various website UIs and developed branding for multiple retail,
        technology, crypto, and B2B companies and projects in the UK, USA, and
        Australia.
      </>
    ),
  },
  {
    id: 5,
    image: tomPutter,
    name: "tom potter",
    role: <>Advisor</>,
    des: (
      <>
        Distinguished career in motorsport marketing including F1 at McLaren and
        Williams and a
      </>
    ),
    fullDec: (
      <>
        Distinguished career in motorsport marketing including F1 at McLaren and
        Williams and a pioneer of the modern era of corporate F1 sponsorships.
        Founder and CEO of Rush Sport & Entertainment (one of the world's
        leading sponsorship and sports marketing agencies). Rush helped
        identify, structure, negotiate, and close sponsorship investments worth
        over $1.5 billion for global companies/brands such as Saudi Aramco (the
        biggest sponsorship deal in F1 history).
      </>
    ),
  },
  {
    id: 6,
    image: rohanTyagi,
    name: "rohan tyagi",
    role: <>Advisor</>,
    des: (
      <>
        Career in senior management in the social media industry including Head
        of Marketing,
      </>
    ),
    fullDec: (
      <>
        Career in senior management in the social media industry including Head
        of Marketing, TikTok (India) and Triller (India) driving marketing,
        digital products, user experience, content, business development, and
        sales strategy.
      </>
    ),
  },
  {
    id: 7,
    image: chrisopherJones,
    name: "christopher jones",
    role: <>Advisor</>,
    des: (
      <>
        Behavioral and health economist who developed the award-winning AI
        driven adherence
      </>
    ),
    fullDec: (
      <>
        Behavioral and health economist who developed the award-winning AI
        driven adherence tool trUStr and Chief Ventures Investment Officer for a
        top-tier U.S. healthcare system. Member of the National Venture Capital
        Association and Co-founder of the Oxford Intl. Cyber Security Summit.
      </>
    ),
  },
];

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [activeButton, setActiveButton] = useState("bnb");
  const [expandedStates, setExpandedStates] = useState(
    new Array(teamData.length).fill(false)
  );
  const [activeAccordion, setActiveAccordion] = useState(null);
  const targetDate = new Date("2024-12-31T23:59:59");
  // const navigate = useNavigate();

  // const handleBoostBuy = () => {
  //   navigate("/boost-buy");
  // };

  const toggleContent = (index) => {
    const newExpandedStates = [...expandedStates];
    newExpandedStates[index] = !newExpandedStates[index];
    setExpandedStates(newExpandedStates);
  };

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] !== undefined) {
      timerComponents.push(
        <button key={interval}>
          <div className="radial_bg"></div>
          {timeLeft[interval] < 10
            ? `0${timeLeft[interval]}`
            : timeLeft[interval]}{" "}
          {interval.toUpperCase()}{" "}
        </button>
      );
    }
  });

  // const handleButtonClick = (buttonName) => {
  //   setActiveButton(buttonName);
  // };

  const handleToggleCollapse = (accordionId) => {
    setIsCollapsed(!isCollapsed);
    setActiveAccordion(accordionId);
  };

  return (
    <>
      <section className="home_section">
        {/* <div className="purple_circle"></div>
        <div className="green_circle"></div>
        <div className="blue_circle"></div> */}
        <div className="texture_bg">
          <img src={homeBg} alt="homeBg" />
        </div>
        <div className="texture_mobile_bg">
          <img src={homeBgMobile} alt="homeBgMobile" />
        </div>
        <Navbar />
        <div className="main_section">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>BOOST!</h1>
                <p>Gamifying user generated content creation. </p>
                {/* <div className="buy_boost_now">
                  <div className="buy_boost_now_card">
                    <h5>buy $BOOSt now!</h5>
                    <div className="count_countdown">
                      {timerComponents.length ? (
                        timerComponents
                      ) : (
                        <span>Time's up!</span>
                      )}
                    </div>
                    <h3>until listings and the launch of Boost!</h3>
                    <h6>Choose your Currency</h6>
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link bnb_button ${
                            activeButton === "bnb" ? "active" : ""
                          }`}
                          id="pills-bnb-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-bnb"
                          type="button"
                          role="tab"
                          aria-controls="pills-bnb"
                          aria-selected={
                            activeButton === "bnb" ? "true" : "false"
                          }
                          onClick={() => handleButtonClick("bnb")}
                        >
                          <img
                            src={
                              activeButton === "bnb"
                                ? bnbIconActive
                                : bnbIconInactive
                            }
                            alt="bnbIcon"
                          />
                          bnb
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link usdt_button ${
                            activeButton === "usdt" ? "active" : ""
                          }`}
                          id="pills-USDT-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-USDT"
                          type="button"
                          role="tab"
                          aria-selected={
                            activeButton === "usdt" ? "true" : "false"
                          }
                          onClick={() => handleButtonClick("usdt")}
                        >
                          <img
                            src={
                              activeButton === "usdt"
                                ? usdtIconActive
                                : usdtIconInactive
                            }
                            alt="usdtIcon"
                          />
                          USDT
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className={`nav-link eth_button ${
                            activeButton === "eth" ? "active" : ""
                          }`}
                          id="pills-ETH-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-ETH"
                          type="button"
                          role="tab"
                          aria-selected={
                            activeButton === "eth" ? "true" : "false"
                          }
                          onClick={() => handleButtonClick("eth")}
                        >
                          <img
                            src={
                              activeButton === "eth"
                                ? ethIconActive
                                : ethIconInactive
                            }
                            alt="ethIcon"
                          />
                          ETH
                        </button>
                      </li>
                      <span>1 $BOOST = 0.000767 USD</span>
                    </ul>
                    <form>
                      <div className="row">
                        <div class="col-sm-6 mb-3 text-start">
                          <label for="bnbPay" class="form-label">
                            <span>BNB</span> you pay
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="bnbPay"
                            placeholder="0"
                          />
                        </div>
                        <div class="col-sm-6 mb-3 text-start">
                          <label for="boostReceive" class="form-label">
                            <span>$BOOST</span> you receive
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="boostReceive"
                            placeholder="0"
                          />
                        </div>
                        <button>Connect Wallet</button>
                      </div>
                    </form>
                  </div>
                </div> */}
                {/* <div className="app-btn">
                  <Link to="">
                    <img src={appStore} alt="AppStore" />
                  </Link>
                  <Link to="">
                    <img src={playStore} alt="PlayStore" />
                  </Link>
                </div> */}
                {/* <h4>earn apy during pre-sale</h4>
                <p className="bottom_p">
                  Don’t wait up for more action to start! Get started on earning
                  APY on <br /> $BOOST tokens today by joining the pre-sale.
                </p> */}
                <h5>Our Strategic Partners</h5>
                <div className="scroll_info">
                  <div className="m_scroll">
                    <img src={Slider1} alt="Slider1" />
                    <img src={Slider2} alt="Slider2" />
                    <img src={Slider3} alt="Slider3" />
                    <img src={Slider4} alt="Slider4" />
                    <img src={Slider5} alt="Slider5" />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="boost_img">
                  <img src={boostFeatures} alt="" />
                </div>
                <div className="boost_mobile">
                  <img src={boostFeaturesMobile} alt="" />
                </div>
              </div>
              <div className="col-12">
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
          </div>
        </div>
      </section>
      <section className="content_creation">
        <div className="purple_circle"></div>
        <div className="green_circle"></div>
        <div className="blue_circle"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content_top">
                <h1>
                  Gamifying <br /> user-generated <br /> content creation
                </h1>
                <p>
                  BOOST elevates user-generated content creation into the Web
                  3.0 era, blending the realms of social-fi with <br /> the
                  ingenuity of our users. Whether it's crafting immersive game
                  worlds, sharing insightful videos, or curating <br />{" "}
                  influential social media content, we reward your creativity.
                  Our platform celebrates diverse contributions, <br /> from
                  game assets to digital art, all while building a connected
                  community where every creator thrives.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoHeight={true}
                speed={700}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  769: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation, Pagination, Autoplay]}
              >
                <SwiperSlide>
                  <div className="content_card">
                    <img src={createIcon} alt="createIcon" />
                    <h6>CREATE</h6>
                    <p>
                      Create content that stands out. With BOOST, your
                      creativity is your currency. Craft compelling stories,
                      make engaging videos, or share inspiring images to
                      captivate your audience.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="content_card">
                    <img src={monetizeIcon} alt="createIcon" />
                    <h6>MONETIZE</h6>
                    <p>
                      Monetize your influence. On BOOST, likes and shares
                      translate to tangible rewards. Harness the power of your
                      content to build a stream of income.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="content_card">
                    <img src={connectIcon} alt="createIcon" />
                    <h6>CONNECT</h6>
                    <p>
                      Connect with a global community. Find collaborators, grow
                      your network, and increase your reach. Every connection on
                      BOOST has the potential to unlock new opportunities.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          {/* <div className="col-12 text-center mt-5">
            <button className="watlist_btn">buy $boost</button>
          </div> */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="Believe_card">
                <div className="believe_card_left">
                  <h6>What We Believe In</h6>
                  <h1>
                    the boost! <br />
                    vision
                  </h1>
                </div>
                <div className="believe_card_right">
                  <p>
                    {" "}
                    Our vision at BOOST is to create a world where
                    user-generated content empowers individuals and transforms
                    marketing. We envision a platform where engagement leads to
                    real-world value, and everyone can thrive in a cycle of
                    continuous growth and innovation.
                  </p>
                  {/* <button className="watlist_btn">READ WHITEPAPER</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gamifying_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="gamifying_creation">
                <div className="gamifynig_text">
                  <img src={gamifyingText} alt="gamifyingText" />
                </div>
                <div className="gamifying_top_card">
                  <h6>brands</h6>
                  <img src={brandIcon} alt="brandIcon" />
                </div>
                <div className="gamifying_top_card gamifying_top_card2">
                  <h6>
                    brand-influencer <br /> a.i. matching
                  </h6>
                  <img src={aiMatchingIcon} alt="aiMatchingIcon" />
                </div>
                <div className="gamifying_top_card gamifying_top_card3">
                  <h6>
                    authentic ugc <br />
                    for brands
                  </h6>
                  <img src={ugcIcon} alt="ugcIcon" />
                </div>
                <div className="gamifying_bottom_card">
                  <img src={boostIcon} alt="ugcIcon" />
                  <h6>
                    earn $BOOST <br />
                    tokens!
                  </h6>
                </div>
                <div className="gamifying_bottom_card gamifying_bottom_card2">
                  <img src={fansIcon} alt="ugcIcon" />
                  <h6>fans</h6>
                </div>
                <div className="gamifying_bottom_card gamifying_bottom_card3">
                  <img src={creatorsIcon} alt="ugcIcon" />
                  <h6>creators</h6>
                </div>
              </div>
              <div className="gamifying_creation_mobile">
                <div className="gamifynig_text_mobile">
                  <img src={gamifyingTextMobile} alt="gamifyingText" />
                </div>
                <div className="gamifying_card_mobile">
                  <div className="gamifying_card">
                    <img src={brandIcon} alt="brandIcon" />
                    <h6>brands</h6>
                  </div>
                  <div className="gamifying_card">
                    <img src={aiMatchingIcon} alt="aiMatchingIcon" />
                    <h6>
                      brand-influencer <br /> a.i. matching
                    </h6>
                  </div>
                </div>
                <div className="gamifying_card_mobile">
                  <div className="gamifying_card">
                    <img src={creatorsIcon} alt="ugcIcon" />
                    <h6>creators</h6>
                  </div>
                  <div className="gamifying_card">
                    <img src={boostIcon} alt="ugcIcon" />
                    <h6>
                      earn $BOOST <br />
                      tokens!
                    </h6>
                  </div>
                </div>
                <div className="gamifying_card_mobile">
                  <div className="gamifying_card">
                    <img src={fansIcon} alt="ugcIcon" />
                    <h6>fans</h6>
                  </div>
                  <div className="gamifying_card">
                    <img src={ugcIcon} alt="ugcIcon" />
                    <h6>
                      authentic ugc <br />
                      for brands
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-10">
              <div className="building_arrows">
                <img
                  src={buildingArrowsIcon}
                  alt="buildingArrowsIcon"
                  className="building_arrow_icon"
                />
                <img
                  src={buildingArrowsIconTablet}
                  alt="buildingArrowsIcon"
                  className="building_arrow_icon_tablet"
                />
                <img
                  src={buildingArrowsIconMobile}
                  alt="buildingArrowsIcon"
                  className="building_arrow_icon_mobile"
                />
                <div className="building_card">
                  <img src={meaningFulIcon} alt="meaningFulIcon" />
                </div>
                <div className="building_card2">
                  <img src={buildingTrustIcon} alt="buildingTrustIcon" />
                </div>
                <div className="building_card3">
                  <img src={increasedsIcon} alt="increasedsIcon" />
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-md-10">
              <div className="gamifying_image">
                <img src={gamifyingImage} alt={gamifyingImage} />
              </div>
            </div>
            {/* <div className="col-12 text-center">
              <button className="boost_button" onClick={handleBoostBuy}>
                buy $boost
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <section className="teams_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content_top">
                <h1>meet the team</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_card_desktop">
            {teamData.map((team, index) => (
              <div className="col-lg-3" key={index}>
                <div className="team_card">
                  <img src={team.image} alt={team.image} />
                  {team.id === 3 ? (
                    <img src={team.textImage} alt="" />
                  ) : (
                    <h5>{team.name}</h5>
                  )}
                  <h6>{team.role}</h6>
                  <p>{team.fullDec}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row justify-content-center team_card_tablet">
            <div className="col-lg-4 col-md-4">
              <div className="team_card">
                <img src={anasMartirosian} alt={anasMartirosian} />
                <h5>anas martirosian</h5>
                <h6>
                  Founder, Chief <br /> Executive Officer
                </h6>
                <p>
                  Founder of multiple successful startups in tech, media, and
                  wellness. Established international business executive with
                  seasoned experience in forging strategic commercial
                  partnerships and go-to-market strategy design.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="team_card">
                <img src={xavierVilar} alt={xavierVilar} />
                <h5>xavier vilar</h5>
                <h6>
                  Chief Strategy <br /> Officer
                </h6>
                <p>
                  Entrepreneur with extensive international business
                  development, investment, and strategy expertise in blue chip
                  financial institutions, alternative investment management
                  firms, and as Co-Founding Partner of a technology focused
                  advisory boutique in London (UK).
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_card_tablet">
            <div className="col-lg-4 col-md-4">
              <div className="team_card">
                <img src={dmitryKurlo} alt={dmitryKurlo} />
                {/* <h5>dmitry kurilo</h5> */}
                <img src={dmitryKurloText} alt="" />
                <h6>
                  Chief Technology <br />
                  Officer
                </h6>
                <p>
                  Entrepreneur and software engineer behind multiple mobile apps
                  rolled out globally. Most notably the creator of the
                  technology behind the Spark AR platform within Meta (formerly
                  Facebook). Recently engineered Spark AR Polar and Spark AR
                  Studio.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="team_card">
                <img src={paulSajulla} alt={paulSajulla} />
                <h5>paul sajulla</h5>
                <h6>UI/UX Designer</h6>
                <p>
                  Designed various website UIs and developed branding for
                  multiple retail, technology, crypto, and B2B companies and
                  projects in the UK, USA, and Australia.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="team_card">
                <img src={tomPutter} alt={tomPutter} />
                <h5>tom potter</h5>
                <h6>Advisor</h6>
                <p>
                  Distinguished career in motorsport marketing including F1 at
                  McLaren and Williams and a pioneer of the modern era of
                  corporate F1 sponsorships. Founder and CEO of Rush Sport &
                  Entertainment (one of the world's leading sponsorship and
                  sports marketing agencies). Rush helped identify, structure,
                  negotiate, and close sponsorship investments worth over $1.5
                  billion for global companies/brands such as Saudi Aramco (the
                  biggest sponsorship deal in F1 history).
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_card_tablet">
            <div className="col-lg-4 col-md-4">
              <div className="team_card">
                <img src={rohanTyagi} alt={rohanTyagi} />
                <h5>rohan tyagi</h5>
                <h6>Advisor</h6>
                <p>
                  Career in senior management in the social media industry
                  including Head of Marketing, TikTok (India) and Triller
                  (India) driving marketing, digital products, user experience,
                  content, business development, and sales strategy.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="team_card">
                <img src={chrisopherJones} alt={chrisopherJones} />
                <h5>christopher jones</h5>
                <h6>Advisor</h6>
                <p>
                  Behavioral and health economist who developed the
                  award-winning AI driven adherence tool trUStr and Chief
                  Ventures Investment Officer for a top-tier U.S. healthcare
                  system. Member of the National Venture Capital Association and
                  Co-founder of the Oxford Intl. Cyber Security Summit.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_card_mobile">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="team_card">
                <img src={anasMartirosian} alt={anasMartirosian} />
                <h5>anas martirosian</h5>
                <h6>
                  Founder, Chief <br /> Executive Officer
                </h6>
                <p>
                  Founder of multiple successful startups in tech, media, and
                  wellness. Established international business executive with
                  seasoned experience in forging strategic commercial
                  partnerships and go-to-market strategy design.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_card_mobile">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_card">
                <img src={xavierVilar} alt={xavierVilar} />
                <h5>xavier vilar</h5>
                <h6>
                  Chief Strategy <br /> Officer
                </h6>
                <p>
                  Entrepreneur with extensive international business
                  development, investment, and strategy expertise in blue chip
                  financial institutions, alternative investment management
                  firms, and as Co-Founding Partner of a technology focused
                  advisory boutique in London (UK).
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_card">
                <div className="dmitryKurlo_text">
                  <img src={dmitryKurlo} alt={dmitryKurlo} />
                  <img src={dmitryKurloText} alt="" />
                </div>
                <h6>
                  Chief Technology <br />
                  Officer
                </h6>
                <p>
                  Entrepreneur and software engineer behind multiple mobile apps
                  rolled out globally. Most notably the creator of the
                  technology behind the Spark AR platform within Meta (formerly
                  Facebook). Recently engineered Spark AR Polar and Spark AR
                  Studio.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_card_mobile">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_card">
                <img src={paulSajulla} alt={paulSajulla} />
                <h5>paul sajulla</h5>
                <h6>UI/UX Designer</h6>
                <p>
                  Designed various website UIs and developed branding for
                  multiple retail, technology, crypto, and B2B companies and
                  projects in the UK, USA, and Australia.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="team_card">
                <img src={tomPutter} alt={tomPutter} />
                <h5>tom potter</h5>
                <h6>Advisor</h6>
                <p>
                  Distinguished career in motorsport marketing including F1 at
                  McLaren and Williams and a pioneer of the modern era of
                  corporate F1 sponsorships. Founder and CEO of Rush Sport &
                  Entertainment (one of the world's leading sponsorship and
                  sports marketing agencies). Rush helped identify, structure,
                  negotiate, and close sponsorship investments worth over $1.5
                  billion for global companies/brands such as Saudi Aramco (the
                  biggest sponsorship deal in F1 history).
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center team_card_mobile">
            <div className="col-lg-4 col-md-46 col-sm-6">
              <div className="team_card">
                <img src={rohanTyagi} alt={rohanTyagi} />
                <h5>rohan tyagi</h5>
                <h6>Advisor</h6>
                <p>
                  Career in senior management in the social media industry
                  including Head of Marketing, TikTok (India) and Triller
                  (India) driving marketing, digital products, user experience,
                  content, business development, and sales strategy.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-46 col-sm-6">
              <div className="team_card">
                <img src={chrisopherJones} alt={chrisopherJones} />
                <h5>christopher jones</h5>
                <h6>Advisor</h6>
                <p>
                  Behavioral and health economist who developed the
                  award-winning AI driven adherence tool trUStr and Chief
                  Ventures Investment Officer for a top-tier U.S. healthcare
                  system. Member of the National Venture Capital Association and
                  Co-founder of the Oxford Intl. Cyber Security Summit.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="team_card_mobile">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={3}
                  loop={true}
                  autoHeight={true}
                  speed={700}
                  pagination={{
                    clickable: true,
                  }}
                  // autoplay={{
                  //   delay: 3000,
                  // }}
                  centeredSlides={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    576: {
                      slidesPerView: 2.2,
                      spaceBetween: 20,
                    },
                  }}
                  navigation={true}
                  modules={[Navigation]}
                >
                  <SwiperSlide>
                    <div className="team_card">
                      <img src={anasMartirosian} alt={anasMartirosian} />
                      <h5>anas martirosian</h5>
                      <h6>
                        Founder, Chief <br /> Executive Officer
                      </h6>
                      <p>
                        International business leader, 10+ years, specialising
                        in market strategies and partnerships, and founder of
                        multiple startups.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team_card">
                      <img src={xavierVilar} alt={xavierVilar} />
                      <h5>xavier vilar</h5>
                      <h6>
                        Chief Strategy <br /> Officer
                      </h6>
                      <p>
                        Global business expert and investor, co-founder of a
                        London-based tech advisory, with experience in elite
                        financial institutions.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team_card">
                      <img src={dmitryKurlo} alt={dmitryKurlo} />
                      <h5>dmitry kurilo</h5>
                      <h6>
                        Chief Technology <br />
                        Officer
                      </h6>
                      <p>
                        Tech entrepreneur and software engineer, created Spark
                        AR for Meta and apps like Spark AR Polar & Studio for AR
                        filter creation.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team_card">
                      <img src={paulSajulla} alt={paulSajulla} />
                      <h5>paul sajulla</h5>
                      <h6>UI/UX Designer</h6>
                      <p>
                        Versatile designer with 5+ years of experience creating
                        UI/UX and branding design for retail and tech firms in
                        the Philippines, UK, USA, Australia.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team_card">
                      <img src={tomPutter} alt={tomPutter} />
                      <h5>tom potter</h5>
                      <h6>Advisor</h6>
                      <p>
                        From McLaren F1 marketing to founding Rush Sport, a
                        leader in $1.5B sponsorships like Saudi Aramco.
                        Currently, a Board Advisor at Animoca.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team_card">
                      <img src={rohanTyagi} alt={rohanTyagi} />
                      <h5>rohan tyagi</h5>
                      <h6>Advisor</h6>
                      <p>
                        Vice President at Triller, leading marketing and
                        business growth in India with expertise in digital
                        products and user experience.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="team_card">
                      <img src={chrisopherJones} alt={chrisopherJones} />
                      <h5>christopher jones</h5>
                      <h6>Advisor</h6>
                      <p>
                        Chief Ventures Officer in U.S. healthcare, developed
                        'trUStr'. Active in NVCA and co-founded the Oxford Intl.
                        Cyber Security Summit.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div> */}
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="development_team">
                <h1>Development Team</h1>
                <p>
                  Our development team based in UK, US, and Europe is comprised
                  of:
                </p>
                <div className="development_category">
                  <ul>
                    <li>iOS/Android Developers</li>
                    <li>DevOps Engineers</li>
                    <li>UI/UX Designers</li>
                  </ul>
                  <ul>
                    <li>Blockchain Developers</li>
                    <li>Full Stack Developers</li>
                    <li>Project Manager</li>
                  </ul>
                  <ul>
                    <li>Testers</li>
                    <li>Web Developers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="frequently_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content_top">
                <h1>Frequently Asked Questions</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-controls="collapseOne"
                      onClick={() => handleToggleCollapse("collapseOne")}
                    >
                      What if Instagram or Tiktok include some of the features?
                      How will that affect BOOST!
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseOne" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        While it may seem that these and other platforms like
                        them are our competitors, the inclusion of BOOST!’s
                        features on Instagram and TikTok could actually drive
                        more traffic to BOOST! in the long run. This is because
                        it will expose more people to the benefits of Web 3.0
                        and open ecosystems, leading to new opportunities for
                        creators, fans and brands on BOOST!.
                      </p>
                      <p>
                        Additionally, BOOST! offers users more control and
                        ownership over their content compared to centralized
                        platforms like Instagram and TikTok, which operate
                        within the limitations of Web 2.0.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-controls="collapseTwo"
                      onClick={() => handleToggleCollapse("collapseTwo")}
                    >
                      I have a large following on Instagram and Tiktok. Do I
                      have to change platforms?
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseTwo" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        No, BOOST! lets you serve your audience wherever they
                        are. Our platform will be connected to all the popular
                        social platforms via their API so you can create
                        content, get rewarded on BOOST! and still post
                        automatically to other social platforms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-controls="collapseThree"
                      onClick={() => handleToggleCollapse("collapseThree")}
                    >
                      Will there be a BOOST! token?
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseThree" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, a BOOST! utility token will allow users to access
                        exclusive content, take part in competitions, and get
                        rewarded for engagement and contribution on the
                        platform.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-controls="collapseFour"
                      onClick={() => handleToggleCollapse("collapseFour")}
                    >
                      Who is the target audience for BOOST!
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseFour" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The initial target audience for BOOST! is the gaming
                        industry, but our coverage extends to and will grow in
                        other industries, such as entertainment, sports, and
                        fashion.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-controls="collapseFive"
                      onClick={() => handleToggleCollapse("collapseFive")}
                    >
                      What are some key features of BOOST!
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseFive" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        UGC Gamified Competitions, an NFT marketplace, social
                        feed, one-click sharing and minting, rewards, exclusive
                        content and multiple ways for users to monetize/be
                        rewarded for their engagement and content they create.
                      </p>
                      <p>
                        Our road map outlines other key features that will be
                        rolled out as the platform evolves.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-controls="collapseSix"
                      onClick={() => handleToggleCollapse("collapseSix")}
                    >
                      What sets BOOST! apart from its peers in the market?
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseSix" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        BOOST! offers a variety, depth, and flexibility of
                        features for creators that are not currently available
                        from any peers focusing on this space.
                      </p>
                      <p>
                        We have not revealed all of our secrets and have some
                        exciting things coming!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-controls="collapseSeven"
                      onClick={() => handleToggleCollapse("collapseSeven")}
                    >
                      Who are the potential collaboration and API integration
                      partners for BOOST!
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseSeven" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Xbox, Playstation, Instagram, X, and Tiktok are
                        potential collaboration and API integration partners for
                        BOOST!.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-controls="collapseEight"
                      onClick={() => handleToggleCollapse("collapseEight")}
                    >
                      What is the goal of BOOST!’s strategic partnerships?
                    </button>
                    <div
                      className={`accordion_bg_button ${
                        activeAccordion === "collapseEight" && isCollapsed
                          ? "collapsed"
                          : ""
                      }`}
                    ></div>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The goal of BOOST!’s strategic partnerships is to link
                        with the platform and mutually benefit from the open
                        ecosystem of Web 3.0 while also leveraging opportunities
                        in the Web 2.0 space. In addition to the publicly listed
                        strategic partners, we will be announcing other
                        strategic partners across the gaming, fashion, sport,
                        and entertainment industries in the near future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
      <footer className="footer_section">
        <div className="footer_bg">
          <img src={footerBg} alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10 col-sm-10 col-12">
              <div className="miss_out_box">
                <h1>Launching Soon</h1>
                {/* <p>Buy $BOOST now!</p>
                <button className="watlist_btn">buy $boost</button> */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Home;
