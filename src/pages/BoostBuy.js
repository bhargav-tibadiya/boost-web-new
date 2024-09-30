import React from "react";
import textureBg from "../resources/images/boost-buy/Hero_bg_Texture.png";
import preSaleMobile from "../resources/images/boost-buy/Pre_Sale_Mobile.png";
import Coin from "../resources/images/boost-buy/Coin.svg";
import CoinArrow from "../resources/images/boost-buy/Coin_Arrow.svg";
import CoinArrowMobile from "../resources/images/boost-buy/Coin_Arrow_Mobile.svg";
import "../styles/BoostBuy.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import footerBg from "../resources/images/boost-buy/Footer_Bg_Boost_Buy.svg";
import ConnectWallet from "../components/ConnectWallet";

const BoostBuy = () => {
  // const detectProvider = async () => {
  //   let provider = new ethers.providers.JsonRpcProvider(window.ethereum);

  //   if (!provider) {
  //     alert("Please install & setup Metamask wallet.");
  //     return false;
  //   }
  //   return true;
  // };

  // useEffect(() => {
  //   detectProvider();
  // });
  return (
    <>
      <div className="boost_buy">
        <section className="boost_buy_section">
          <div className="purple_circle"></div>
          <div className="green_circle"></div>
          <div className="blue_circle"></div>
          <div className="texture_bg">
            <img src={textureBg} alt="textureBg" />
          </div>
          <Navbar />
          <div className="pre_sale_section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="pre_sale_left">
                    <h1>pre-sale</h1>
                    <img src={preSaleMobile} alt="preSaleMobile" />
                    {/* <h6>
                    600,000,000 $BOOST <br /> AVAILABLE
                  </h6> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 order-md-0 order-first">
                  <div className="pre_sale_right">
                    <h1>pre-sale</h1>
                    <div className="launch_price">
                      <div className="launch_price_inner_box">
                        <h5>Launch Price</h5>
                        <div className="boost_box">
                          <div className="boost_price_box">
                            <p>1 $BOOST = $0.0007 USD</p>
                          </div>
                          <div className="text">
                            <h6>QUALIFICATIONS</h6>
                            <p>N/A</p>
                          </div>
                          <div className="text">
                            <h6>QUALIFICATIONS</h6>
                            <p>N/A</p>
                          </div>
                          <div className="text">
                            <h6>QUALIFICATIONS</h6>
                            <p>N/A</p>
                          </div>
                          <div className="text">
                            <h6>QUALIFICATIONS</h6>
                            <p>N/A</p>
                          </div>
                        </div>
                        <h6>Connect wallet to access your information.</h6>
                        <ConnectWallet />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how_to_buy">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="how_to_buy_card">
                  <h1>how to buy</h1>
                  <div className="how_to_buy_card_main">
                    <div className="Coin">
                      <img src={Coin} alt="Coin" />
                    </div>
                    <div className="coin_arrow">
                      <img
                        src={CoinArrowMobile}
                        alt="CoinArrowMobile"
                        className="coin_arrow_mobile"
                      />
                      <img
                        src={CoinArrow}
                        alt="CoinArrow"
                        className="coin_arrow_desktop"
                      />
                    </div>
                    <div className="how_to_buy_card_left">
                      <h6>STEP ONE</h6>
                      <p>
                        Ensure you possess a Web3 compatible wallet like
                        Metamask linked to your browser, or opt for any wallet
                        compatible with Wallet Connect. For a seamless presale
                        participation, we recommend using a desktop browser
                        coupled with Metamask. Install Metamask in your browser
                        by clicking here. On mobile devices, Trust Wallet is
                        advised for an optimal user experience.
                      </p>
                    </div>
                    <div className="how_to_buy_card_right">
                      <h6>STEP TWO</h6>
                      <p>
                        Hit “Connect Wallet” and pick your preferred token to
                        buy $BOOST.
                      </p>
                      <p>
                        Buy BOOST using BNB, USDC, WETH or WBTC: Ensure your
                        compatible wallet has enough tokens. Swap your chosen
                        tokens for BOOST tokens. Enter the desired $BOOST amount
                        and press “Buy Now”. Your wallet provider will showcase
                        the transaction for confirmation. After paying the small
                        gas fee, the transaction completes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="boost_button">buy $boost</div>
                <div className="how_to_buy_content">
                  <p>
                    Important Advisory: Please be informed that our services do
                    not include providing investment advice or recommendations.
                    Investing should be approached with the understanding that
                    you might lose the entirety of the funds invested. This type
                    of investment carries significant risks, and you should
                    proceed without expecting any form of protection in case of
                    financial loss.
                  </p>
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

export default BoostBuy;
