import Navbar from '../components/Navbar'

import BoostLaunchpad from "../resources/images/boost_10.png";
import Boost_3 from '../resources/images/boost_3.png'
import SafeForgeBGLive from "../resources/images/safeforge_bg.png";
import HyperionBG from "../resources/images/hyperion_bg.png";
import RFBG from "../resources/images/rf_bg.png";
import SafeForgeBG from "../resources/images/safeforge_soon.png";
import HyperionBGLive from "../resources/images/hyperion_live.png";
import RFBGLive from "../resources/images/noir_live.png";
import WebIcon from "../resources/images/web_icon.png";
import XIcon from "../resources/images/x_icon.png";
import FBIcon from "../resources/images/facebook_icon.png";
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const launchpadData = [
  {
    name: 'Safeforge',
    desc: "Safeforge is building the ultimate passive vehicle, wrapping the best trading strategies into a single portfolio. This is done by a reputation-driven system creating a decentralised hedge fund, allocating funds to the best signals.<br /><br />The team brings together the best from Academia (PhD), Institutional (Ex-Blackrock Global product manager), and Crypto (Ex-regional CEO of Huobi).",
    raise: '$500,000',
    price: 'TBA',
    date: 'TBA',
    pic: SafeForgeBG,
    piclive: SafeForgeBGLive,
    cat1: 'Trading',
    cat2: 'Crypto',
    cat3: 'Defi',
    isLive: false,
    path: '/launchpad/project/safeforge'
  },
  {
    name: 'Hyperion',
    desc: 'Hyperion Cars is a dynamic investment platform offering fractional ownership in high-growth assets and iconic motor vehicles.',
    raise: 'TBA',
    price: 'TBA',
    date: 'TBA',
    pic: HyperionBG,
    piclive: HyperionBGLive,
    cat1: 'Physical',
    cat2: 'NFT',
    cat3: 'Marketplace',
    isLive: false,
    path: '/launchpad/project/safeforge'

  },
  // {
  //   name: 'RF',
  //   desc: 'RF’s iconic pieces  are now entering the metaverse as they enter the digital age on a new journey into Web3 and redefine the realm of luxury eyewear.',
  //   raise: 'TBA',
  //   price: 'TBA',
  //   date: 'TBA',
  //   pic: RFBG,
  //   piclive: RFBGLive,
  //   cat1: 'Physical',
  //   cat2: 'NFT',
  //   cat3: 'Marketplace',
  //   isLive: false,
  //   path: '/launchpad/project/safeforge'
  // },
]


const Launchpad = () => {

  const navigate = useNavigate();


  return (
    <div className="stack_container w-full relative z-100 overflow-hidden">

      <div className="px-[120px] max-w-w-[1200px] flex flex-col items-center justify-center sm:px-[20px] relative z-100">
        <Navbar />

        <div className="w-full flex flex-col items-center justify-between">
          <div className='w-full flex flex-row sm:!flex-col max-w-[1200px] items-center sm:items-start justify-start'>

            <div className="flex sm:w-full sm:justify-start items-start max-w-[1200px]">
              <img src={BoostLaunchpad} alt="" className="w-full max-w-[250px] sm:max-w-[150px] py-[16px]" />
            </div>

            <div className='!w-[1px] !min-w-[1px] sm:hidden h-full min-h-[64px] border-[#26D7F3] border-l-[1px] ml-[16px] px-[8px]'></div>

            <div className="text-[18px] sm:text-[16px] leading-[28px] sm:text-justify sm:leading-[20px] font-[400] text-[#000000] max-w-[650px]">
              BOOST Launchpad democratises access to new Web3 project launches.  Participate in exciting projects exclusively on our platform.
            </div>
          </div>

          <div className="flex flex-row items-center sm:!flex-col justify-center gap-[25px] mt-[46px] mb-[256px] sm:mb-[32px]" >

            {
              launchpadData.map((project, index) => {
                return (
                  <div key={index} className="w-[380px] sm:w-[325px] min-h-[675px] bg-white rounded-[16px] shadow-lg flex flex-col justify-between p-[16px] space-y-[16px]">
                    <div className="flex flex-col w-full h-full">
                      {/* <!-- Header Section --> */}
                      <div className="flex justify-between items-center">
                        <img src={`${project.isLive ? project.piclive : project.pic}`} alt="Logo" className="w-full" />
                      </div>

                      {/* <!-- Card Body --> */}
                      <div className="flex flex-row items-center justify-between mt-[16px]">
                        <h2 className="font-[Thunder] text-[40px] sm:text-[32px] leading-[42px] font-[600]">{project.name}</h2>
                        <div className="flex space-x-[8px] mt-[8px]">
                          <span className="bg-[#26A17B] text-white px-[8px] py-[4px] rounded-[2px] text-[10px] leading-[12px]">{project.cat1}</span>
                          <span className="bg-[#1F93FF] text-white px-[8px] py-[4px] rounded-[2px] text-[10px] leading-[12px]">{project.cat2}</span>
                          <span className="bg-[#948DFF] text-white px-[8px] py-[4px] rounded-[2px] text-[10px] leading-[12px]">{project.cat3}</span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[4px] items-start justify-start">
                        <div className="size-[20px] flex items-center justify-center"><img className="size-[16px]" src={WebIcon} alt="" /></div>
                        <div className="size-[20px] flex items-center justify-center"><img className="size-[16px]" src={XIcon} alt="" /></div>
                        <div className="size-[20px] flex items-center justify-center"><img className="size-[16px]" src={FBIcon} alt="" /></div>
                      </div>

                      {/* <!-- Description --> */}
                      <p className="text-[#222222] text-[12px] leading-[14px] font-[400] mt-[16px] pb-[16px]">
                        {project.desc}
                      </p>


                      {/* <!-- Funding Information --> */}
                      <div className="border-t border-gray-300 pt-[16px]">
                        <div className="flex justify-between">
                          <div>
                            <span className="text-gray-400 text-[12px]">Total Raise</span>
                            <p className="font-bold text-[14px]">{project.raise}</p>
                          </div>

                        </div>
                        <div className="flex justify-sytart gap-[32px]">
                          <div className="min-w-[90px]">
                            <span className="text-gray-400 text-[12px]">Launch Price</span>
                            <p className="font-bold text-[14px]">{project.price}</p>
                          </div>
                          <div className="min-w-[90px]">
                            <span className="text-gray-400 text-[12px]">Launching On</span>
                            <p className="font-bold text-[14px]">{project.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full h-full gap-[10px]">
                      {/* <!-- See Details Button --> */}
                      <div className="flex justify-center">
                        {
                          project.isLive
                            ?
                            <button onClick={() => navigate(project.path)} className="bg-[#26D7F3] text-[#002452] w-full px-[16px] py-[8px] rounded-[8px] text-[14px] leading-[16px] font-[500]">See Details</button>
                            :
                            <button className="bg-[#6A717D3D] text-[#6A717D] w-full px-[16px] py-[8px] rounded-[8px] text-[14px] leading-[16px] font-[500]">See Details</button>
                        }
                      </div>

                      {/* <!-- Registration Countdown --> */}

                      {
                        project.isLive ?
                          <div className="bg-[#9CFF87] text-[#002452] px-[16px] py-[8px] rounded-[8px] text-center text-[14px] leading-[16px] font-[500] flex flex-row sm:!flex-col w-full h-full items-center justify-between ">
                            <span> Registration Ends in </span> <span className="flex items-center justify-center text-[32px] sm:text-[24px] sm:leading-[26px] font-[Thunder] leading-[38px] font-[500]">03D 21H 56M 07S</span>
                          </div>
                          :
                          <div className="bg-[#6A717D3D] text-[#6A717D] px-[16px] py-[8px] rounded-[8px] text-center text-[14px] leading-[16px] font-[500] flex flex-row w-full h-full items-center justify-between ">
                            <span className="flex items-center w-full justify-center text-[32px] font-[Thunder] leading-[38px] font-[500]">TBA</span>
                          </div>
                      }
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-[1200px] m-auto bg-[#FFFfff] relative z-[100] items-center text-[40px] leading-[50px] font-[700] mt-[160px] sm:mt-[160px] w-full mb-[56px] px-[70px] sm:px-[14px] py-[56px] sm:py-[24px] rounded-[32px] sm:rounded-[16px] shadow-[0px_0.08px_2.74px_0px_#99A1B00F,0px_0.2px_6.58px_0px_#99A1B016,0px_0.38px_12.4px_0px_#99A1B01B,0px_0.67px_22.11px_0px_#99A1B020,0px_1.25px_41.36px_0px_#99A1B026,0px_3px_99px_0px_#99A1B036]">
          <h2 className="text-center w-[85%] sm:w-full sm:text-[18px] sm:leading-[24px] sm:font-[700]">
            Are you spearheading a project that's setting the next era of innovation?
          </h2>
          <p className="text-[#6A717D] text-[16px] sm:text-[12px] sm:leading-[18px] pt-[24px] w-[85%] sm:w-full pb-[40px] leading-[20px] font-[400] text-center">
            Contact us today to explore the launch possibilities with BOOST Ignition's collaborative incubation and funding solutions. Join the BOOST community—one of the most expansive and dynamic networks in the industry—and unlock a world of opportunities.
          </p>
          <div className="flex justify-center">
            <button className='px-[45px] sm:px-[15px] text-[20px] sm:text-[16px] leading-[24px] sm:leading-[20px] font-[700] py-[12px] sm:py-[6px] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]'>
              LAUNCH PROJECT
            </button>
          </div>
        </div>

        <Footer />

      </div>



    </div>
  )
}

export default Launchpad