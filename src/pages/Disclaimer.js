import XIconW from '../resources/images/x-white.png'
import TelegramIconW from '../resources/images/tele-white.png'
import { useNavigate } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from 'react'
import nav_bg from '../resources/images/nav_bg.png'
import AppStore from '../resources/images/app_store.png'
import PlayStore from '../resources/images/play_store.png'
import { LogoFull } from "../resources/svg/Global"
import boost_big2 from '../resources/images/boost_big2.png'
import logoImage from '../resources/images/logo.png'

const Disclaimer = () => {

  const navigate = useNavigate()

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="stack_container text-[#ffffff] box-border relative z-0 min-h-[100vh] max-w-[100vw] overflow-hidden bg-[#002452] px-[120px] sm:px-[20px]">
      {/* Navbar  */}
      <div className="w-full relative z-[500]">
        <div className="max-w-[100vw] realtive z-[5000] max-h-full flex flex-row items-center justify-between py-[32px] sm:py-[8px] sm:mb-[5px]">

          {/* Navbar Menus */}
          <div className="flex relative z-[000] flex-row items-center justify-center gap-[24px] sm:gap-[8px]">
            <div className="cursor-pointer max-h-[48px]"><img className="max-w-[40px] max-h-[48px] sm:max-w-[30px] sm:max-h-[36px]" onClick={() => navigate('/')} src={logoImage} alt="" /></div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/')}>HOME</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/stake')}>STAKE</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/#faq')}>FAQ</div>
          </div>

          {/* Connect Wallat Button */}
          <div className="flex items-center justify-center h-full sm:text-[14px] cursor-pointer font-[700]">
            <div className="flex items-center justify-center h-full gap-[12px]">
              <a href="https://t.me/boostlaunchpad" className="sm:hidden flex items-center justify-center h-[32px] w-[32px] rounded-[50px] bg-[#239FDB] shadow-[#198DC4] border-[1px] border-[#198DC4] shadow-[2.4px_1.6px_0_0]">
                <img className="w-[18px] h-[18px]" src={TelegramIconW} alt="" />
              </a>
              <a href="https://x.com/boost_social_" className="sm:hidden flex items-center justify-center h-[32px] w-[32px] rounded-[50px] bg-[#2B2B2B] shadow-[#222222] border-[1px] border-[#222222] shadow-[2.4px_1.6px_0_0]">
                <img className="w-[18px] h-[18px]" src={XIconW} alt="" />
              </a>

              <div className={`sm:flex hidden relative z-[1000] size-[32px] text-[18px] text-[#ffffff] rounded-[25px] items-center justify-center`} onClick={() => { setIsMenuActive(prev => !prev) }}>
                {isMenuActive ? <IoCloseSharp size={32} /> : <RxHamburgerMenu size={32} color="" />}
              </div>
            </div>
          </div>

        </div>

        <div className={`absolute z-[500] ${isMenuActive ? 'flex' : 'hidden'} top-0 left-[-20px] w-[100vw] bg-[#002452] h-[850px]`} >
          <div className="flex z-[600] relative flex-col w-full items-center justify-center gap-[24px] sm:gap-[24px]">
            <div className="cursor-pointer max-h-[48px] mb-[54px]"><img className="max-w-[40px] max-h-[48px] sm:max-w-[60px] sm:max-h-[72px] sm:min-w-[60px] sm:min-h-[72px]" onClick={() => navigate('/')} src={boost_big2} alt="" /></div>
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/')}>HOME</div>
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/stake')}>STAKE</div>
            <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/#faq')}>FAQ</div>
            <div className="hidden sm:flex sm:w-full mt-[24px] sm:items-center sm:justify-center gap-[18px]">
              <a href="https://t.me/boostlaunchpad" className="flex items-center justify-center h-[48px] w-[48px] rounded-[50px] bg-[#239FDB] shadow-[#198DC4] border-[1px] border-[#198DC4] shadow-[2.4px_1.6px_0_0]">
                <img className="w-[32px] h-[32px]" src={TelegramIconW} alt="" />
              </a>
              <a href="https://x.com/boost_social_" className="flex items-center justify-center h-[48px] w-[48px] rounded-[50px] bg-[#2B2B2B] shadow-[#222222] border-[1px] border-[#222222] shadow-[2.4px_1.6px_0_0]">
                <img className="w-[36px] h-[36px]" src={XIconW} alt="" />
              </a>
            </div>
          </div>
          <div className="absolute z-[-100]">
            <img className="h-[850px]" src={nav_bg} alt="" />
          </div>
        </div>

      </div>

      <div className='w-full flex flex-col gap-[64px] sm:gap-[32px] justify-center items-center'>
        <div className='w-full text-center max-w-[1000px] text-[56px] leading-[60px] font-[600] font-[Thunder]'>
          Disclaimer
        </div>
        <div className='w-full text-left max-w-[1000px] text-[16px] leading-[20px] font-[500]'>
          This presentation may contain forward-looking statements including, but not limited to, statements as to future operating results and plans that involve risks and uncertainties. The use of words such as “expects”, “anticipates”, “believes”, “estimates”, the negative of these terms and similar expressions, identify forward- looking statements. Such forward-looking statements involve known and unknown risks, uncertainties and other factors which may cause the actual results, performance or achievements of BOOST to differ materially from any future results, performance or achievements expressed or implied by those projected in the forward-looking statements for any reason.
          <br /><br />
          This presentation does not constitute a prospectus or offer document of any sort and is not intended to constitute an offer of securities or a solicitation for investments in securities in any jurisdiction. No person is bound to enter into any contract or binding legal commitment, and no form of payment is to be accepted based on this presentation. Any agreement relating to the sale and purchase of securities issued by BOOST is to be governed solely by any purchase documents as BOOST may require and no other document (including this presentation). This presentation and the information included herein is intended only for the use of the addressee(s) and contains information that is PRIVILEGED and CONFIDENTIAL.
          <br /><br />
          If you are not the intended recipient, you are hereby notified that any dissemination of this presentation is strictly prohibited. If you receive this presentation in error, please delete all copies and notify the sender immediately.
          <br /><br />
          No regulatory authority has examined or approved of any of the information set out in this presentation. No such examination has been or will be sought under the laws, regulatory requirements or rules of any jurisdiction. The publication, distribution or dissemination of this presentation does not imply that any such applicable laws, regulatory requirements or rules have been complied with. The financial information included in this presentation includes forecasts, projections and other predictive statements (collectively, the “Forecasts”) that represent BOOST’s assumptions and expectations as of the date of this presentation in light of currently available information. The Forecasts are based on industry trends, circumstances involving clients and other factors, and the Forecasts involve numerous material risks, variables and uncertainties.
          <br /><br />
          BOOST’s actual performance results may differ materially from the Forecasts. Consequently, no guarantee is given or implied as to the accuracy of the Forecasts or any other predictive statements contained in this presentation. There are material risks and uncertainties associated with BOOST and its business and operations.
          <br /><br />
          BOOST does not make or purport to make, and hereby disclaims, any representation, warranty or undertaking in any form whatsoever to any entity or person, including any representation, warranty or undertaking as to the accuracy and completeness of any of the information set out in this presentation.
        </div>

      </div>

      {/* Footer */}
      <div className="py-[56px] text-[#ffffff] mt-[100px] sm:mt-[50px] sm:pt-[56px] sm:pb-[28px] relative flex flex-col z-100 justify-center w-full items-center before:">

        <div className="flex flex-row sm:!flex-col sm:items-center w-full relative z-[10] top-0">

          <div className="flex flex-col items-start sm:items-center mb-4 w-[50%] sm:w-full">
            <LogoFull />
            <a href="#" className="hover:underline py-[12px] ext-[16px] leading-[20px] sm:pt-[48px] font-[700] text-[#ffffff]">Read Whitepaper</a>
            <div className="flex sm:flex-col text-center text-[16px] leading-[20px] font-[400] gap-[24px] sm:gap-[16px]">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Cookie Policy</a>
              <a href="#" className="hover:underline">Disclaimer</a>
            </div>

            <div className="pt-[48px] pb-[24px] hidden sm:flex w-full items-center justify-center">
              <a href="https://x.com/boost_social_" className="flex items-center justify-center h-[40px] w-[40px]">
                <img className="w-[30px] h-[30px]" src={XIconW} alt="" />
              </a>
              <a href="https://t.me/boostlaunchpad" className="flex items-center justify-center h-[40px] w-[40px]">
                <img className="w-[28px] h-[24px]" src={TelegramIconW} alt="" />
              </a>
            </div>
          </div>

          <div className="flex flex-col w-[50%] sm:items-center sm:w-full">
            <div className="flex flex-col items-end">

              <div className="flex pb-[24px] sm:hidden">
                <a href="https://x.com/boost_social_" className="flex items-center justify-center h-[40px] w-[40px]">
                  <img className="w-[30px] h-[30px]" src={XIconW} alt="" />
                </a>
                <a href="https://t.me/boostlaunchpad" className="flex items-center justify-center h-[40px] w-[40px]">
                  <img className="w-[35px] h-[30px]" src={TelegramIconW} alt="" />
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

        <p className="text-[16px] relative z-10 leading-[24px] px-[24px] font-[400] text-center">
          Our token is a utility token designed to enhance user engagement by providing exclusive access to our launchpad and BOOST! social platform. It enables unique username claims and participation in content competitions. This token is intended solely for platform use and does not represent an investment or offer financial returns.
        </p>

        <p className="text-[14px] relative z-10 leading-[24px] font-[500] mt-[48px] sm:mt-[12px]">
          © 2024 BOOST. All rights reserved.
        </p>

      </div>
    </div>
  )
}

export default Disclaimer