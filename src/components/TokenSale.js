import { useLocation, useNavigate } from 'react-router-dom'
import logoImage from '../resources/images/logo.png'


const TokenSale = () => {

  const navigate = useNavigate();

  const location = useLocation()

  console.log('location.path', location.pathname)


  return (
    <div>
      <div className="w-full bg-[#FFF9E9] px-[18.5px] py-[12px] rounded-[6px] max-w-[750px]">
        <div className="text-[#FFBD00] text-[10px]">
          Please connect wallet and set primary wallet in Profile section at least 24 hours prior to Early Pool Opening to be able to purchase in this IDO project.
        </div>
        <div className="text-[#6A717D] text-[10px]">
          Disclaimer: Only the primary wallet can purchase and claim tokens/withdraw fund in this IDO Project
        </div>
      </div>

      {/* Pool Panel */}
      <div className="flex flex-row py-[24px] gap-[20px] sm:overflow-scroll">

        <div className="px-[24px] py-[24px] min-w-[345px] border-[1px] rounded-[20px] bg-[#ffffff] border-[#d9d9d9]">

          <div className="flex flex-row items-center justify-start gap-[14px] pb-[14px]">
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[50px] bg-[#FF4DAA]">
              <img className="w-[16px] h-[20px]" src={logoImage} alt="" />
            </div>
            <span className="font-[800]">EARLY POOL</span>
          </div>

          <div className="pb-[12px]">
            <div className="text-[14px] leading-[18px] text-[#6A717D] font-[500]">Open Time</div>
            <div className="text-[14px] leading-[18px] text-[#222222] font-[700]">May 20, 2024 9:00 AM</div>
          </div>

          <div className="w-full h-[1px] bg-[#D9D9D9] mb-[12px]"></div>

          <div className="pb-[12px]">
            <div className="text-[14px] leading-[18px] text-[#6A717D] font-[500]">Size</div>
            <div className="text-[14px] leading-[18px] text-[#222222] font-[700]">$1,000,000</div>
          </div>

          <div className="w-full h-[1px] bg-[#D9D9D9] mb-[12px]"></div>

          <div className="">
            <div className="text-[14px] leading-[18px] text-[#6A717D] font-[500]">Value per Allocation</div>
            <div className="text-[14px] leading-[18px] text-[#222222] font-[700] mb-[16px]">TBD</div>
          </div>

          <div onClick={() => navigate(location.pathname + '/joinpool')} className="cursor-pointer w-full py-[10px] flex items-center justify-center leading-[20px] text-[#ffffff] bg-[#FF4DAA] rounded-[200px] text-[16px] font-[700]">
            JOIN POOL
          </div>


        </div>

        <div className="px-[24px] py-[24px] min-w-[345px] border-[1px] rounded-[20px] bg-[#ffffff] border-[#d9d9d9]">

          <div className="flex flex-row items-center justify-start gap-[14px] pb-[14px]">
            <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[50px] bg-[#706AD0]">
              <img className="w-[16px] h-[20px]" src={logoImage} alt="" />
            </div>
            <span className="font-[800]">OPEN POOL</span>
          </div>

          <div className="pb-[12px]">
            <div className="text-[14px] leading-[18px] text-[#6A717D] font-[500]">Open Time</div>
            <div className="text-[14px] leading-[18px] text-[#222222] font-[700]">May 21, 2024 10:00 AM</div>
          </div>

          <div className="w-full h-[1px] bg-[#D9D9D9] mb-[12px]"></div>

          <div className="pb-[12px]">
            <div className="text-[14px] leading-[18px] text-[#6A717D] font-[500]">Size</div>
            <div className="text-[14px] leading-[18px] text-[#222222] font-[700]">$2,000,000</div>
          </div>

          <div className="w-full h-[1px] bg-[#D9D9D9] mb-[12px]"></div>

          <div className="">
            <div className="text-[14px] leading-[18px] text-[#6A717D] font-[500]">Value per Allocation</div>
            <div className="text-[14px] leading-[18px] text-[#222222] font-[700] mb-[16px]">TBD</div>
          </div>

          {/* //! where does this button leads to ? */}
          <div className="w-full py-[10px] flex items-center cursor-pointer justify-center leading-[20px] text-[#ffffff] bg-[#706AD0] rounded-[200px] text-[16px] font-[700]">
            LEARN MORE
          </div>


        </div>
      </div>
    </div>
  )
}

export default TokenSale