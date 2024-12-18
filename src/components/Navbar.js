import { useNavigate } from "react-router-dom"
import logoImage from '../resources/images/logo.png'
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import nav_bg from '../resources/images/nav_bg.png'
import boost_big2 from '../resources/images/boost_big2.png'


const Navbar = () => {

  const navigate = useNavigate();

  const [isMenuActive, setIsMenuActive] = useState(false);


  const connectWallet = () => {
    console.log("Connect to the wallet");
  }

  return (
    <div className="max-w-[1200px] w-full realtive z-[5000] max-h-full flex flex-row items-center justify-between py-[32px] sm:py-[8px] sm:mb-[5px]">

      {/* Navbar Menus */}
      <div className="flex flex-row relative z-[500] items-center justify-center gap-[24px] sm:gap-[8px]">
        <div className="cursor-pointer max-h-[48px]"><img className="max-w-[40px] max-h-[48px] sm:max-w-[30px] sm:max-h-[36px]" onClick={() => navigate('/')} src={logoImage} alt="" /></div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/')}>HOME</div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/stake')}>STAKE</div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/#faq')}>FAQ</div>
      </div>

      {/* Connect Wallat Button */}
      <div onClick={() => { connectWallet() }} className="sm:hidden px-[45px] sm:px-[8px] sm:text-[14px] cursor-pointer font-[700] py-[12px] sm:py-[4px] bg-[#FED73C] border-solid border-2 sm:border-[2px] border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
        CONNECT WALLET
      </div>

      <div className={`sm:flex hidden relative z-[1000] size-[32px] text-[18px] text-[#000000] rounded-[25px] items-center justify-center`} onClick={() => { setIsMenuActive(prev => !prev) }}>
        {isMenuActive ? <IoCloseSharp size={32} /> : <RxHamburgerMenu size={32} color="#000000" />}
      </div>

      <div className={`absolute w-full max-w-[1200px] z-[500] ${isMenuActive ? 'flex' : 'hidden'}  top-0 left-[0px] bg-[#ffffff] text-[#000000] h-[850px]`} >
        <div className="flex z-[600] relative flex-col w-full items-center justify-center gap-[24px] sm:gap-[24px]">
          <div className="cursor-pointer z-[500] max-h-[48px] mb-[54px]"><img className="max-w-[40px] max-h-[48px] sm:max-w-[60px] sm:max-h-[72px] sm:min-w-[60px] sm:min-h-[72px]" onClick={() => navigate('/')} src={boost_big2} alt="" /></div>
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#000000]" onClick={() => navigate('/')}>HOME</div>
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#000000]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#000000]" onClick={() => navigate('/stack')}>STACK</div>
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#000000]" onClick={() => navigate('/#faq')}>FAQ</div>
          <div onClick={() => { connectWallet() }} className="sm:flex hidden px-[45px] sm:px-[8px] sm:text-[14px] cursor-pointer font-[700] py-[12px] sm:py-[4px] bg-[#FED73C] border-solid border-2 sm:border-[2px] border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
            CONNECT WALLET
          </div>
          {/* <div className="absolute z-[-100]">
            <img className="h-[850px]" src={nav_bg} alt="" />
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default Navbar