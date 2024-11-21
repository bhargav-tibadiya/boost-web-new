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

const Cookies = () => {

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
          <div className="absolute z-[0]">
            <div className="w-[600px] h-[1000px] border-[1px] blur-[350px] bg-[radial-gradient(251.86%_99.26%_at_50%_15.25%,_#005ACF_24.58%,_#002452_83.03%)]">
            </div>
          </div>
        </div>

      </div>

      <div className='w-full flex flex-col gap-[64px] sm:gap-[32px] justify-center items-center'>
        <div class="p-6 max-w-6xl mx-auto rounded-lg">
          <h2 class="text-xl font-semibold mb-4">Effective Date: October 01, 2024</h2>
          <p class="mb-4">
            At BOOST, we believe in being transparent about how we collect and use data related to your use of our platform. This Cookie Policy explains what cookies are, how we use them, and the options available to you regarding their management. By using the BOOST website and services, you consent to our use of cookies as outlined in this policy.
          </p>

          <h3 class="text-lg font-semibold mb-2">1. What Are Cookies?</h3>
          <p class="mb-4">
            Cookies are small text files that are placed on your device (computer, mobile phone, etc.) when you visit a website. They allow the site to recognize your device and store information about your preferences or past actions. This helps enhance your experience and ensures the website functions properly.
          </p>

          <h3 class="text-lg font-semibold mb-2">2. Types of Cookies We Use</h3>
          <ul class="list-disc ml-6 mb-4 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function and cannot be disabled. They help with basic functions such as page navigation and accessing secure areas of the website.</li>
            <li><strong>Performance Cookies:</strong> Collect information about how visitors use our site, such as which pages are visited most often. We use this data to improve the performance of our platform.</li>
            <li><strong>Functional Cookies:</strong> Allow the website to remember choices you make, such as your language preferences, for enhanced functionality.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand user interactions by collecting information about visits, such as pages viewed and interactions with content.</li>
            <li><strong>Advertising Cookies:</strong> Track your browsing behavior to deliver advertisements relevant to your interests, set by us or our advertising partners.</li>
          </ul>

          <h3 class="text-lg font-semibold mb-2">3. Third-Party Cookies</h3>
          <p class="mb-4">
            We use third-party services like Google Analytics and Facebook Pixel to track user behavior and deliver targeted advertisements. Please review their privacy policies for more information.
          </p>

          <h3 class="text-lg font-semibold mb-2">4. Cookie Consent and Management</h3>
          <p class="mb-4">
            When you first visit our website, you will be prompted to give consent for non-essential cookies. You can change preferences via the Cookie Preference Center or modify your browser settings. Disabling certain cookies may affect your experience on the platform.
          </p>

          <h3 class="text-lg font-semibold mb-2">5. Cookie Duration and Retention</h3>
          <p class="mb-4">
            Cookies may remain on your device for different durations:
          </p>
          <ul class="list-disc ml-6 mb-4 space-y-2">
            <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser.</li>
            <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a longer period or until manually deleted.</li>
          </ul>
          <p class="mb-4">
            Manage cookies via your browser settings or the Cookie Preference Center.
          </p>

          <h3 class="text-lg font-semibold mb-2">6. Legal Basis for Processing Cookies</h3>
          <p class="mb-4">
            For GDPR-compliant regions, we rely on consent for non-essential cookies. Users in California can opt-out of personal information sale via our "Do Not Sell My Personal Information" page or by contacting us.
          </p>

          <h3 class="text-lg font-semibold mb-2">7. International Data Transfers</h3>
          <p class="mb-4">
            Some cookies and third-party services may transfer your data across jurisdictions. We ensure appropriate safeguards, such as Standard Contractual Clauses (SCCs), to protect your data.
          </p>

          <h3 class="text-lg font-semibold mb-2">8. Updates to this Cookie Policy</h3>
          <p class="mb-4">
            We may update this policy to reflect changes in practices or legal requirements. Updates will be posted here with an updated effective date. Review this policy periodically to stay informed.
          </p>

          <h3 class="text-lg font-semibold mb-2">9. Contact Us</h3>
          <p class="mb-4">
            If you have questions about this Cookie Policy or wish to exercise your rights regarding cookies, please contact us through Telegram or X.
          </p>
        </div>


      </div>

      {/* Footer */}
      <div className="py-[56px] text-[#ffffff] mt-[100px] sm:mt-[50px] sm:pt-[56px] sm:pb-[28px] relative flex flex-col z-100 justify-center w-full items-center before:">

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
      <div className="absolute w-[full] flex overflow-visible m-auto translate-y-[50%] bottom-0 z-[0]">
        <div className="w-[1600px] h-[700px] border-[1px] border-[#ff0000] blur-[250px] bg-[radial-gradient(251.86%_99.26%_at_50%_15.25%,_#26D7F3_0%,_rgba(38,_215,_243,_0)_83.03%)]">
        </div>
      </div>
    </div>
  )
}

export default Cookies