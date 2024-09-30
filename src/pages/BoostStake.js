import React, { useState } from "react";
import Navbar from "../components/Navbar";
import textureBg from "../resources/images/boost-buy/Hero_bg_Texture.png";
import boostToken from "../resources/images/boost-buy/Boost_Token.svg";
import metaMask from "../resources/images/boost-buy/metamask.svg";
import footerBg from "../resources/images/boost-buy/Footer_Bg_Boost_Buy.svg";
import "../styles/BoostStake.css";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BoostStake = () => {
  const [blurEffect, setBlurEffect] = useState(true);
  const [walletPVisible, setWalletPVisible] = useState(true);

  const removeBlurAndHide = () => {
    setBlurEffect(!blurEffect);
    setWalletPVisible(!walletPVisible);
  };
  return (
    <>
      <div className="boost_stake">
        <section className="boost_stake_section">
          <div className="purple_circle"></div>
          <div className="green_circle"></div>
          <div className="blue_circle"></div>
          <div className="texture_bg">
            <img src={textureBg} alt="textureBg" />
          </div>
          <Navbar />
          <div className="strike_boost_section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="strike_card">
                    <h1>STAKE $BOOST</h1>
                    <p>
                      Activate $BOOST staking after the launch to earn rewards.
                      The rewards you receive depend on the size of your stake
                      in the $BOOST pool.
                    </p>
                    <h6>coming after $boost launch</h6>
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <h4>MONTHS:</h4>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          3 months
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          6 months
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          12 months
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wallet_information_main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="wallet_information_card">
                  <div
                    className={`wallet_information ${blurEffect ? "" : "blur"}`}
                  >
                    <div className="wallet_information_top">
                      <div className="wallet_content">
                        <h6>YOUR BALANCE:</h6>
                        <p>0 $BOOST</p>
                      </div>
                      <div className="wallet_content">
                        <h6>TOTAL STAKED:</h6>
                        <p>0 $BOOST</p>
                      </div>
                      <div className="wallet_content">
                        <h6>APY:</h6>
                        <p>TBC%</p>
                      </div>
                      <div className="wallet_content">
                        <h6>YOUR STAKED AMOUNT:</h6>
                        <p>0 $BOOST</p>
                      </div>
                      <div className="wallet_content">
                        <h6>YOUR TOTAL REWARDS:</h6>
                        <p>0 $BOOST</p>
                      </div>
                    </div>
                    <div className="wallet_information_bottom">
                      <button className="reward_btn">ADD TO STAKE</button>
                      <button className="reward_btn">CLAIM REWARDS</button>
                      <button className="reward_btn">WITHDRAW TOKENS</button>
                    </div>
                  </div>
                  {walletPVisible && (
                    <div className="wallet_p">
                      <p>Connect wallet to access your information.</p>
                    </div>
                  )}
                </div>
                <button className="meta" onClick={removeBlurAndHide}>
                  <img src={metaMask} alt="metaMask" />
                  Metamask
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="boost_token">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1>$BOOST Token</h1>
              </div>
              <div className="col-lg-5">
                <div className="boost_token_left">
                  <p>
                    The BOOST token, $BOOST, serves as the core currency in the
                    BOOSTverse. Accumulate $BOOST by undertaking missions and
                    securing exclusive rewards within the game. Utilize your
                    $BOOST for acquiring unique items in the BOOSTverse
                    marketplace, aiding your quest and empire expansion.
                  </p>
                  <p>
                    The BOOST team is diligently forging partnerships with
                    prominent centralized and decentralized exchanges for the
                    $BOOST token listing. Seize the presale opportunity to
                    gather as many tokens as possible. As the BOOSTverse grows,
                    the liquidity and utility of $BOOST tokens are set to rise,
                    enhancing their value. Join the leading GameFi and
                    play-to-earn network today.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 order-lg-0 order-first">
                <div className="boost_token_right">
                  <h1>$BOOST Token</h1>
                  <img src={boostToken} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="token_momics">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
              <h2>tokenomics</h2>
                <div className="token_momics_card">
                  <h2>tokenomics</h2>
                  <div className="token_table">
                    <div className="token_table_head">
                      <h5>Token Holders</h5>
                      <h6>Distribution</h6>
                      <h6>Tokens</h6>
                    </div>
                    <div className="token_table_body">
                      <div className="token_table_data">
                        <h5>Ecosystem</h5>
                        <h6>30%</h6>
                        <h6>900,000,000</h6>
                      </div>
                      <div className="token_table_data">
                        <h5>Team & Advisors</h5>
                        <h6>25%</h6>
                        <h6>750,000,000</h6>
                      </div>
                      <div className="token_table_data">
                        <h5>Public Sale</h5>
                        <h6>20%</h6>
                        <h6>600,000,000</h6>
                      </div>
                      <div className="token_table_data">
                        <h5>Marketing</h5>
                        <h6>15%</h6>
                        <h6>450,000,000</h6>
                      </div>
                      <div className="token_table_data">
                        <h5>Treasury</h5>
                        <h6>10%</h6>
                        <h6>300,000,000</h6>
                      </div>
                    </div>
                  </div>
                  <button>buy $boost</button>
                </div>
                <div className="token_momics_card_mobile">
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
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                  >
                    <SwiperSlide>
                      <div className="token_table">
                        <div className="token_table_head">
                          <h5>Token Holders</h5>
                        </div>
                        <div className="token_table_body">
                          <div className="token_table_data">
                            <h6>Distribution</h6>
                            <h6>30%</h6>
                          </div>
                          <div className="token_table_data">
                            <h6>Tokens</h6>
                            <h6>900,000,000</h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="token_table">
                        <div className="token_table_head">
                          <h5>Token Holders</h5>
                        </div>
                        <div className="token_table_body">
                          <div className="token_table_data">
                            <h6>Distribution</h6>
                            <h6>30%</h6>
                          </div>
                          <div className="token_table_data">
                            <h6>Tokens</h6>
                            <h6>900,000,000</h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer_section">
          <div className="footer_boost_buy">
            <img src={footerBg} alt="" />
          </div>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
};

export default BoostStake;
