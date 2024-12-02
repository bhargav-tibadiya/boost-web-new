import { useNavigate } from "react-router-dom"
import logoImage from '../resources/images/logo.png'

import StackBoost from '../resources/images/stackboost.png'
import StartStacking from '../resources/images/startstacking.png'
import { LogoFull } from "../resources/svg/Global"
import AppStore from '../resources/images/app_store.png'
import PlayStore from '../resources/images/play_store.png'
import { useRef, useState } from "react"
import { IoCloseSharp } from "react-icons/io5"
import { RxHamburgerMenu } from "react-icons/rx"

import boost_big2 from '../resources/images/boost_big2.png'
import XIconW from '../resources/images/x-white.png'
import TelegramIconW from '../resources/images/tele-white.png'

import Boost_8 from '../resources/images/boost_8.png'


const Stake = () => {

  const navigate = useNavigate()

  const [isMenuActive, setIsMenuActive] = useState(false);

  const targetDivRef = useRef(null);

  const handleButtonClick = () => {
    // Scroll to the div
    navigate("/"); 
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Optional: If you also want to navigate to a different route
  };



  return (
    <div className="stack_container flex flex-col justify-center items-center box-border relative z-0 min-h-[100vh] max-w-[100vw] overflow-hidden bg-[#002452] px-[120px] sm:px-[20px]">


      <div className=" relative max-w-[1200px] flex flex-row items-center justify-between w-full z-[500]">
        {/* Navbar  */}
        <div className="max-w-[100vw] w-full text-[#ffffff] realtive z-[5000] max-h-full flex flex-row items-center justify-between py-[32px] sm:py-[8px] sm:mb-[5px]">

          {/* Navbar Menus */}
          <div className="flex relative z-[000] flex-row items-center justify-center gap-[24px] sm:gap-[8px]">
            <div className={`cursor-pointer ${isMenuActive ? 'hidden' : 'flex'} max-h-[48px]`}><img className="max-w-[40px] max-h-[48px] sm:max-w-[30px] sm:max-h-[36px]" onClick={() => navigate('/')} src={logoImage} alt="" /></div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/')}>HOME</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/stake')}>STAKE</div>
            <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => handleButtonClick()}>FAQ</div>
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
          <div className="absolute z-[0]">
            <div className="w-[600px] h-[1000px] border-[1px] blur-[350px] bg-[radial-gradient(251.86%_99.26%_at_50%_15.25%,_#005ACF_24.58%,_#002452_83.03%)]">
            </div>
          </div>
        </div>

      </div>

      {/* Start Stacking */}
      <div className="px-[70px] max-w-[1200px] py-[72px] sm:!flex-col sm:p-[5px] sm:mt-[25px] sm:gap-[25px] gap-[48px] flex flex-row justify-between sm:justify-center sm:items-center">
        <div className="flex sm:!flex-col justify-start items-center">
          <img src={StackBoost} className="sm:hidden flex scale-110 sm:min-w-[150px] sm:max-w-[300px] py-[25px]" alt="" />
          <img src={Boost_8} className="sm:flex hidden scale-110 sm:min-w-[150px] sm:max-w-[300px] py-[25px]" alt="" />
        </div>

        <div className="flex items-center justify-center px-[20px] py-[20px] max-w-[550px] min-w-[420px] sm:max-w-[350px] sm:min-w-[300px] bg-custom-radial bg-custom-linear rounded-[64px] sm:rounded-[40px] bg-blend-overlay relative p-4 sm:!p-[15px] border-[2.73px] border-solid before:absolute before:inset-0 before:bg-transparent before:border-[2.73px] before:border-transparent before:rounded-[inherit] before:bg-radial-gradient before:from-white/30 before:to-transparent before:opacity-50 before:z-[-1]">
          <div className="flex flex-col w-full items-center justify-center py-[48px] px-[32px] sm:py-[15px] sm:px-[16px] sm:rounded-[32px] rounded-[64px] bg-[#ffffff]">

            <img className="" src={StartStacking} alt="" />

            {/* Boost Balance */}
            <div className="flex flex-col w-full mt-[16px] min-w-[400px] sm:min-w-[250px]">
              <div className="w-full"> <span className="text-[14px] font-[700]">BOOST</span>  Balance</div>
              <div className="w-full border-[1px] border-[#D9D9D9] rounded-[8px] px-[16px] py-[12px] sm:py-[6px] text-[16px] leading-[20px] font-[700]">0</div>

            </div>

            <div className="bg-[#D9D9D9] w-[100%] h-[1px] mt-[24px]"></div>

            {/* Stacked Boost */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex flex-row justify-between mt-[20px] mb-[4px]">
                <span className="text-[14px] text-[#6A717D] leading-[16px] font-[500]">Staked $BOOST</span>
                <span className="text-[14px] leading-[16px] font-[700]">0 $BOOST</span>
              </div>

              <div className="flex flex-row space-between w-full border-[1px] border-[#D9D9D9] rounded-[8px] px-[16px] sm:py-[6px] py-[12px] text-[16px] leading-[20px] font-[700]">
                <input className="w-full text-[20px] leading-[24px] font-[700] outline-none ring-0" type="number" placeholder="0"></input>
                <div className=" relative text-[16px] leading-[20px] text-[#ffffff] font-[700] px-[20px] py-[8px] rounded-[6px] bg-[radial-gradient(123.09%_131.36%_at_87.61%_6.26%,_#19B9DB_0%,_#4488ED_46.1%,_#8946EC_88.89%)] after:w-[78px] after:h-[38px] after:absolute after:z-[-1] after:top-0 after:left-0 after:bg-[radial-gradient(123.09%_131.36%_at_87.61%_6.26%,_#19B9DB_0%,_#4488ED_46.1%,_#8946EC_88.89%)]">
                  MAX
                </div>
              </div>

              <div className="text-[16px] min-w-[175px] px-[72px] py-[12px] text-center sm:py-[6px] h-fit mt-[16px] cursor-pointer leading-[20px] font-[700] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
                APPROVE
              </div>
            </div>

            <div className="bg-[#D9D9D9] w-[100%] h-[1px] mt-[24px]"></div>

            {/* UnStacked Boost */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex flex-row justify-between mt-[20px] mb-[4px]">
                <span className="text-[14px] text-[#6A717D] leading-[16px] font-[500]">Unstake $BOOST</span>
                <span className="text-[14px] leading-[16px] font-[700]">0 $BOOST</span>
              </div>

              <div className="flex flex-row space-between w-full border-[1px] border-[#D9D9D9] rounded-[8px] px-[16px] sm:py-[6px] py-[12px] text-[16px] leading-[20px] font-[700]">
                <input className="w-full text-[20px] leading-[24px] font-[700] outline-none ring-0" type="number" placeholder="0"></input>
                <div className=" relative text-[16px] leading-[20px] text-[#ffffff] font-[700] px-[20px] py-[8px] rounded-[6px] bg-[radial-gradient(123.09%_131.36%_at_87.61%_6.26%,_#19B9DB_0%,_#4488ED_46.1%,_#8946EC_88.89%)] after:w-[78px] after:h-[38px] after:absolute after:z-[-1] after:top-0 after:left-0 after:bg-[radial-gradient(123.09%_131.36%_at_87.61%_6.26%,_#19B9DB_0%,_#4488ED_46.1%,_#8946EC_88.89%)]">
                  MAX
                </div>
              </div>

              <div className="text-[16px] min-w-[175px] px-[72px] py-[12px] sm:py-[6px] text-center h-fit mt-[16px] cursor-pointer leading-[20px] font-[700] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
                UNSTAKE
              </div>
            </div>

            <div className="w-full flex flex-col items-center text-center font-[500] text-[#99A1B0] text-[14px] leading-[18px] mt-[24px]">
              There is a 2% tax on both staking and unstaking. Stay tuned also on Rewards details!
            </div>


          </div>
        </div>
      </div>

      <div className="w-[100%] max-w-[1200px] box-border flex flex-col items-center justify-center my-[135px] px-[160px] sm:p-1">
        <div className="bg-[#ffffff3D] flex flex-col items-center justify-center p-[64px] sm:px-[20px] sm:py-[24px] rounded-[48px] border-[3px] border-[#eeeeee3d]">
          <div className="text-[40px] leading-[50px] sm:text-[18px] sm:leading-[24px] sm:text-center font-[700] text-[#ffffff]">Are you spearheading a project that's setting the next era of innovation?</div>
          <div className="text-[16px] leading-[20px] sm:text-[12px] sm:leading-[18px] font-[400] text-center mt-[24px] text-[#ffffff]">Contact us today to explore the launch possibilities with BOOST Ignition's collaborative incubation and funding solutions. Join the BOOST community—one of the most expansive and dynamic networks in the industry—and unlock a world of opportunities.</div>
          <div className="text-[24px] sm:text-[18px] min-w-[175px] px-[20px] py-[12px] sm:py-[6px] text-center h-fit mt-[32px] cursor-pointer leading-[28px] font-[700] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
            LAUNCH PROJECT
          </div>
        </div>

      </div>

      <div className="absolute w-[100vw] h-[1440px] top-0 z-[-1]">
        <div className="relative w-full h-full ">
          <div className="absolute z-[2] w-[1200px] h-[1700px] top-[-40%] left-[-25%] rotate-[109] bg-[radial-gradient(85.4%_99.26%_at_50%_15.25%,_#26D7F3_25.49%,_rgba(38,215,243,0)_100%)] blur-[250px]"></div>
          <div className="absolute z-[2] w-[1150px] h-[1450px] top-[-25%] left-[50%] rotate-[139] bg-[radial-gradient(251.86%_99.26%_at_50%_15.25%,_#9CFF87_0%,_rgba(156,255,135,0)_83.03%)] blur-[250px]"></div>
          <div className="absolute z-[1] w-[1600px] h-[1150px] top-[10%] left-[-25%] rotate-[139] bg-[#D40EF5] blur-[250px]"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-[56px] max-w-[1200px] text-[#ffffff] mt-[100px] sm:mt-[50px] sm:pt-[56px] sm:pb-[28px] relative flex flex-col z-100 justify-center w-full items-center before:">

        <div className="flex flex-row sm:!flex-col sm:items-center w-full relative z-[10] top-0">

          <div className="flex flex-col items-start sm:items-center mb-4 w-[50%] sm:w-full">
            <LogoFull />
            <a href="#" className="hover:underline py-[12px] ext-[16px] leading-[20px] sm:pt-[48px] font-[700] text-[#ffffff]">Read Whitepaper</a>
            <div className="flex sm:flex-col text-center text-[16px] leading-[20px] font-[400] gap-[24px] sm:gap-[16px]">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <a href="/cookies" className="hover:underline">Cookie Policy</a>
              <a href="/disclaimer" className="hover:underline">Disclaimer</a>
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

    </div >
  )
}

export default Stake