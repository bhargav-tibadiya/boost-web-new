
const Vesting = () => {
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

      <div className="flex flex-col gap-[20px] px-[24px] py-[24px] border-[1px] border-[#d9d9d9] max-w-[750px] rounded-[20px] mt-[24px]">
        <div className="text-[24px] sm:text-[20px] leading-[30px] font-[700] ">VESTING SCHEDULE</div>

        <div className="flex flex-row sm:!flex-col gap-[24px] sm:gap-[0px] justify-between w-full pb-[18px]">
          <div className="flex flex-col w-full">
            <div className="flex flex-row sm:!flex-col justify-between">
              <span className="text-[14px] leading-[18px] font-[400]">Vesting Schedule</span>
              <span className="text-[16px] leading-[20px] font-[700]">10% TGE, 1 mo. cliff...</span>
            </div>

            <div className="w-full h-[1px] bg-[#d9d9d9] my-[15px]"></div>

            <div className="flex flex-row sm:!flex-col justify-between">
              <span className="text-[14px] leading-[18px] font-[400]">Upfront Release (TGE)</span>
              <span className="text-[16px] leading-[20px] font-[700]">10% release at TBD.</span>
            </div>

            <div className="w-full h-[1px] bg-[#d9d9d9] my-[15px]"></div>

            <div className="flex flex-row sm:!flex-col justify-between">
              <span className="text-[14px] leading-[18px] font-[400]">Cliff</span>
              <span className="text-[16px] leading-[20px] font-[700]">30 days</span>
            </div>

          </div>

          <div className="hidden sm:flex w-full h-[1px] bg-[#d9d9d9] my-[15px]"></div>

          <div className="flex flex-col w-full">
            <div className="flex flex-row sm:!flex-col justify-between">
              <span className="text-[14px] leading-[18px] font-[400]">Vesting Frequency</span>
              <span className="text-[16px] leading-[20px] font-[700]">Per 30 days</span>
            </div>

            <div className="w-full h-[1px] bg-[#d9d9d9] my-[15px]"></div>

            <div className="flex flex-row sm:!flex-col justify-between">
              <span className="text-[14px] leading-[18px] font-[400]">Number of Release</span>
              <span className="text-[16px] leading-[20px] font-[700]">6</span>
            </div>

            <div className="w-full h-[1px] bg-[#d9d9d9] my-[15px]"></div>

            <div className="flex flex-row sm:!flex-col justify-between">
              <span className="text-[14px] leading-[18px] font-[400]">Total Duration</span>
              <span className="text-[16px] leading-[20px] font-[700]">180 days</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Vesting