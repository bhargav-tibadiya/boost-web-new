import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import RnFLogo from '../resources/images/r&f_logo.png'
import FaceBookIcon from '../resources/images/facebook_icon.png'
import InstagramIcon from '../resources/images/instagram_icon.png'
import WebIcon from '../resources/images/web_icon.png'
import ShareIcon from '../resources/images/share_icon.png'
import XIcon from '../resources/images/x_icon.png'
import logoImage from '../resources/images/logo.png'
import BuyNow from '../resources/images/buy_now.png'
import BuyBoostNow from '../resources/images/buy_boost_now.png'
import Gpay from '../resources/images/gpay.png'
import ApplePay from '../resources/images/applepay.png'
import JCB from '../resources/images/jcb.png'
import Amex from '../resources/images/amex.png'
import Discover from '../resources/images/discover.png'
import Master from '../resources/images/master.png'
import Visa from '../resources/images/visa.png'


import { BNBLogo, CARDLogo, USDTLogo } from "../resources/svg/Global"
import { useState } from "react"

const JoinPool = () => {

  const [selectedMethod, setSelectedMethod] = useState("BNB")

  const [usd, setUsd] = useState(0);
  const [safe, setSafe] = useState(0);
  const [isBuyTokenActive, setIsBuyTokenActive] = useState(false);
  const [isSaleActive, setIsSaleActive] = useState(false);



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

  return (
    <div className={`joinpool_container flex flex-col items-center justify-center w-full relative z-100 max-w-[100vw] overflow-hidden ${isBuyTokenActive ? "max-h-[100vh] overflow-hidden" : ""}`}>
      <div className="px-[120px] max-w-[1440px] sm:px-[20px] relative z-100">
        <Navbar />

        {/* Location Pane */}
        <div className="pb-[22px] sm:pb-[8px]">
          Launchpad / Projects / Safeforge
        </div>

        <div className="flex flex-row sm:!flex-col gap-[24px] sm:mb-[48px] justify-between">

          {/* Left Section */}
          <div className="flex flex-col sm:w-full w-[60%]">

            {/* Project Info Section */}
            <div className="flex flex-row sm:!flex-col gap-[16px] pb-[32px] sm:pb-[8px]">

              <div className="flex flex-row sm:flex-row gap-[16px] sm:gap-[8px]">

                {/* Project Logo */}
                <div className="h-[100%] flex items-center justify-center sm:items-start sm:justify-start">
                  <img className="w-[100px] h-[100px] min-w-[100px] sm:min-w-[32px] sm:size-[32px]" src={RnFLogo} alt="" />
                </div>

                {/* Project Details */}
                <div className="flex w-full flex-col sm:flex-row">
                  {/* Name and Tags */}
                  <div className="flex flex-row gap-[16px] items-center justify-center w-full">
                    <div className=" flex items-center text-[40px] sm:text-[30px] font-[Thunder] leading-[40px] w-full sm:leading-[36px] font-[700]">SAFEFORGE</div>
                    <div className=" flex flex-row sm:flex-row gap-[6px] justify-between items-center text-[14px] sm:text-[12px] w-full">
                      <span className="px-[16px] sm:leading-[12px] sm:px-[8px] py-[4px] sm:py-[4px] text-[8px] font-[500] text-[#ffffff] bg-[#26A17B] rounded-[4px]">Trading</span>
                      <span className="px-[16px] sm:leading-[12px] sm:px-[8px] py-[4px] sm:py-[4px] text-[8px] font-[500] text-[#ffffff] bg-[#1F93FF] rounded-[4px]">Crypto</span>
                      <span className="px-[16px] sm:leading-[12px] sm:px-[8px] py-[4px] sm:py-[4px] text-[8px] font-[500] text-[#ffffff] bg-[#948DFF] rounded-[4px]">Defi</span>
                    </div>
                  </div>

                  {/* Descitpion */}
                  <div className=" sm:hidden flex pt-[4px] pb-[12px] text-[14px] sm:text-[12px] font-[400]">
                    The crypto portfolio that continually improves.
                  </div>



                  {/* Socials */}
                  <div className="flex sm:hidden flex-row gap-[10px]">
                    <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={WebIcon} alt="" /></a>
                    <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={XIcon} alt="" /></a>
                    <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={FaceBookIcon} alt="" /></a>
                    <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={InstagramIcon} alt="" /></a>
                    <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={ShareIcon} alt="" /></a>
                  </div>

                </div>
              </div>
              <div className="sm:flex w-full items-center hidden pt-[4px] pb-[12px] text-[14px] sm:text-[12px] font-[400]">
                <div className="w-[50%] sm:text-[12px] leading-[16px]">The crypto portfolio that continually improves.</div>
                <div className="sm:flex w-[50%] hidden flex-row items-end justify-end gap-[10px]">
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={WebIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={XIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={FaceBookIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={InstagramIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={ShareIcon} alt="" /></a>
                </div>
              </div>

            </div>

            {/* Sale Timer Section */}
            <div className={`${isSaleActive ? 'sm:flex' : 'sm:hidden'} hidden flex-row sm:w-full items-center justify-between px-[20px] py-[20px] border-[1px] border-[#d9d9d9] rounded-[20px]`}>
              <span className="text-[10px] sm:w-[full] leading-[12px] font-[700] text-[#6A717D]">SALE ENDS IN</span>
              <span className="text-[18px] sm:w-[full] leading-[24px] font-[700] text-[#222222]">00 : 24H : 53M : 61S</span>
            </div>

            {/* Join Pool Insruction Section */}
            <div className={`${isSaleActive ? 'sm:hidden' : 'sm:flex'} flex !flex-row sm:!flex-col gap-[25px] p-[24px] border-[1px] border-[#d9d9d9] rounded-[18px]`}>

              <div className="flex flex-col w-full">
                <div className="text-[24px] sm:text-[20px] leading-[30px] sm:leading-[24px] font-[700] pb-[12px] sm:pb-[18px]">Don't forget to join the pool 24hrs in advance!</div>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-row gap-[8px]">
                    <div className="size-[20px] sm:min-h-[20px] sm:min-w-[20px] flex rounded-[50px] bg-[#26D7F3] justify-center items-center text-[14px] font-[700]">1</div>
                    <div className="text-[16px] sm:text-[14px] font-[400] leading-[20px]">Join the pool 24 hours before it starts</div>
                  </div>
                  <div className="flex flex-row gap-[8px]">
                    <div className="size-[20px] sm:min-h-[20px] sm:min-w-[20px] flex rounded-[50px] bg-[#26D7F3] justify-center items-center text-[14px] font-[700]">2</div>
                    <div className="text-[16px] sm:text-[14px] font-[400] leading-[20px]">Return to this page on the specified launch date and time</div>
                  </div>
                  <div className="flex flex-row gap-[8px]">
                    <div className="size-[20px] sm:min-h-[20px] sm:min-w-[20px] flex rounded-[50px] bg-[#26D7F3] justify-center items-center text-[14px] font-[700]">3</div>
                    <div className="text-[16px] sm:text-[14px] font-[400] leading-[20px]">Participate and buy token!</div>
                  </div>
                </div>
              </div>

              <div className="text-[16px] sm:w-full sm:text-center min-w-[175px] h-fit leading-[20px] font-[700] px-[40px] py-[12px] cursor-pointer bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm: min-w-[175px] h-fit leading-[20px] font-[700] px-[40px] py-[12px] cursor-pointer bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[3px_2px_0_0]">
                JOIN POOL
              </div>

              <div>

              </div>

            </div>

            {/* Early Pool Section Purchased Milestone */}
            <div className="flex flex-col px-[24px] py-[32px] border-[1px] mt-[24px] border-[#d9d9d9] rounded-[20px]">

              <div className="flex flex-row gap-[12px] justify-start items-center">
                <div className="size-[48px] bg-[#FF4DAA] rounded-[45px] flex justify-center items-center"><img className="w-[24px] h-[30px]" src={logoImage} alt="" /></div>
                <div className="text-[32px] leading-[40px] sm:text-[24px] sm:leading-[28px] font-[700]">EARLY POOL</div>
              </div>

              <div className="h-[1px] w-full bg-[#D9D9D9] my-[24px] sm:my-[16px]"></div>

              <div className="flex flex-row sm:!flex-col gap-[64px] sm:gap-[12px] mb-[24px] sm:mb-[12px]">
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[14px] leading-[18px] font-[700] text-[#6A717D] px-[8px]">TOTAL POOL</span>
                  <span className="text-[64px] sm:text-[32px] leading-[64px] sm:leading-[32px] font-[700] font-[Thunder] px-[8px]">$1,000,000</span>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[14px] leading-[18px] font-[700] text-[#6A717D] px-[8px]">TOTAL PURCHASED</span>
                  <span className="text-[64px] sm:text-[32px] leading-[64px] sm:leading-[32px] font-[700] font-[Thunder] px-[8px]">{isSaleActive ? '$367, 521' : 'N/A'}</span>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <div className="text-[16px] leading-[20px] font-[400] text-[#6A717D] px-[8px]">Timeline: </div>
                <div className="flex flex-col sm:flex-row sm:gap-[15px]">
                  <div className="flex flex-row sm:!flex-col items-center justify-between w-full sm:w-[20px] h-[20px] sm:h-[125px] bg-[#F2F2F2] rounded-[500px] border-[#d9d9d9] border-[1px] box-border px-[4px] sm:px-0 sm:py-[4px]">
                    <div className="bg-gradient-to-br from-[#ACFFB7] via-[#0BCAFF] to-[#1F93FF] size-[12px] opacity-40 rounded-[500px]"></div>
                    <div className="bg-gradient-to-br from-[#ACFFB7] via-[#0BCAFF] to-[#1F93FF] size-[12px] opacity-40 rounded-[500px]"></div>
                    <div className="bg-gradient-to-br from-[#ACFFB7] via-[#0BCAFF] to-[#1F93FF] size-[12px] opacity-40 rounded-[500px]"></div>
                    <div className="bg-gradient-to-br from-[#ACFFB7] via-[#0BCAFF] to-[#1F93FF] size-[12px] opacity-40 rounded-[500px]"></div>
                  </div>
                  <div className="hello flex flex-row sm:!flex-col sm:justify-between sm:items-start items-center justify-between w-full px-[8px] mt-[6px]">
                    <div className="flex flex-col sm:flex-row sm:gap-[6px] min-w-[125px]">
                      <span className="text-[12px] leading-[16px] text-left sm:!text-left font-[700] text-[#6A717D]">Early Pool Starts</span>
                      <span className="text-[12px] leading-[16px] text-left sm:!text-left font-[400] text-[#6A717D]">2024-05-20 9AM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-[6px] min-w-[125px]">
                      <span className="text-[12px] leading-[16px] text-center sm:!text-left font-[700] text-[#6A717D]">Early Pool Ends</span>
                      <span className="text-[12px] leading-[16px] text-center sm:!text-left font-[400] text-[#6A717D]">2024-05-21 8AM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-[6px] min-w-[125px]">
                      <span className="text-[12px] leading-[16px] text-center sm:!text-left font-[700] text-[#6A717D]">Airdrop Tokens</span>
                      <span className="text-[12px] leading-[16px] text-center sm:!text-left font-[400] text-[#6A717D]">TBA</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:gap-[6px] min-w-[125px]">
                      <span className="text-[12px] leading-[16px] text-right sm:!text-left font-[700] text-[#6A717D]">Listing Time</span>
                      <span className="text-[12px] leading-[16px] text-right sm:!text-left font-[400] text-[#6A717D]">TBA</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className={`${isSaleActive ? 'opacity-100' : 'opacity-40'} sm:flex hidden px-[20px] py-[20px] sm:p-[10px] max-w-[550px] bg-custom-radial bg-custom-linear rounded-[64px] sm:rounded-[40px] mt-[70px] sm:mt-[25px] bg-blend-overlay relative border-[2.73px] border-solid before:absolute before:inset-0 before:bg-transparent before:border-[2.73px] before:border-transparent before:rounded-[inherit] before:bg-radial-gradient before:from-white/30 before:to-transparent before:opacity-50 before:z-[-1]`}>
              <div className="flex flex-col items-center justify-center py-[48px] px-[32px] sm:py-[15px] sm:px-[15px] rounded-[48px] sm:rounded-[32px] bg-[#ffffff] sm:max-w-[100%]">

                <img className="" src={BuyNow} alt="" />

                <span className="text-[14px] leading-[20px] font-[500] text-[#6A717D] pt-[5px] pb-[8px]">Choose your currency</span>

                <div onClick={() => setSelectedMethod("BNB")} className={`flex flex-row ${selectedMethod == "BNB" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#EEA61B] w-[50%] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#DB950E] rounded-[100px] shadow-[#DB950E] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px]"><BNBLogo /></div>
                  <div className="text-[16px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">BNB</div>
                </div>
                <div onClick={() => setSelectedMethod("USDT")} className={`flex flex-row ${selectedMethod == "USDT" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#30B68C] w-[50%] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#26A17B] rounded-[100px] shadow-[#26A17B] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px] relative after:absolute after:w-[12px] after:h-[12px] after:top-[0px] after:right-[-5px] z-10 after:bg-[url('./resources/images/ether.svg')]"><USDTLogo /></div>
                  <div className="text-[16px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">USDT(ERC20)</div>
                </div>
                <div onClick={() => setSelectedMethod("$")} className={`flex flex-row ${selectedMethod == "$" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#4C69DA] w-[50%] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#3658DA] rounded-[100px] shadow-[#3658DA] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px]"><CARDLogo /></div>
                  <div className="text-[16px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">CARD</div>
                </div>

                <span className="text-[16px] leading-[24px] font-[700] py-[8px] mt-[12px]">1 $SAFE= $0.05 USD</span>

                <div className="flex flex-col items-center gap-4 p-4">
                  <div className="flex flex-col items-center w-full">
                    <label className="text-lg font-semibold mb-1">USD you pay</label>
                    <input
                      type="number"
                      value={usd}
                      onChange={handleUsdChange}
                      className="w-64 p-2 rounded-md bg-gray-100 text-center text-xl"
                    />
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <label className="text-lg font-semibold mb-1">$SAFE you receive</label>
                    <input
                      type="number"
                      value={safe}
                      onChange={handleSafeChange}
                      className="w-64 p-2 rounded-md bg-gray-100 text-center text-xl"
                    />
                  </div>
                </div>

                <div onClick={() => setIsBuyTokenActive(true)} className="text-[16px] min-w-[175px] w-[100%] text-center h-fit mt-[25px] cursor-pointer leading-[20px] font-[700] px-[40px] py-[10px] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
                  BUY $SAFE TOKEN
                </div>

              </div>
            </div>

            {/* Project Details Section */}
            <div className="flex flex-col px-[24px] py-[32px] border-[1px] mt-[24px] mb-[125px] sm:mb-[25px] border-[#d9d9d9] rounded-[20px]">


              <div className="flex flex-col gap-[16px]">

                <span className="text-[14px] leading-[18px] sm:mb-[16px] font-[700] text-[#6A717D]">PROJECT DETAILS</span>

                <div className="flex flex-row gap-[40px] sm:gap-[12px] sm:!flex-col">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-[6px]">
                    <span className="text-[16px] leading-[20px] font-[400] text-[#6A717D]">Fundraise Goal</span>
                    <span className="text-[32px] leading-[32px] sm:text-[24px] sm:leading-[26px] font-[600] font-[Thunder] text-[#222222]">$3,000,000</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-[6px]">
                    <span className="text-[16px] leading-[20px] font-[400] text-[#6A717D]">Token Address</span>
                    <span className="text-[32px] leading-[32px] sm:text-[24px] sm:leading-[26px] font-[600] font-[Thunder] text-[#222222]">TBA</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-[6px]">
                    <span className="text-[16px] leading-[20px] font-[400] text-[#6A717D]">Raising On</span>
                    <span className="text-[32px] leading-[32px] sm:text-[24px] sm:leading-[26px] font-[600] font-[Thunder] text-[#222222]">TBA</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-[6px]">
                    <span className="text-[16px] leading-[20px] font-[400] text-[#6A717D]">Raising In</span>
                    <span className="text-[32px] leading-[32px] sm:text-[24px] sm:leading-[26px] font-[600] font-[Thunder] text-[#222222]">TBA</span>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-[#D9D9D9] my-[32px] sm:my-[12px]"></div>

                <span className="text-[14px] leading-[18px] font-[700] text-[#6A717D] mb-[8px]">RISK REMINDER</span>

                <ul className="list-disc box-border px-[24px] text-[14px] leading-[20px] font-[400] text-[#6A717D]">
                  <li>Be aware that some projects might have technological, operational, or other deficiencies. Please proceed with caution and ensure you fully understand the project before participating.</li>
                  <li>The value of the project you support could fluctuate significantly due to market conditions or other factors.</li>
                  <li>You may encounter restrictions on withdrawing your participation from the project due to its underlying technology or issues related to the MEXC platform</li>
                </ul>


              </div>

            </div>


          </div>

          {/* Right Section */}
          <div className="flex flex-col w-[35%] sm:w-full">

            {/* Sale Timer Section */}
            <div className={`${isSaleActive ? 'sm:hidden' : 'sm:hidden'} flex flex-row sm:!flex-col sm:w-full items-center justify-between px-[20px] py-[20px] border-[1px] border-[#d9d9d9] rounded-[20px]`}>
              <span className="text-[14px] sm:w-[full] leading-[18px] font-[700] text-[#6A717D]">SALE ENDS IN</span>
              <span className="text-[24px] sm:w-[full] leading-[70px] font-[700] text-[#222222]">00 : 24H : 53M : 61S</span>
            </div>

            {/* Buy Token Section */}
            <div className="sm:hidden flex px-[20px] py-[20px] sm:p-[10px] max-w-[550px] bg-custom-radial bg-custom-linear rounded-[64px] mt-[70px] sm:mt-[25px] bg-blend-overlay relative p-4 border-[2.73px] border-solid before:absolute before:inset-0 before:bg-transparent before:border-[2.73px] before:border-transparent before:rounded-[inherit] before:bg-radial-gradient before:from-white/30 before:to-transparent before:opacity-50 before:z-[-1]">
              <div className="flex w-full flex-col items-center justify-center py-[48px] px-[32px] sm:py-[24px] sm:px-[16px] rounded-[48px] bg-[#ffffff]">

                <img className="" src={BuyNow} alt="" />

                <span className="text-[14px] leading-[20px] font-[500] text-[#6A717D] pt-[5px] pb-[8px]">Choose your currency</span>

                <div onClick={() => setSelectedMethod("BNB")} className={`flex flex-row ${selectedMethod == "BNB" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#EEA61B] w-[50%] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#DB950E] rounded-[100px] shadow-[#DB950E] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px]"><BNBLogo /></div>
                  <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">BNB</div>
                </div>
                <div onClick={() => setSelectedMethod("USDT")} className={`flex flex-row ${selectedMethod == "USDT" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#30B68C] w-[50%] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#26A17B] rounded-[100px] shadow-[#26A17B] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px] relative after:absolute after:w-[12px] after:h-[12px] after:top-[0px] after:right-[-5px] z-10 after:bg-[url('./resources/images/ether.svg')]"><USDTLogo /></div>
                  <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">USDT(ERC20)</div>
                </div>
                <div onClick={() => setSelectedMethod("$")} className={`flex flex-row ${selectedMethod == "$" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] py-[6px] mb-[14px] bg-[#4C69DA] w-[50%] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#3658DA] rounded-[100px] shadow-[#3658DA] shadow-[6px_5px_0_0] `}>
                  <div className="min-h-[28px] min-w-[28px]"><CARDLogo /></div>
                  <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">CARD</div>
                </div>

                <span className="text-[14px] leading-[20px] font-[500] text-[#6A717D] pt-[5px] pb-[8px]">We accept the following payment methods</span>

                <div className="flex flex-col gap-[6px]">
                  <div className="flex flex-row gap-[8px] items-center justify-center">
                    <img src={Visa} alt="" />
                    <img src={Master} alt="" />
                    <img src={Discover} alt="" />
                    <img src={Amex} alt="" />
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-center">
                    <img src={JCB} alt="" />
                    <img src={ApplePay} alt="" />
                    <img src={Gpay} alt="" />
                  </div>
                </div>

                <span className="text-[16px] leading-[24px] font-[700] py-[8px] mt-[12px]">1 $SAFE= $0.05 USD</span>

                <div className="flex flex-col items-center gap-4 p-4">
                  <div className="flex flex-col items-center w-full">
                    <label className="text-lg font-semibold mb-1">USD you pay</label>
                    <input
                      type="number"
                      value={usd}
                      onChange={handleUsdChange}
                      className="w-64 p-2 rounded-md bg-gray-100 text-center text-xl"
                    />
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <label className="text-lg font-semibold mb-1">$SAFE you receive</label>
                    <input
                      type="number"
                      value={safe}
                      onChange={handleSafeChange}
                      className="w-64 p-2 rounded-md bg-gray-100 text-center text-xl"
                    />
                  </div>
                </div>

                <div onClick={() => setIsBuyTokenActive(true)} className="text-[16px] min-w-[175px] w-[75%] text-center h-fit mt-[25px] cursor-pointer leading-[20px] font-[700] px-[40px] py-[12px] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
                  BUY $SAFE TOKEN
                </div>

              </div>
            </div>

          </div>

        </div>

        <Footer />
      </div>

      <div onClick={() => setIsBuyTokenActive(false)} className={`absolute flex flex-col gap-[25px] sm:gap-[15px] items-center sm:justify-center   justify-center w-[100%] h-[100vh] top-0 bg-[#000000B8] ${isBuyTokenActive ? "flex" : "hidden"}`}>
        <div className="font-[700] text-[32px] sm:text-[20px] leading-[40px] sm:leading-[24px] sm:mt-[10px] text-center max-w-[500px] sm:max-w-[350px] text-[#ffffff]">
          You need more $BOOST so you can participate and buy tokens!
        </div>

        {/* Buy Token Section */}
        <div onClick={(e) => { e.stopPropagation() }} className="px-[20px] py-[20px] sm:p-[10px] bg-custom-radial bg-custom-linear rounded-[64px] sm:rounded-[40px] min-w-[550px] sm:min-w-[300px] sm:max-w-[350px] bg-blend-overlay relative sm:p-[15px] border-[2.73px] border-solid before:absolute before:inset-0 before:bg-transparent before:border-[2.73px] before:border-transparent before:rounded-[inherit] before:bg-radial-gradient before:from-white/30 before:to-transparent before:opacity-50 before:z-[-1]">
          <div className="flex flex-col items-center justify-center py-[48px] px-[32px] sm:py-[24px] sm:px-[16px] rounded-[48px] sm:rounded-[32px] bg-[#ffffff]">

            <img className="sm:w-[223px] sm:h-[48px]" src={BuyBoostNow} alt="" />

            <span className="text-[14px] leading-[20px] font-[500] text-[#6A717D] pt-[5px] pb-[8px]">Choose your currency</span>

            <div onClick={() => setSelectedMethod("BNB")} className={`flex flex-row ${selectedMethod == "BNB" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] sm:px-[8px] py-[6px] sm:py-[3px] mb-[14px] sm:mb-[5px] bg-[#EEA61B] w-[60%] sm:w-[75%] rounded-[100px] cursor-pointer border-solid border-2 border-[#DB950E] shadow-[#DB950E] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0_#DB950E] `}>
              <div className="min-h-[28px] min-w-[28px] sm:min-h-[22px] sm:min-w-[22px]"><BNBLogo /></div>
              <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">BNB</div>
            </div>
            <div onClick={() => setSelectedMethod("USDT")} className={`flex flex-row ${selectedMethod == "USDT" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] sm:px-[8px] py-[6px] sm:py-[3px] mb-[14px] sm:mb-[5px] bg-[#30B68C] w-[60%] sm:w-[75%] cursor-pointer border-solid border-2 border-[#26A17B] rounded-[100px] shadow-[#26A17B] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0_#26A17B] `}>
              <div className="min-h-[28px] min-w-[28px] sm:min-h-[22px] sm:min-w-[22px] relative after:absolute after:w-[12px] after:h-[12px] after:top-[0px] after:right-[-5px] z-10 after:bg-[url('./resources/images/ether.svg')]"><USDTLogo /></div>
              <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">USDT(ERC20)</div>
            </div>
            <div onClick={() => setSelectedMethod("$")} className={`flex flex-row ${selectedMethod == "$" ? "opacity-[100%]" : "opacity-[32%]"} items-center justify-center px-[12px] sm:px-[8px] py-[6px] sm:py-[3px] mb-[14px] sm:mb-[5px] bg-[#4C69DA] w-[60%] sm:w-[75%] cursor-pointer border-solid border-2 border-[#3658DA] rounded-[100px] shadow-[#3658DA] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0_#3658DA] `}>
              <div className="min-h-[28px] min-w-[28px] sm:min-h-[22px] sm:min-w-[22px]"><CARDLogo /></div>
              <div className="text-[14px] text-center leading-[20px] font-[700] text-[#ffffff] w-[100%]">CARD</div>
            </div>

            <span className="text-[16px] sm:text-[14px] leading-[24px] sm:leading-[16px] font-[700] py-[8px] sm:py-[4px] mt-[12px] sm:mt-[20px]">1 BOOST = $0.005 USD</span>

            <div className="flex flex-row sm:!flex-col items-center gap-4 p-4">
              <div className="flex flex-col items-center w-[200px]">
                <label className="text-[14px] leading-[16px] font-[400] w-full flex items-start justify-start mb-1"><span className="font-[700]">{`${selectedMethod} `} </span>&nbsp;you Pay</label>
                <input
                  type="number"
                  value={usd}
                  onChange={handleUsdChange}
                  className="p-2 sm:p-1 rounded-md w-[200px] bg-gray-100 text-left text-[14px]"
                />
              </div>
              <div className="flex flex-col items-center w-[200px]">
                <label className="text-[14px] leading-[16px] font-[400] w-full flex items-start justify-start mb-1"><span className="font-[700]">BOOST</span>&nbsp;you Recieve</label>
                <input
                  type="number"
                  value={safe}
                  onChange={handleSafeChange}
                  className="p-2 sm:p-1 rounded-md w-[200px] bg-gray-100 text-left text-[14px]"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-[420px] sm:w-[200px]">
              <label className="text-[14px] leading-[16px] font-[400] w-full flex items-start justify-start mb-1"><span className="font-[600]">BOOST</span>&nbsp;Balanace</label>
              <div className="p-2 sm:p-1 rounded-md w-full bg-gray-100 text-left text-[14px] sm:w-[200px]">
                000
              </div>
            </div>

            <div onClick={() => setIsBuyTokenActive(true)} className="text-[16px] min-w-[175px] w-[75%] sm:w-full text-center h-fit mt-[25px] cursor-pointer leading-[20px] font-[700] px-[40px] sm:px-[10px] py-[12px] sm:py-[6px] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
              APPROVE PURCHASE
            </div>

          </div>
        </div>

      </div>
    </div >
  )
}

export default JoinPool