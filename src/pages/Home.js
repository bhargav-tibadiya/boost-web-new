import React, { useEffect, useState } from "react";
import homeBg from "../resources/images/home_page_bg.png";
import homeBgMobile from "../resources/images/home_texture_bg.png";

import Slider1 from "../resources/images/polygon_slider.png";
import Slider2 from "../resources/images/rush_slider.png";
import Slider4 from "../resources/images/safeforge.png";
import Slider5 from "../resources/images/ostando_slider.png";
import anasMartirosian from "../resources/images/Anas_Martirosian.png";
import xavierVilar from "../resources/images/Xavier_Vilar.png";
import dmitryKurlo from "../resources/images/Dmitry_Kurlo.png";
import dmitryKurloText from "../resources/images/dmitry_kurilo_text.png";
import paulSajulla from "../resources/images/Paul_Sajulla.png";
import tomPutter from "../resources/images/Tom_Putter.png";
import rohanTyagi from "../resources/images/Rohan_Tyagi.png";
import chrisopherJones from "../resources/images/Chrisopher_jones.png";
import footerBg from "../resources/images/Footer_Bg.png";
import "../styles/Home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../components/Navbar";

import BoostBig from "../resources/images/boost_big.png";
import BuyBoostNow from "../resources/images/buy_boost_now.png";
import BoostLaunchpad from "../resources/images/boost_launchpad.png";
import SafeForgeBG from "../resources/images/safeforge_bg.png";
import HyperionBG from "../resources/images/hyperion_bg.png";
import RFBG from "../resources/images/rf_bg.png";
import WebIcon from "../resources/images/web_icon.png";
import XIcon from "../resources/images/x_icon.png";
import FBIcon from "../resources/images/facebook_icon.png";
import BoostSocialApp from "../resources/images/boost_social_app.png";
import BoostSocialIll from "../resources/images/boost_social_ill.png";
import Ecosystem from "../resources/images/ecosystem.png";
import AppStore from '../resources/images/app_store.png'
import PlayStore from '../resources/images/play_store.png'
import TelegramIcon from '../resources/images/telegram_icon.png'
import logoImage from '../resources/images/logo.png'

import XIconW from '../resources/images/x-white.png'
import TelegramIconW from '../resources/images/tele-white.png'

import { BNBLogo, CARDLogo, USDTLogo, LogoFull } from "../resources/svg/Global"
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";



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

const launchpadData = [
  {
    name: 'Safeforge',
    desc: "Safeforge is building the ultimate passive vehicle, wrapping the best trading strategies into a single portfolio. This is done by a reputation-driven system creating a decentralised hedge fund, allocating funds to the best signals.<br /><br />The team brings together the best from Academia (PhD), Institutional (Ex-Blackrock Global product manager), and Crypto (Ex-regional CEO of Huobi).",
    raise: '$5,000,000',
    price: 'TBA',
    date: 'TBA',
    pic: SafeForgeBG,
    cat1: 'Trading',
    cat2: 'Crypto',
    cat3: 'Defi',
    isLive: true,
    path: '/launchpad/project/safeforge'
  },
  {
    name: 'Hyperion',
    desc: 'Hyperion Cars is a dynamic investment platform offering fractional ownership in high-growth assets and iconic motor vehicles.',
    raise: 'TBA',
    price: 'TBA',
    date: 'TBA',
    pic: HyperionBG,
    cat1: 'Physical',
    cat2: 'NFT',
    cat3: 'Marketplace',
    isLive: false,
    path: '/launchpad/project/safeforge'

  },
  {
    name: 'RF',
    desc: 'RF’s iconic pieces  are now entering the metaverse as they enter the digital age on a new journey into Web3 and redefine the realm of luxury eyewear.',
    raise: 'TBA',
    price: 'TBA',
    date: 'TBA',
    pic: RFBG,
    cat1: 'Physical',
    cat2: 'NFT',
    cat3: 'Marketplace',
    isLive: false,
    path: '/launchpad/project/safeforge'
  },
]

const faqData = [
  {
    que: "How to buy BOOST token?",
    ans: <>Scroll to the top of the page or click on the “BUY BOOST” button to proceed. Choose your payment method crypto / card and then click buy.</>
  },
  {
    que: "How to assign your primary wallet on BOOST?",
    ans: <>Follow the registration process for the IDO project that you are interested in. Make sure to have staked 75,000 $BOOST tokens if you would like to take part in the early pool.</>
  },
  {
    que: "How to join Early and Open Pool on BOOST?",
    ans:
      <>
        <ol>
          <li>Buy 75,000 $BOOST tokens</li>
          <li>Go to staking page and connect wallet and confirm staking by signing transaction</li>
          <li>Register on IDO that you are interested in</li>
        </ol>
      </>
  },
  {
    que: "How to stake $BOOST?",
    ans:
      <>
        <ol>
          <li>Buy $BOOST from the top of the main page or click “BUY BOOST" anywhere on the page.</li>
          <li>Go to staking page, connect wallet and confirm transaction for 75,000 $BOOST</li>
        </ol>
      </>
  },
  {
    que: "Why should I stake $BOOST?",
    ans:
      <>
        Boost is a leading Web3 incubator and Launchpad for Web3 projects focusing on innovative technologies such as DeFi, AI, Big Data, NFTs and Web3 Gaming. By staking $BOOST, you gain the advantage of early access to purchase project tokens, enhancing your position within the Web3 landscape.
      </>
  },
  {
    que: "Why should I stake $BOOST?",
    ans:
      <>
        Currently, we do NOT allow the following nationalities to participate in any BOOST IDO:
        <ul className="list-none space-y-2">
          <li>- Belarus</li>
          <li>- Burma</li>
          <li>- Côte D'Ivoire (Ivory Coast)</li>
          <li>- Cuba</li>
          <li>- Democratic Republic of Congo</li>
          <li>- Iran</li>
          <li>- Iraq</li>
          <li>- Liberia</li>
          <li>- North Korea</li>
          <li>- Sudan</li>
          <li>- Syria</li>
          <li>- Venezuela</li>
          <li>- United States</li>
          <li>- Zimbabwe</li>
          <li>- Crimea, Luhansk, and Donetsk (Ukraine)</li>
        </ul>
      </>
  },
]

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [activeButton, setActiveButton] = useState("bnb");
  const [expandedStates, setExpandedStates] = useState(
    new Array(teamData.length).fill(false)
  );
  const [activeAccordion, setActiveAccordion] = useState(null);
  const targetDate = new Date("2024-12-31T23:59:59");
  const navigate = useNavigate();

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

  const [selectedMethod, setSelectedMethod] = useState("BNB")

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [usd, setUsd] = useState(0);
  const [safe, setSafe] = useState(0);
  const [isBuyTokenActive, setIsBuyTokenActive] = useState(false);

  const handleUsdChange = (e) => {
    const usdValue = e.target.value;
    setUsd(usdValue);
    setSafe(usdValue / 0.05); // Convert USD to SAFE
  };

  const handleSafeChange = (e) => {
    const safeValue = e.target.value;
    setSafe(safeValue);
    setUsd(safeValue * 0.05); // Convert SAFE to USD
  };

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

  const handleToggleCollapse = (accordionId) => {
    setIsCollapsed(!isCollapsed);
    setActiveAccordion(accordionId);
  };

  return (
    <div className="overfolow-hidden box-border bg-[#002452] px-[120px] sm:px-[20px] sm:max-w-[100vw] relative z-100">
      <div className="texture_bg absolute z-[0] overflow-visible top-0 left-0">
        <img src={homeBg} alt="homeBg" />
      </div>
      <div className="w-full relative z-[500]">
        {/* Navbar  */}
        <div className="max-w-[100vw] relative z-[5000] text-[#ffffff] max-h-full flex flex-row items-center justify-between py-[32px] sm:py-[8px] sm:mb-[5px]">

          {/* Navbar Menus */}
          <div className="flex flex-row items-center justify-center gap-[24px] sm:gap-[8px]">
            <div className="cursor-pointer max-h-[48px]"><img className="max-w-[40px] max-h-[48px] sm:max-w-[30px] sm:max-h-[36px]" onClick={() => navigate('/')} src={logoImage} alt="" /></div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/')}>HOME</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/stake')}>STAKE</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/faq')}>FAQ</div>
          </div>

          {/* Connect Wallat Button */}
          <div className="flex items-center justify-center h-full sm:text-[14px] cursor-pointer font-[700]">
            <div className="flex items-center justify-center h-full gap-[12px]">
              <a href="#" className="flex items-center justify-center h-[32px] w-[32px] rounded-[50px] bg-[#239FDB] shadow-[#198DC4] border-[1px] border-[#198DC4] shadow-[2.4px_1.6px_0_0]">
                <img className="w-[18px] h-[18px]" src={TelegramIconW} alt="" />
              </a>
              <a href="#" className="flex items-center justify-center h-[32px] w-[32px] rounded-[50px] bg-[#2B2B2B] shadow-[#222222] border-[1px] border-[#222222] shadow-[2.4px_1.6px_0_0]">
                <img className="w-[18px] h-[18px]" src={XIconW} alt="" />
              </a>

              <div className={`sm:flex hidden size-[32px] text-[18px] bg-[#000000] rounded-[25px] items-center justify-center`} onClick={() => { setIsMenuActive(prev => !prev) }}>
                {isMenuActive ? <IoCloseSharp /> : <RxHamburgerMenu />}
              </div>
            </div>
          </div>

        </div>

        <div className={`absolute z-[500] ${isMenuActive ? 'flex' : 'hidden'} top-0 left-[-20px] w-[100vw] bg-[#002452] h-[450px]`} >
          <div className="flex flex-col w-full items-center justify-center gap-[24px] sm:gap-[8px]">
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/')}>HOME</div>
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/stake')}>STAKE</div>
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/faq')}>FAQ</div>
          </div>
        </div>

      </div>


      <section className="home_section relative z-[50]">
        <div className="flex sm:flex-col items-start justify-center w-full h-full gap-[60px] py-[70px] sm:py-[14px]">

          {/* Left   */}
          <div className="flex flex-col h-full max-w-[500px] sm:max-w-[375px] items-start sm:box-border justify-start sm:items-center sm:justify-center sm:px-[15px]">
            <div className="pt-[75px] sm:pt-[15px] flex flex-col items-start justify-start">
              <img className="scale-85 sm:scale-75" src={BoostBig} alt="" />
            </div>
            <div className="text-[32px] leading-[40px] sm:text-[20px] sm:text-center sm:leading-[22px] font-[700] text-[#ffffff] mt-[24px] sm:mt-[6px]">
              BOOST is a WEB3 Launchpad enhanced by a social platform.
            </div>
            <div className="px-[24px] sm:text-[14px] py-[16px] sm:px-[12px] sm:py-[8px] sm:max-w-[375px] text-[#ffffff] border-[1px] rounded-[50px] bg-[#ffffff1f] mt-[56px] sm:mt-[24px]">
              Contract Address:
              0x18a8bd1fe17a1bb9ffb39ecd83e9489cfd17a022
            </div>
          </div>

          {/* Right   */}
          <div className="flex flex-row justify-between sm:items-center sm:justify-center sm:w-full">

            <div className="px-[20px] py-[20px] sm:px-[10px] sm:py-[10px] max-w-[550px] sm:max-w-[350px] min-w-[420px] sm:min-w-[300px] bg-custom-radial bg-custom-linear rounded-[64px] sm:rounded-[32px] bg-blend-overlay relative border-[2.73px] border-solid before:absolute before:inset-0 before:bg-transparent before:border-[2.73px] before:border-transparent before:rounded-[inherit] before:bg-radial-gradient before:from-white/30 before:to-transparent before:opacity-50 before:z-[-1]">
              <div className="flex flex-col items-center justify-center py-[48px] px-[32px] sm:py-[24px] sm:px-[16px] rounded-[48px] sm:rounded-[22px] bg-[#ffffff]">

                <img src={BuyBoostNow} className="scale-110 sm:scale-75" alt="" />

                {/* time */}
                <div className="flex flex-row gap-[4px] w-full mt-[16px] items-center justify-center">
                  <div className="flex flex-col px-[16px] py-[8px] border-[1px] border-[#CACCDE] rounded-[8px] text-center">
                    <div className="text-[24px] sm:text-[18px] leading-[28px] sm:leading-[20px] font-[700]">07</div>
                    <div className="text-[#6A717D] text-[10px] leading-[12px] font-[700]">Days</div>
                  </div>
                  <div className="flex flex-col">:</div>
                  <div className="flex flex-col px-[16px] py-[8px] border-[1px] border-[#CACCDE] rounded-[8px] text-center">
                    <div className="text-[24px] sm:text-[18px] leading-[28px] sm:leading-[20px] font-[700]">07</div>
                    <div className="text-[#6A717D] text-[10px] leading-[12px] font-[700]">Days</div>
                  </div>
                  <div className="flex flex-col">:</div>
                  <div className="flex flex-col px-[16px] py-[8px] border-[1px] border-[#CACCDE] rounded-[8px] text-center">
                    <div className="text-[24px] sm:text-[18px] leading-[28px] sm:leading-[20px] font-[700]">07</div>
                    <div className="text-[#6A717D] text-[10px] leading-[12px] font-[700]">Days</div>
                  </div>
                  <div className="flex flex-col">:</div>
                  <div className="flex flex-col px-[16px] py-[8px] border-[1px] border-[#CACCDE] rounded-[8px] text-center">
                    <div className="text-[24px] sm:text-[18px] leading-[28px] sm:leading-[20px] font-[700]">07</div>
                    <div className="text-[#6A717D] text-[10px] leading-[12px] font-[700]">Days</div>
                  </div>
                </div>

                <div className="w-full text-[16px] leading-[24px] text-center font-[700] mt-[8px]">UNTIL PRE-SALE ENDS!</div>

                <span className="text-[14px] leading-[20px] font-[500] text-[#6A717D] pt-[16px] pb-[8px]">Choose your currency</span>

                <div onClick={() => setSelectedMethod("BNB")} className={`flex flex-row ${selectedMethod == "BNB" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#EEA61B] min-w-[200px] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#DB950E] rounded-[100px] shadow-[#DB950E] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px]"><BNBLogo /></div>
                  <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">BNB</div>
                </div>
                <div onClick={() => setSelectedMethod("USDT")} className={`flex flex-row ${selectedMethod == "USDT" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#30B68C] min-w-[200px] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#26A17B] rounded-[100px] shadow-[#26A17B] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px] relative after:absolute after:w-[12px] after:h-[12px] after:top-[0px] after:right-[-5px] z-10 after:bg-[url('./resources/images/ether.svg')]"><USDTLogo /></div>
                  <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">USDT(ERC20)</div>
                </div>
                <div onClick={() => setSelectedMethod("$")} className={`flex flex-row ${selectedMethod == "$" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#4C69DA] min-w-[200px] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#3658DA] rounded-[100px] shadow-[#3658DA] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px]"><CARDLogo /></div>
                  <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">CARD</div>
                </div>

                <span className="text-[16px] leading-[24px] font-[700] py-[8px] mt-[12px]">1 $BOOST= $0.05 USD</span>

                <div className="flex flex-row items-center gap-[16px] sm:gap-[8px] p-[16px] sm:p-[8px] w-full">
                  <div className="flex flex-col items-center w-[50%]">
                    <label className="text-lg sm:text-[12px] leading-[16px] font-semibold mb-1">USD you pay</label>
                    <input
                      type="number"
                      value={usd}
                      onChange={handleUsdChange}
                      className="w-full p-2 rounded-md bg-gray-100 text-center text-xl"
                    />
                  </div>
                  <div className="flex flex-col items-center w-[50%]">
                    <label className="text-lg sm:text-[12px] leading-[16px] font-semibold mb-1">$BOOST you receive</label>
                    <input
                      type="number"
                      value={safe}
                      onChange={handleSafeChange}
                      className="w-full p-2 rounded-md bg-gray-100 text-center text-xl"
                    />
                  </div>
                </div>

                <div onClick={() => setIsBuyTokenActive(true)} className="text-[16px] sm:text-[14px] min-w-[175px] w-[75%] sm:w-fit sm:mt-[8px] text-center h-fit cursor-pointer leading-[20px] font-[700] px-[40px] py-[12px] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
                  BUY $BOOST TOKEN
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="mt-[128px] sm:mt-[48px] w-full flex flex-col items-center justify-center">

          <div className="font-[Thunder] text-[50px] sm:text-[32px] leading-[52px] sm:leading-[40px] font-[600] text-[#ffffff]">Our Strategic Partners</div>
          <div className="flex flex-row sm:!flex-col mt-[24px] bg-[#222222] gap-[5px] rounded-[15px] px-[15px] shadow-[#000000] shadow-[10px_8px_0_0]">
            <img src={Slider1} alt="Slider1" />
            <img src={Slider2} alt="Slider2" />
            <img src={Slider4} alt="Slider4" />
            <img src={Slider5} alt="Slider5" />
          </div>

        </div>

        <div className="mt-[154px] sm:mt-[48px] mb-[200px] sm:mb-[48px] flex items-center justify-center w-full ">

          <div className="px-[20px] max-w-[800px] p-[16px] sm:p-[10px] min-w-[420px] sm:min-w-[325px] sm:max-w-[95%] bg-custom-radial bg-custom-linear rounded-[64px] bg-blend-overlay relative border-[2.73px] border-[#ffffff49] border-solid before:absolute before:inset-0 before:bg-transparent before:border-[2.73px] before:border-transparent before:rounded-[inherit] before:bg-radial-gradient before:from-white/30 before:to-transparent before:opacity-50 before:z-[-1] bg-[radial-gradient(155.61%_569.43%_at_-6.84%_100%,_rgba(172,255,183,0.2)_0%,_rgba(11,202,255,0.2)_75.45%,_rgba(31,147,255,0.2)_100%)]">
            <div className="flex flex-col items-center justify-center py-[56px] px-[56px] sm:py-[24px] sm:px-[16px] rounded-[48px] border-[2.73px] border-[#ffffff49] border-solid text-[#ffffff] bg-[radial-gradient(155.61%_569.43%_at_-6.84%_100%,_rgba(172,255,183,0.2)_0%,_rgba(11,202,255,0.2)_75.45%,_rgba(31,147,255,0.2)_100%)]">
              BOOST makes Web3 project launches accessible to everyone through its innovative launchpad. Whether you are staking the BOOST token for early access or jumping into an open pool without any commitments, the platform ensures no outrageous entry fees or gatekeeping. If you want to participate in the next big thing in Web3, BOOST ensures you can, regardless of your wallet size.
              <br />
              <br />
              With a focus on inclusivity, BOOST connects new projects directly to our upcoming Web3 social app, helping them thrive by growing genuine community connections. Leveraging AI, BOOST matches projects with the relevant audiences while creators act as ambassadors converting curious users into loyal fans ensuring that every project has the chance to succeed.
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-between">
          <div className="sm:scale-[75%]">
            <img src={BoostLaunchpad} alt="" className="w-full" />
          </div>
          <div className="pt-[8px] text-[18px] sm:text-[16px] leading-[28px] sm:leading-[20px] sm:text-center font-[400] text-[#ffffff] max-w-[650px]">
            BOOST Launchpad democratises access to new Web3 project launches.  Participate in exciting projects exclusively on our platform.
          </div>

          <div className="flex flex-row items-center sm:!flex-col justify-center gap-[25px] mt-[46px] mb-[256px] sm:mb-[32px]" >

            {
              launchpadData.map((project, index) => {
                return (
                  <div key={index} className="w-[380px] sm:w-[325px] min-h-[675px] bg-white rounded-[16px] shadow-lg flex flex-col justify-between p-[16px] space-y-[16px]">
                    <div className="flex flex-col w-full h-full">
                      {/* <!-- Header Section --> */}
                      <div className="flex justify-between items-center">
                        <img src={project.pic} alt="Logo" className="w-full" />
                      </div>

                      {/* <!-- Card Body --> */}
                      <div className="flex flex-row items-center justify-between mt-[16px]">
                        <h2 className="font-[Thunder] text-[40px] sm:text-[32px] leading-[42px] font-[600]">{project.name}</h2>
                        <div className="flex space-x-[8px] mt-[8px]">
                          <span className="bg-[#26A17B] text-white px-[8px] py-[4px] rounded-[2px] text-[10px] leading-[12px]">{project.cat1}</span>
                          <span className="bg-[#1F93FF] text-white px-[8px] py-[4px] rounded-[2px] text-[10px] leading-[12px]">{project.cat2}</span>
                          <span className="bg-[#948DFF] text-white px-[8px] py-[4px] rounded-[2px] text-[10px] leading-[12px]">{project.cat3}</span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[4px] items-start justify-start">
                        <div className="size-[20px] flex items-center justify-center"><img className="size-[16px]" src={WebIcon} alt="" /></div>
                        <div className="size-[20px] flex items-center justify-center"><img className="size-[16px]" src={XIcon} alt="" /></div>
                        <div className="size-[20px] flex items-center justify-center"><img className="size-[16px]" src={FBIcon} alt="" /></div>
                      </div>

                      {/* <!-- Description --> */}
                      <p className="text-[#222222] text-[12px] leading-[14px] font-[400] mt-[16px] pb-[16px]">
                        {project.desc}
                      </p>


                      {/* <!-- Funding Information --> */}
                      <div className="border-t border-gray-300 pt-[16px]">
                        <div className="flex justify-between">
                          <div>
                            <span className="text-gray-400 text-[12px]">Total Raise</span>
                            <p className="font-bold text-[14px]">{project.raise}</p>
                          </div>

                        </div>
                        <div className="flex justify-sytart gap-[32px]">
                          <div className="min-w-[90px]">
                            <span className="text-gray-400 text-[12px]">Launch Price</span>
                            <p className="font-bold text-[14px]">{project.price}</p>
                          </div>
                          <div className="min-w-[90px]">
                            <span className="text-gray-400 text-[12px]">Launching On</span>
                            <p className="font-bold text-[14px]">{project.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full h-full gap-[10px]">
                      {/* <!-- See Details Button --> */}
                      <div className="flex justify-center">
                        {
                          project.isLive
                            ?
                            <button onClick={()=>navigate(project.path)} className="bg-[#26D7F3] text-[#002452] w-full px-[16px] py-[8px] rounded-[8px] text-[14px] leading-[16px] font-[500]">See Details</button>
                            :
                            <button className="bg-[#6A717D3D] text-[#6A717D] w-full px-[16px] py-[8px] rounded-[8px] text-[14px] leading-[16px] font-[500]">See Details</button>
                        }
                      </div>

                      {/* <!-- Registration Countdown --> */}

                      {
                        project.isLive ?
                          <div className="bg-[#9CFF87] text-[#002452] px-[16px] py-[8px] rounded-[8px] text-center text-[14px] leading-[16px] font-[500] flex flex-row sm:!flex-col w-full h-full items-center justify-between ">
                            <span> Registration Ends in </span> <span className="flex items-center justify-center text-[32px] sm:text-[24px] sm:leading-[26px] font-[Thunder] leading-[38px] font-[500]">03D 21H 56M 07S</span>
                          </div>
                          :
                          <div className="bg-[#6A717D3D] text-[#6A717D] px-[16px] py-[8px] rounded-[8px] text-center text-[14px] leading-[16px] font-[500] flex flex-row w-full h-full items-center justify-between ">
                            <span className="flex items-center w-full justify-center text-[32px] font-[Thunder] leading-[38px] font-[500]">TBA</span>
                          </div>
                      }
                    </div>
                  </div>
                )
              })
            }


          </div>
        </div>
      </section >

      {/* Social Section */}
      <div className="flex flex-col relative overflow-visible items-center justify-center z-1 pt-[250px] sm:pt-[75px]">
        <div className="w-full flex items-center justify-center sm:scale-[75%]" >
          <img src={BoostSocialApp} alt="" />
        </div>
        <div className="mt-[16px] max-w-[900px] text-[20px] leading-[30px] sm:text-[16px] sm:leading-[20px] font-[400] text-[#ffffff]">Projects launched via BOOST's Launchpad will benefit from BOOST's Web3 social platform that fosters deeper engagement between Brands, Creators, and Fans. This social element helps build strong communities after a Project is launched, transforms interaction and collaboration, delivers added value via AI matching, gamifies content creation, and rewards users for their participation.</div>
        <div className="mt-[40px]">
          <img src={BoostSocialIll} alt="" />
        </div>

        <div className="-translate-y-[100px] flex flex-col w-full items-center justify-center">
          <div className="flex flex-row items-center justify-center gap-[14px]">
            <img src={AppStore} alt="" />
            <img src={PlayStore} alt="" />
          </div>

          <div onClick={() => setIsBuyTokenActive(true)} className="text-[16px] min-w-[175px] w-[200px] mt-[75px] text-center h-fit cursor-pointer leading-[20px] font-[700] px-[40px] py-[12px] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
            BUY $BOOST
          </div>
        </div>



        <div className="absolute w-[100vw] scale-150 sm:scale-100 h-[1200px] bg-[url('./resources/images/social_bg.png')] bg-center bg-no-repeat bg-cover top-[450px] sm:top-[25px] z-[-1]">
        </div>

      </div>

      {/* Ecosystem */}
      <div className="flex flex-col mt-[100px] relative overflow-visible items-center justify-center z-150">
        <img className="relative z-[151]" src={Ecosystem} alt="Ecosystem" />
        <div className="absolute w-[100vw] h-[1500px] sm:scale-y-[50%] bg-[url('./resources/images/ecosystem_bg.png')] bg-center scale-100 opacity-35 bg-no-repeat bg-cover z-[0]">
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col w-[1000px] sm:w-[350px] px-[154px] sm:px-[24px] py-[96px] sm:py-[24px] mt-[200px] rounded-[64px] gap-[40px] sm:gap-[20px] sm:bg-none bg-center bg-[url('./resources/images/claim_bg.png')] border-[1px] border-[#ffffff1f]">
          <div className="text-[56px] leading-[60px] sm:text-[32px] sm:leading-[40px] font-[Thunder] font-[600] text-[#ffffff]">How to Claim your Tokens</div>
          <div className="text-[20px] leading-[30px] sm:text-[14px] sm:leading-[20px] font-[400] text-[#ffffff] text-center">Tokens will be available to claim on 00/00/0000 by clicking the “Claim Tokens” button below. You will not be able to claim your token until the specified date above <br /> Note: After purchase, you can connect your wallet and see your balance allocation in the Buy box under "Balance".</div>
          <div className="flex items-center justify-center px-[32px] sm:px-[16px] py-[16px] sm:py-[8px] text-[24px] leading-[28px] sm:text-[18px] sm:leading-[20px] font-[700] w-[250px] bg-[#BABABA] border-solid border-2 border-[#818181] rounded-[100px] shadow-[#818181] shadow-[10px_8px_0_0] sm:shadow-[5px_4px_0_0]">CLAIM TOKEN</div>
        </div>
      </div>

      {/* Team */}
      <div className="flex flex-wrap items-center justify-between mt-[200px] sm:mt-[100px] px-[115px] sm:px-[0px] w-full">
        <div className="text-[56px] leading-[60px] font-[Thunder] font-[600] text-[#ffffff] w-full text-center sm:py-[15px]">MEET THE TEAM</div>
        <div className="flex flex-wrap items-center justify-center mt-[48px] gap-[72px] sm:gap-[16px]">

          {
            teamData.map((member, index) => {
              return (
                <div key={index} className="flex flex-col items-center justify-start w-[256px]">
                  <img className="size-[175px]" src={member.image} alt="" />
                  <div className="text-[32px] mt-[8px] leading-[32px] text-center font-[Thunder] font-[800] text-[#ffffff] uppercase">{member.name}</div>
                  <div className="text-[20px] mt-[8px] leading-[24px] text-center w-[220px] font-[700] text-[#ffffff]">{member.role}</div>
                  {
                    expandedStates[index] ?
                      <div className="text-[14px] mt-[8px] leading-[18px] font-[400] text-center text-[#ffffff]">{member.fullDec}</div>
                      :
                      <div className="text-[14px] mt-[8px] leading-[18px] font-[400] text-center text-[#ffffff]">{member.des}...</div>
                  }
                  {
                    expandedStates[index] ?
                      <div onClick={() => { toggleContent(index) }} className="text-[14px] mt-[10px] leading-[18px] font-[700] cursor-pointer text-[#44CAFA]">HIDE INFO</div>
                      :
                      <div onClick={() => { toggleContent(index) }} className="text-[14px] mt-[10px] leading-[18px] font-[700] cursor-pointer text-[#44CAFA]">READ MORE</div>
                  }
                </div>
              )
            })
          }


        </div>
      </div>

      <div className="flex relative z-10 flex-col items-center justify-center mt-[72px]">
        <div className="text-[32px] leading-[36px] font-[800] text-[#ffffff]">DEVELOPMENT TEAM</div>
        <div className="text-[16px] leading-[20px] font-[700] text-[#ffffff] mt-[16px] mb-[10px]">Our development team based in UK, US, and Europe is comprised of:</div>
        <div className="p-4 text-white sm:flex sm:w-full sm:justify-center m:items-between">
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 w-[550px]">
            <ul className="list-disc space-y-2">
              <li>iOS/Android Developers</li>
              <li>DevOps Engineers</li>
              <li>UI/UX Designers</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li>Blockchain Developers</li>
              <li>Full Stack Developers</li>
              <li>Project Manager</li>
            </ul>
            <ul className="list-disc space-y-2">
              <li>Testers</li>
              <li>Web Developers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQS */}

      <div className="w-full relative z-10 text-center mt-[200px] sm:mt-[50px] mb-[56px] font-[Thunder] text-[56px] leading-[60px] sm:text-[32px] sm:leading-[36px] font-[600] text-[#ffffff]">
        Frequently Asked Questions
      </div>
      <div className="flex flex-col gap-[30px] sm:gap-[25px] w-full px-[200px] sm:px-[0]">
        {faqData.map((que, index) => (
          <div key={index} className="w-full flex flex-col relative z-10">
            {activeAccordion === index ? (
              <>
                <div className="bg-[#ffffff] border-[2px] px-[32px] py-[20px] sm:px-[8px] sm:py-[5px] border-[#000000] w-full rounded-[12px]">
                  <div className="absolute z-[-1] h-[82px] sm:h-[48px] bg-[#000000] border-[2px] px-[32px] py-[20px] border-[#ffffff] w-full rounded-[12px] top-[10px] left-[10px]"></div>
                  <div className="flex flex-row justify-between items-center relative z-[100]">
                    <span className="text-[32px] font-[Thunder] leading-[34px] sm:text-[22px] sm:leading-[20px] text-[#002452] font-[500]">{que.que}</span>
                    <span
                      onClick={() => handleToggleCollapse(index)}
                      className="text-[32px] font-[Thunder] leading-[34px] text-[#002452] font-[500] cursor-pointer"
                    >
                      -
                    </span>
                  </div>
                </div>
                <div className="p-[40px] sm:p-[20px] text-[20px] leading-[26px] sm:text-[16px] sm:leading-[20px] text-[#ffffff]">
                  {que.ans}
                </div>
              </>
            ) : (
              <>
                <div className="bg-[#0C59BF] border-[2px] px-[32px] py-[20px] sm:px-[8px] sm:py-[5px] border-[#ffffff] w-full rounded-[12px]">
                  <div className="absolute z-[-1] h-[82px] sm:h-[48px] bg-[#023A84] border-[2px] px-[32px] py-[20px] border-[#ffffff] w-full rounded-[12px] top-[10px] left-[10px]"></div>
                  <div className="flex flex-row justify-between items-center relative z-[100]">
                    <span className="text-[32px] font-[Thunder] leading-[34px] sm:text-[22px] sm:leading-[20px] text-[#ffffff] font-[500]">{que.que}</span>
                    <span
                      onClick={() => handleToggleCollapse(index)}
                      className="text-[32px] font-[Thunder] leading-[34px] text-[#ffffff] font-[500] cursor-pointer"
                    >
                      +
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* <Footer /> */}

      <div className="py-[56px] text-[#ffffff] mt-[100px] sm:mt-[50px] sm:pt-[56px] sm:pb-[28px] relative flex flex-col z-100 justify-center w-full items-center before:">

        <div className="flex flex-row w-full relative z-[10] top-0">

          <div className="flex flex-col items-start mb-4 w-[50%]">
            <LogoFull />
            <a href="#" className="hover:underline py-[12px] ext-[16px] leading-[20px] font-[700] text-[#ffffff]">Read Whitepaper</a>
            <div className="flex sm:flex-col text-[16px] leading-[20px] font-[400] gap-[24px] sm:gap-[8px]">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookie Policy</a>
              <a href="#" className="hover:underline">Disclaimer</a>
            </div>
          </div>

          <div className="flex flex-col w-[50%]">
            <div className="flex flex-col items-end">

              <div className="flex pb-[24px]">
                <a href="#" className="flex items-center justify-center h-[40px] w-[40px]">
                  <img className="w-[30px] h-[30px]" src={XIcon} alt="" />
                </a>
                <a href="#" className="flex items-center justify-center h-[40px] w-[40px]">
                  <img className="w-[35px] h-[30px]" src={TelegramIcon} alt="" />
                </a>
              </div>

              <div className="flex sm:flex-col sm:justify-end sm:items-end space-x-2 sm:gap-[8px] mb-4">
                <a href="#" className="">
                  <img className="" src={AppStore} alt="" />
                </a>
                <a href="#" className="">
                  <img className="" src={PlayStore} alt="" />
                </a>
              </div>

            </div>
          </div>

        </div>


        <div className="mt-[26px] relative z-10 mb-[32px] w-full h-[1px] bg-[radial-gradient(113.21%_708.28%_at_-6.84%_100%,#ACFFB7_0%,#0BCAFF_75.45%,#1F93FF_100%)]"></div>

        <p className="text-[14px] relative z-10 leading-[20px] font-[400] text-center">
          Our token is a utility token designed to enhance user engagement by providing exclusive access to our launchpad and BOOST! social platform. It enables unique username claims and participation in content competitions. This token is intended solely for platform use and does not represent an investment or offer financial returns.
        </p>

        <p className="text-[14px] relative z-10 leading-[24px] font-[500] mt-[48px] sm:mt-[12px]">
          © 2024 BOOST. All rights reserved.
        </p>

      </div>

      {/* <footer className="footer_section relative z-[0]">
        <div className="footer_bg absolute z-[-1] bottom-0">
          <img src={footerBg} alt="" />
        </div>
      </footer> */}

      <div className="absolute overflow-visible w-full left-0 bottom-0 z-[0]">
        <img src={footerBg} alt="" />
      </div>
    </div >
  );
};

export default Home;
