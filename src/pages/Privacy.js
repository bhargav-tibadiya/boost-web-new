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

const Privacy = () => {

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
        <div class="max-w-6xl mx-auto rounded-lg">
          <h1 class="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
          <p class="text-sm">Effective Date: October 01, 2024</p>

          <p class="mt-4 text-lg">At BOOST, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and protect your information when you use our platform, which facilitates Web3 project launches and community engagement through our launchpad and social app.</p>

          <h2 class="mt-6 text-2xl font-semibold">1. Information We Collect</h2>
          <p class="mt-2 text-lg">We may collect and process the following types of information:</p>

          <h3 class="mt-4 text-xl font-semibold">Personal Information</h3>
          <ul class="list-inside list-disc ml-5">
            <li>Name</li>
            <li>Email address</li>
            <li>Wallet addresses (for Web3 transactions)</li>
            <li>Transaction history (related to staking or project participation)</li>
            <li>Contact details when you subscribe to our newsletter or updates</li>
          </ul>

          <h3 class="mt-4 text-xl font-semibold">Non-Personal Information</h3>
          <ul class="list-inside list-disc ml-5">
            <li>Device information (such as IP address, browser type)</li>
            <li>Usage data (including pages visited, time spent on the platform, referral sources)</li>
            <li>Cookies and tracking technologies for user experience improvement and analytics</li>
          </ul>

          <h2 class="mt-6 text-2xl font-semibold">2. Legal Basis for Processing Your Data</h2>
          <p class="mt-2 text-lg">We process your personal data based on the following legal grounds:</p>
          <ul class="list-inside list-decimal ml-5">
            <li>Consent: When you provide consent to collect and use your data (e.g., for marketing communications).</li>
            <li>Performance of a Contract: To fulfill services you request, such as enabling participation in Web3 project launches.</li>
            <li>Legitimate Interests: To improve our platform, secure transactions, and better serve our users.</li>
            <li>Compliance with Legal Obligations: To adhere to applicable laws and regulatory requirements.</li>
          </ul>

          <h2 class="mt-6 text-2xl font-semibold">3. How We Use Your Information</h2>
          <p class="mt-2 text-lg">We may use your information for purposes such as:</p>
          <ul class="list-inside list-disc ml-5">
            <li>Providing access to the BOOST platform, including Web3 project launches and social features.</li>
            <li>Processing transactions such as staking and participation in launchpad projects.</li>
            <li>Improving platform functionality, user experience, and personalization.</li>
            <li>Sending updates, marketing communications, and relevant project notifications (with your consent).</li>
            <li>Ensuring security, fraud prevention, and legal compliance.</li>
          </ul>

          <h2 class="mt-6 text-2xl font-semibold">4. Cookies and Tracking Technologies</h2>
          <p class="mt-2 text-lg">BOOST uses cookies and similar tracking technologies to provide you with a better user experience and gather analytics data. You can control the use of cookies via your browser settings, but disabling cookies may limit some features of our platform. For more information, please refer to our Cookie Policy.</p>

          <h2 class="mt-6 text-2xl font-semibold">5. Sharing of Information</h2>
          <p class="mt-2 text-lg">We do not sell your personal information to third parties. We may share your information in the following circumstances:</p>
          <ul class="list-inside list-disc ml-5">
            <li>Service Providers: We work with trusted third-party service providers to facilitate transactions, analytics, and platform performance.</li>
            <li>Legal Compliance: We may disclose information where required by law, regulation, or legal proceedings.</li>
            <li>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, we may transfer your information.</li>
          </ul>

          <h2 class="mt-6 text-2xl font-semibold">6. Data Transfers (Cross-Border Transfers)</h2>
          <p class="mt-2 text-lg">BOOST operates globally, and your information may be transferred to and processed in countries other than your own. We ensure that any such transfers comply with applicable data protection laws, and we take steps to ensure that your data remains protected. For users in the European Economic Area (EEA), we rely on Standard Contractual Clauses (SCCs) or other mechanisms to ensure data protection during transfers.</p>

          <h2 class="mt-6 text-2xl font-semibold">7. Data Security</h2>
          <p class="mt-2 text-lg">We implement strict security protocols to protect your information from unauthorized access, alteration, or disclosure. We use industry-standard encryption and security measures, but no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>

          <h2 class="mt-6 text-2xl font-semibold">8. Retention of Information</h2>
          <p class="mt-2 text-lg">We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. After that period, your data will either be deleted or anonymized.</p>

          <h2 class="mt-6 text-2xl font-semibold">9. Your Rights</h2>
          <p class="mt-2 text-lg">Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul class="list-inside list-disc ml-5">
            <li>Access: The right to request access to your personal data.</li>
            <li>Correction: The right to correct any inaccurate or incomplete data.</li>
            <li>Deletion: The right to request that your data be erased.</li>
            <li>Restriction: The right to request that we restrict the processing of your data.</li>
            <li>Portability: The right to receive your personal data in a machine-readable format.</li>
          </ul>
          <p class="mt-2 text-lg">To exercise any of these rights, please contact us through Telegram or X. We will respond to your request within the timeframe required by applicable law.</p>

          <h2 class="mt-6 text-2xl font-semibold">10. Children’s Privacy</h2>
          <p class="mt-2 text-lg">BOOST does not knowingly collect personal information from children under the age of 16. If we become aware that we have inadvertently collected such information, we will take immediate steps to delete it. Parents or guardians who believe their child may have provided us with personal information should contact us through Telegram or X.</p>

          <h2 class="mt-6 text-2xl font-semibold">11. Third-Party Links</h2>
          <p class="mt-2 text-lg">Our platform may contain links to third-party websites or services that are not operated by BOOST. We have no control over these third-party sites, and their privacy practices may differ from ours. We encourage you to review the privacy policies of any third-party websites you visit.</p>

          <h2 class="mt-6 text-2xl font-semibold">12. Marketing Communications & Opt-Out</h2>
          <p class="mt-2 text-lg">With your consent, we may send you marketing communications regarding our products and services. If you prefer not to receive these communications, you may opt-out at any time by:</p>
          <ul class="list-inside list-disc ml-5">
            <li>Clicking the "unsubscribe" link in any email.</li>
            <li>Contacting us through Telegram or X.</li>
          </ul>
          <p class="mt-2 text-lg">We will respect your preferences and remove you from marketing lists as requested.</p>

          <h2 class="mt-6 text-2xl font-semibold">13. Changes to This Privacy Policy</h2>
          <p class="mt-2 text-lg">BOOST may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will notify you of any material changes by posting the updated policy on this page with an updated effective date. We encourage you to review this policy periodically to stay informed.</p>

          <h2 class="mt-6 text-2xl font-semibold">14. Contact Us</h2>
          <p class="mt-2 text-lg">If you have any questions or concerns about this Privacy Policy, please contact us through Telegram or X.</p>
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

export default Privacy