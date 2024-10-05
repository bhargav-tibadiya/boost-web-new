import { useState } from 'react'
import Incubate from '../resources/images/incubate.png'

const aboutSection = [
  "About",
  "Highlight",
  "Team",
  "VCs & Parnters"
]

const Overview = () => {

  const [selectedAbout, setSelectedAbout] = useState(0)


  return (
    <div className="px-[24px] sm:px-[10px] py-[24px] sm:py-[10px] border-[1px] border-[#d9d9d9] max-w-[750px] rounded-[20px]">

      <div className="flex flex-row">
        {
          aboutSection.map((item, index) => {
            return (
              <div key={index} onClick={() => setSelectedAbout(index)} className={`px-[14px] cursor-pointer py-[6px] text-[14px] leading-[18px] font-[500] ${selectedAbout == index ? "text-[#26D7F3]" : ""}`}>{item}</div>
            )
          })
        }
      </div>

      {/* About */}
      <div className="pt-[32px] sm:pt-[16px] pb-[16px] px-[16px]">
        <div className="text-[24px] sm:text-[20px] leading-[30px] font-[700]">ABOUT THE PROJECT</div>
        <div className="flex flex-row gap-[6px] pt-[8px]">
          <div className="px-[16px] py-[4px] rounded-[4px] text-[#1F93FF] sm:text-[14px] bg-[#C6E3FF]">Crypto</div>
          <div className="px-[16px] py-[4px] rounded-[4px] text-[#948DFF] sm:text-[14px] bg-[#D8D6FF]">Metaverse</div>
          <div className="px-[16px] py-[4px] rounded-[4px] text-[#21C49E] sm:text-[14px] bg-[#C4F8D3]">KYC Required</div>
        </div>
        {
          (selectedAbout == 0) &&
          <div className="text-[16px] sm:text-[14px] leading-[24px] font-[400] text-[#6A717D] pt-[24px]">
            <p>
              Safeforge is building the ultimate passive vehicle, bringing crypto-like returns with while minimising risk to initial capital. We do this by investing the proceeds from funding rate arbitrage into a decentralised, zero-knowledge, reputation driven strategy token. Our strategy token takes the best community-submitted trading strategies and wraps them into a single token.
            </p>
            <br />
            <p>
              Our expected returns range from 100%-150%, and as initial capital is only used for arbitrage, initial capital is exposed to zero market risk. Our team brings together the best from Academia (PhD), Institutional (Ex-Blackrock Global product manager), and Crypto (Ex-regional CEO of Huobi). Our product is under construction, with a target launch date of Q4 2024.
            </p>
          </div>
        }
        {
          (selectedAbout == 1) &&
          <div className="text-[16px] sm:text-[14px] leading-[24px] font-[400] text-[#6A717D] pt-[24px]">
            <p>
              The Safeforge Token (SAFU) is a utility token designed for the Safeforge ecosystem. Rewards and collateral will be paid in SAFU.
            </p>
            <br />
            <p>
              Safeforge automatically allocates funds into the best community submitted strategies. It does this using a decentralised reputation system based on a multi-armed bandit model. High performing signals are allocated more reputation, which leads to more funds.
            </p>
            <br />
            <p>
              The funds initially provided are placed through various funding rate arbitrage products, like Ethena, which have virtually zero market risk. The proceeds from these funds are then put into our strategy token.
            </p>
            <br />
            <p>
              Safeforge Rapid Litepaper: <a className='underline' href="https://docsend.com/view/8rpuiyudbummwdwd">https://docsend.com/view/8rpuiyudbummwdwd</a>
            </p>
          </div>
        }
        {
          (selectedAbout == 2) &&
          <div className="text-[16px] sm:text-[14px] leading-[24px] font-[400] text-[#6A717D] pt-[24px]">

            <div className="pb-[16px]">
              <span className="font-[700] text-[#222222]">Julian Kuan</span>,
              <span className="font-[700]"> CEO/Founder</span>
              <br />
              <p>PhD Economics candidate, expert in mechanism design and game theory, Drove PropTech startup from $1Mil to $25Mil ARR.</p>
            </div>

            <div className="pb-[16px]">
              <span className="font-[700] text-[#222222]">Clinton Yap</span>,
              <span className="font-[700]"> Chief Product Officer</span>
              <br />
              <p>Ex-BlackRock and Nubank (Brazil's $50Bn Unicorn). Expert in investments and product, Grew 2Mil new customers.</p>
            </div>

            <div className="pb-[16px]">
              <span className="font-[700] text-[#222222]">Zhern Lee</span>,
              <span className="font-[700]"> Chief Marketing Officer</span>
              <br />
              <p>Ex-CEO Huobi Malaysia, successfully built new localised crypto exchange business from day zero.</p>
            </div>

          </div>
        }
        {
          (selectedAbout == 3) &&
          <div className="text-[16px] sm:text-[14px] leading-[24px] font-[700] text-[#222222] pt-[24px]">
            <div className="flex flex-row gap-[16px] justify-start items-center">
              <img className="size-[64px] sm:size-[42px]" src={Incubate} alt="" />
              <span className="w-[50%] sm:w-full">Graduate of Sydney University's Incubate Accelerator</span>
            </div>
          </div>
        }
      </div>

    </div>
  )
}

export default Overview