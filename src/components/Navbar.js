import { useNavigate } from "react-router-dom"
import logoImage from '../resources/images/logo.png'
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {

  const navigate = useNavigate();

  const [isMenuActive, setIsMenuActive] = useState(false);


  const connectWallet = () => {
    console.log("Connect to the wallet");
  }

  return (
    <div className="max-w-[100vw] realtive z-[5000] max-h-full flex flex-row items-center justify-between py-[32px] sm:py-[8px] sm:mb-[5px]">

      {/* Navbar Menus */}
      <div className="flex flex-row relative z-[1000] items-center justify-center gap-[24px] sm:gap-[8px]">
        <div className=" cursor-pointer max-h-[48px]"><img className="max-w-[40px] max-h-[48px] sm:max-w-[30px] sm:max-h-[36px]" onClick={() => navigate('/')} src={logoImage} alt="" /></div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/')}>HOME</div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/stake')}>STAKE</div>
        <div className="sm:hidden cursor-pointer font-[700] sm:text-[12px]" onClick={() => navigate('/#faq')}>FAQ</div>
      </div>

      {/* Connect Wallat Button */}
      <div onClick={() => { connectWallet() }} className="sm:hidden px-[45px] sm:px-[8px] sm:text-[14px] cursor-pointer font-[700] py-[12px] sm:py-[4px] bg-[#FED73C] border-solid border-2 sm:border-[2px] border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
        CONNECT WALLET
      </div>

      <div className={`sm:flex hidden relative z-[1000]  size-[32px] text-[18px] bg-[#000000] text-[#ffffff] rounded-[25px] items-center justify-center`} onClick={() => { setIsMenuActive(prev => !prev) }}>
        {isMenuActive ? <IoCloseSharp /> : <RxHamburgerMenu />}
      </div>

      <div className={`absolute z-[500] ${isMenuActive ? 'flex' : 'hidden'} top-0 left-[0px] w-[100vw] bg-[#002452] h-[450px]`} >
        <div className="flex flex-col w-full items-center justify-center gap-[24px] sm:gap-[8px]">
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/')}>HOME</div>
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/launchpad')}>LAUNCHPAD</div>
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/stack')}>STACK</div>
          <div className="sm:flex hidden cursor-pointer font-[700] text-[18px] text-[#ffffff]" onClick={() => navigate('/#faq')}>FAQ</div>
          <div onClick={() => { connectWallet() }} className="sm:flex hidden px-[45px] sm:px-[8px] sm:text-[14px] cursor-pointer font-[700] py-[12px] sm:py-[4px] bg-[#FED73C] border-solid border-2 sm:border-[2px] border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]">
            CONNECT WALLET
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar