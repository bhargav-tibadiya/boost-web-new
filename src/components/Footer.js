// import React from "react";
// import telegram from "../resources/images/logo-telegram.svg";
// import twitter from "../resources/images/logo-twitter.svg";
// import appStore from "../resources/images/App_Store_Badge.svg";
// import playStore from "../resources/images/Google_Play_Badge.svg";
// import { Link } from "react-router-dom";
// import "../styles/Footer.css";

// const Footer = () => {
//   return (
//     <>
//       <div className="row footer_desktop">
//         <div className="col-12">
//           <div className="footer_top">
//             <div className="footer_left">
//               <h1>boost!</h1>
//               {/* <div className="join_button">
//                 <button>Join the Waitlist</button>
//                 <button>Read Whitepaper</button>
//               </div>
//               <ul>
//                 <li>
//                   <Link>Privacy Policy</Link>
//                 </li>
//                 <li>
//                   <Link>Cookie Policy</Link>
//                 </li>
//                 <li>
//                   <Link>Disclaimer</Link>
//                 </li>
//               </ul> */}
//             </div>
//             <div className="footer_right">
//               <div className="app-btn">
//                 <Link to="">
//                   <img src={appStore} alt="AppStore" />
//                 </Link>
//                 <Link to="">
//                   <img src={playStore} alt="PlayStore" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="horizontal_line"></div>
//           <div className="footer_bottom">
//             <h6>© {new Date().getFullYear()} BOOST. All rights reserved.</h6>
//             <div className="social_icon">
//               <h6>Join our vibrant community!</h6>
//               <div className="icon">
//                 <Link>
//                   <img src={telegram} alt="" />
//                 </Link>
//                 <Link>
//                   <img src={twitter} alt="" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row footer_tablet">
//         <div className="footer_top">
//           <div className="footer_left">
//             <h1>boost!</h1>
//             {/* <div className="join_button">
//               <button>Join the Waitlist</button>
//               <button>Read Whitepaper</button>
//             </div>
//             <ul>
//               <li>
//                 <Link>Privacy Policy</Link>
//               </li>
//               <li>
//                 <Link>Cookie Policy</Link>
//               </li>
//               <li>
//                 <Link>Disclaimer</Link>
//               </li>
//             </ul> */}
//           </div>
//           <div className="social_icon">
//             <h6>Join our vibrant community!</h6>
//             <div className="icon">
//               <Link>
//                 <img src={telegram} alt="" />
//               </Link>
//               <Link>
//                 <img src={twitter} alt="" />
//               </Link>
//             </div>
//           </div>
//           <div className="footer_right">
//             <div className="app-btn">
//               <Link to="">
//                 <img src={appStore} alt="AppStore" />
//               </Link>
//               <Link to="">
//                 <img src={playStore} alt="PlayStore" />
//               </Link>
//             </div>
//           </div>
//           <h6>© {new Date().getFullYear()} BOOST. All rights reserved.</h6>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import { LogoFull } from "../resources/svg/Global"

import XIcon from '../resources/images/x_icon.png'
import AppStore from '../resources/images/app_store.png'
import PlayStore from '../resources/images/play_store.png'
import TelegramIcon from '../resources/images/telegram_icon.png'


const Footer = () => {
  return (
    <div className="py-[56px] sm:pt-[56px] sm:pb-[28px] relative flex flex-col z-100 justify-center w-full items-center before:">

      <div className="flex flex-row w-full relative z-[10] top-0">

        <div className="flex flex-col items-start mb-4 w-[50%]">
          <LogoFull />
          <a href="#" className="hover:underline py-[12px] ext-[16px] leading-[20px] font-[700] text-[#222222]">Read Whitepaper</a>
          <div className="flex sm:flex-col text-[16px] leading-[20px] font-[400] gap-[24px] sm:gap-[8px]">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <a href="#" className="hover:underline">Disclaimer</a>
          </div>
        </div>

        <div className="flex flex-col w-[50%]">
          <div className="flex flex-col items-end">

            <div className="flex pb-[24px]">
              <a href="https://x.com/boost_social_" className="flex items-center justify-center h-[40px] w-[40px]">
                <img className="w-[30px] h-[30px]" src={XIcon} alt="" />
              </a>
              <a href="https://t.me/boostlaunchpad" className="flex items-center justify-center h-[40px] w-[40px]">
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

      {/* Gradients */}
      <div className="absolute w-full h-[1000px] sm:h-[900px] bottom-0 z-[-200] bg-[linear-gradient(184.4deg,_rgba(252,252,252,0)_20.95%,_rgba(252,252,252,0.69)_50.53%,_#FCFCFC_81.79%)]">
        <div className="w-full overflow-y-clip h-[1000px] sm:h-[900px] relative z-[-200]">
          <div className="w-[1400px] sm:w-[650px] h-[1400px] sm:h-[950px] rounded-[1000px] sm:overflow-auto absolute z-[-250] bottom-[-50%] sm:bottom-[-25%] left-[-50%] sm:left-[-100%] bg-[radial-gradient(circle,rgba(245,123,226,1)_0%,rgba(245,123,226,0)_65%,rgba(0,0,0,0)_100%)]"></div>
          <div className="w-[1400px] sm:w-[650px] h-[1200px] sm:h-[950px] rounded-[1000px] sm:overflow-auto absolute z-[-250] bottom-[-50%] sm:bottom-[-25%] left-[0%] sm:left-[0%] bg-[radial-gradient(circle,rgba(38,215,243,1)_0%,rgba(38,215,243,0)_65%,rgba(0,0,0,0)_100%)]"></div>
          <div className="w-[2000px] sm:w-[650px] h-[1200px] sm:h-[950px] rounded-[1000px] sm:overflow-auto absolute z-[-250] bottom-[-35%] sm:bottom-[-25%] left-[50%] sm:right-[-100%] bg-[radial-gradient(circle,rgba(165,255,135,1)_0%,rgba(165,255,135,0)_65%,rgba(0,0,0,0)_100%)]"></div>
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
  )
}

export default Footer