import { useState } from 'react'
import Incubate from '../resources/images/incubate.png'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const aboutSection = [
  "About",
  "Highlight",
  "Team",
  "VCs & Parnters"
]

const Overview = () => {

  const [selectedAbout, setSelectedAbout] = useState(0)

  const [openMenus, setOpenMenus] = useState([]);

  const handleMenuOpen = (index) => {
    setOpenMenus((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  return (
    <div className="flex flex-col px-[24px] sm:px-[0px] py-[24px] sm:py-[0px] sm:border-0 border-[1px] border-[#d9d9d9] max-w-[750px] rounded-[20px]">

      <div className="flex sm:hidden flex-row">
        {
          aboutSection.map((item, index) => {
            return (
              <div key={index} onClick={() => setSelectedAbout(index)} className={`px-[14px] cursor-pointer py-[6px] text-[14px] leading-[18px] font-[500] ${selectedAbout == index ? "text-[#26D7F3]" : ""}`}>{item}</div>
            )
          })
        }
      </div>

      {/* About */}
      <div className="pt-[32px] sm:hidden sm:pt-[16px] pb-[16px] px-[16px]">
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

      <div className='hidden w-full sm:flex flex-col gap-[12px]'>
        {
          aboutSection.map((section, index) => {
            return (
              <div key={index} onClick={() => handleMenuOpen(index)} className='flex flex-col rounded-[12px] w-full justify-between border-[1px] border-[#d9d9d9] px-[12px] py-[20px]'>
                <div className='flex flex-row w-full justify-between'>
                  <div className='flex text-[14px] leading-[18px] font-[700] text-[#26D7F3]' > {section} </div>
                  <div className="flex items-center justify-center">
                    {openMenus.includes(index) ? (
                      <FaChevronUp size={16} />
                    ) : (
                      <FaChevronDown size={16} />
                    )}
                  </div>
                </div>

                {/* content */}
                {openMenus.includes(index) && (
                  <>
                    {index === 0 && (
                      <div className="mt-[16px] flex flex-col gap-[16px]">

                        <div className='text-[20px] leading-[26px] font-[700] text-[#000000]'>
                          ABOUT THE PROJECT
                        </div>

                        <div className='flex flex-row gap-[6px]'>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#1F93FF] bg-[#C6E3FF]' >Crypto</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#948DFF] bg-[#D8D6FF]' >Metaverse</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#21C49E] bg-[#C4F8D3]' >KYC Required</div>
                        </div>

                        <div className='w-full h-[1px] bg-[#d9d9d9]'></div>

                        <div className='text-[14px] leading-[16px] font-[400] text-[#6A717D]'>
                          Safeforge is building the ultimate passive vehicle, bringing crypto-like returns with while minimising risk to initial capital. We do this by investing the proceeds from funding rate arbitrage into a decentralised, zero-knowledge, reputation driven strategy token. Our strategy token takes the best community-submitted trading strategies and wraps them into a single token.
                        </div>
                        <div className='text-[14px] leading-[16px] font-[400] text-[#6A717D]'>
                          Our expected returns range from 100%-150%, and as initial capital is only used for arbitrage, initial capital is exposed to zero market risk. Our team brings together the best from Academia (PhD), Institutional (Ex-Blackrock Global product manager), and Crypto (Ex-regional CEO of Huobi). Our product is under construction, with a target launch date of Q4 2024.
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="mt-[16px] flex flex-col gap-[16px]">

                        <div className='text-[20px] leading-[26px] font-[700] text-[#000000]'>
                          HIGHLIGHTED FEATURES
                        </div>

                        <div className='flex flex-row gap-[6px]'>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#1F93FF] bg-[#C6E3FF]' >Crypto</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#948DFF] bg-[#D8D6FF]' >Metaverse</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#21C49E] bg-[#C4F8D3]' >KYC Required</div>
                        </div>

                        <div className='w-full h-[1px] bg-[#d9d9d9]'></div>

                        <div className='text-[14px] leading-[16px] font-[400] text-[#6A717D]'>
                          The Safeforge Token (SAFU) is a utility token designed for the Safeforge ecosystem. Rewards and collateral will be paid in SAFU.
                        </div>
                        <div className='text-[14px] leading-[16px] font-[400] text-[#6A717D]'>
                          Safeforge automatically allocates funds into the best community submitted strategies. It does this using a decentralised reputation system based on a multi-armed bandit model. High performing signals are allocated more reputation, which leads to more funds.
                        </div>
                        <div className='text-[14px] leading-[16px] font-[400] text-[#6A717D]'>
                          The funds initially provided are placed through various funding rate arbitrage products, like Ethena, which have virtually zero market risk. The proceeds from these funds are then put into our strategy token.
                        </div>
                        <div className='text-[14px] leading-[16px] font-[400] text-[#6A717D]'>
                          Safeforge Rapid Litepaper: <a href="https://docsend.com/view/8rpuiyudbummwdwd" className='text-black underline-0 cursor-pointer'> https://docsend.com/view/8rpuiyudbummwdwd </a>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="mt-[16px] flex flex-col gap-[16px]">

                        <div className='text-[20px] leading-[26px] font-[700] text-[#000000]'>
                          OUR TEAM
                        </div>

                        <div className='flex flex-row gap-[6px]'>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#1F93FF] bg-[#C6E3FF]' >Crypto</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#948DFF] bg-[#D8D6FF]' >Metaverse</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#21C49E] bg-[#C4F8D3]' >KYC Required</div>
                        </div>

                        <div className='w-full h-[1px] bg-[#d9d9d9]'></div>

                        <div className="pb-[16px]">
                          <span className="text-[14px] leading-[16px] font-[700] text-[#222222]">Julian Kuan</span>,
                          <span className="text-[14px] leading-[16px] font-[700]"> CEO/Founder</span>
                          <br />
                          <p className="text-[14px] leading-[16px] font-[400]">PhD Economics candidate, expert in mechanism design and game theory, Drove PropTech startup from $1Mil to $25Mil ARR.</p>
                        </div>

                        <div className="pb-[16px]">
                          <span className="text-[14px] leading-[16px] font-[700] text-[#222222]">Clinton Yap</span>,
                          <span className="text-[14px] leading-[16px] font-[700]"> Chief Product Officer</span>
                          <br />
                          <p className="text-[14px] leading-[16px] font-[400]">Ex-BlackRock and Nubank (Brazil's $50Bn Unicorn). Expert in investments and product, Grew 2Mil new customers.</p>
                        </div>

                        <div className="pb-[16px]">
                          <span className="text-[14px] leading-[16px] font-[700] text-[#222222]">Zhern Lee</span>,
                          <span className="text-[14px] leading-[16px] font-[700]"> Chief Marketing Officer</span>
                          <br />
                          <p className="text-[14px] leading-[16px] font-[400]">Ex-CEO Huobi Malaysia, successfully built new localised crypto exchange business from day zero.</p>
                        </div>
                      </div>
                    )}

                    {index === 3 && (
                      <div className="mt-[16px] flex flex-col gap-[16px]">

                        <div className='text-[20px] leading-[26px] font-[700] text-[#000000]'>
                          VENTURE CAPITALISTS & PARTNERS
                        </div>

                        <div className='flex flex-row gap-[6px]'>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#1F93FF] bg-[#C6E3FF]' >Crypto</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#948DFF] bg-[#D8D6FF]' >Metaverse</div>
                          <div className='px-[16px] py-[4px] rounded-[4px] text-[12px] leading-[14px] font-[500] text-[#21C49E] bg-[#C4F8D3]' >KYC Required</div>
                        </div>

                        <div className='w-full h-[1px] bg-[#d9d9d9]'></div>

                        <div className="flex flex-row gap-[16px] justify-start items-center">
                          <img className="size-[64px] sm:size-[42px]" src={Incubate} alt="" />
                          <span className="w-[50%] sm:w-full text-[14px] leading-[20px] font-[700]">Graduate of Sydney University's Incubate Accelerator</span>
                        </div>

                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Overview