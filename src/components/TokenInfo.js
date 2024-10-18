
const TokenInfo = () => {
  return (
    <div className="gap-[12px] max-w-[750px] flex flex-row sm:!flex-col">

      <div className="flex flex-col sm:justify-between gap-[8px] px-[24px] sm:px-[12px] py-[24px] sm:py-[12px] border-[1px] w-full border-[#d9d9d9] max-w-[750px] rounded-[20px] sm:rounded-[10px]">
        <span className="text-[14px] leading-[18px] font-[400]">Launch Price</span>
        <span className="text-[24px] leading-[30px] font-[700]">0.03</span>
      </div>

      <div className="flex flex-col sm:justify-between gap-[8px] px-[24px] sm:px-[12px] py-[24px] sm:py-[12px] border-[1px] w-full border-[#d9d9d9] max-w-[750px] rounded-[20px] sm:rounded-[10px]">
        <span className="text-[14px] leading-[18px] font-[400]">Current Price</span>
        <span className="text-[24px] leading-[30px] font-[700]">-</span>
      </div>

      <div className="flex flex-col sm:justify-between gap-[8px] px-[24px] sm:px-[12px] py-[24px] sm:py-[12px] border-[1px] w-full border-[#d9d9d9] max-w-[750px] rounded-[20px] sm:rounded-[10px]">
        <span className="text-[14px] leading-[18px] font-[400]">ATH</span>
        <span className="text-[24px] leading-[30px] font-[700]">-</span>
      </div>

    </div>
  )
}

export default TokenInfo