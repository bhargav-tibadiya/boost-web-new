import { useEffect, useState } from "react"
import logoImage from '../resources/images/logo.png'
import RnFLogo from '../resources/images/r&f_logo.png'
import FaceBookIcon from '../resources/images/facebook_icon.png'
import InstagramIcon from '../resources/images/instagram_icon.png'
import WebIcon from '../resources/images/web_icon.png'
import ShareIcon from '../resources/images/share_icon.png'
import DisplayPic from '../resources/images/display_pic.png'
import XIcon from '../resources/images/x_icon.png'
import TokenSale from "../components/TokenSale"
import Overview from "../components/Overview"
import Vesting from "../components/Vesting"
import TokenInfo from "../components/TokenInfo"
import RestrictedCountries from "../components/RestrictedCountries"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useNavigate, useParams } from "react-router-dom"

const slides = [
  DisplayPic,
  DisplayPic,
  DisplayPic
];

const panels = [
  "Token Sale",
  "Overview",
  "Vesting",
  "Token Info",
  "Restricted Countries"
]


const Project = () => {

  const [sliderPosition, setSliderPosition] = useState(0)
  const [selectedPanel, setSelectedPanel] = useState(0)

  const navigate = useNavigate()
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      navigate('/launchpad/project/safeforge');
    }
  }, [])


  const nextSlide = () => {
    setSliderPosition((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    // Set up interval to change slides every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(nextSlide, 3000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="stack_container relative z-100 max-w-[100vw] overflow-hidden">

      <div className="px-[120px] sm:px-[20px] relative z-100">

        <Navbar />

        {/* Location Pane */}
        <div className="pb-[22px] sm:pb-[8px]">
          Launchpad / Projects / Safeforge
        </div>


        {/* Project */}
        <div className="flex flex-row sm:!flex-col justify-between">

          {/* Left Part */}
          <div className="w-[60%] sm:w-full sm:mb-[15px]">

            {/* Project Info Section */}
            <div className="flex flex-row gap-[16px] pb-[32px]">

              {/* Project Logo */}
              <div className="h-[100%] flex items-center justify-center sm:items-start sm:justify-start">
                <img className="w-[100px] h-[100px] sm:size-[50px]" src={RnFLogo} alt="" />
              </div>

              {/* Project Details */}
              <div>
                {/* Name and Tags */}
                <div className="flex flex-row gap-[16px] items-center justify-center">
                  <div className=" flex items-center justify-center text-[40px] sm:text-[30px] font-[Thunder] leading-[40px] sm:leading-[36px] font-[700]">SAFEFORGE</div>
                  <div className="flex flex-row sm:flex-row gap-[6px] text-[14px] sm:text-[12px]">
                    <span className="px-[16px] sm:px-[8px] py-[4px] sm:py-[2px] text-[#FF7A00] bg-[#FFDAAF] rounded-[4px]">Coming Soon</span>
                    <span className="px-[16px] sm:px-[8px] py-[4px] sm:py-[2px] text-[#FF4DAA] bg-[#FFB9DD] rounded-[4px]">Private Sale</span>
                  </div>
                </div>

                {/* Descitpion */}
                <div className="pt-[4px] pb-[12px] text-[14px] sm:text-[12px] font-[400]">
                  The crypto portfolio that continually improves.
                </div>

                {/* Socials */}
                <div className="flex flex-row gap-[10px]">
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={WebIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={XIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={FaceBookIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={InstagramIcon} alt="" /></a>
                  <a className="pointer" href=""><img className="size-[20px] sm:size-[16px]" src={ShareIcon} alt="" /></a>
                </div>

              </div>

            </div>

            {/* Image Slider */}
            <div className="w-full h-[400px] sm:h-[200px] max-w-[750px] flex items-center justify-center bg-[#222222] rounded-[20px] sm:rounded-[10px] relative">

              <div className="w-full h-full overflow-hidden flex items-center justify-center">

                <div className="flex flex-row w-full h-full items-center justify-center">
                  <img className="object-cover rounded-[20px]" src={slides[sliderPosition]} alt={`Slide ${sliderPosition + 1}`} />
                </div>

                <div className="absolute bottom-[25px] left-[25px] sm:bottom-[10px] sm:left-[10px] flex flex-row gap-[10px] sm:gap-[5px]">
                  <div className={`size-[15px] sm:size-[8px] border-solid border-[1px] rounded-[100px] border-[#ffffff] z-[100] ${sliderPosition == 0 ? "bg-[#ffffff]" : ""}`}></div>
                  <div className={`size-[15px] sm:size-[8px] border-solid border-[1px] rounded-[100px] border-[#ffffff] z-[100] ${sliderPosition == 1 ? "bg-[#ffffff]" : ""}`}></div>
                  <div className={`size-[15px] sm:size-[8px] border-solid border-[1px] rounded-[100px] border-[#ffffff] z-[100] ${sliderPosition == 2 ? "bg-[#ffffff]" : ""}`}></div>
                </div>

              </div>
            </div>

            {/* Info Panel Tab */}
            <div className="flex flex-row gap-[5px] py-[16px] sm:mb-[10px] sm:overflow-scroll justify-start">

              {
                panels.map((panelItem, index) => {
                  return (
                    <div key={index} onClick={() => { setSelectedPanel(index) }} className={`px-[14px] sm:px-[8px] sm:text-[12px] font-[500] cursor-pointer py-[6px] sm:py-[3px] rounded-[4px] sm:flex sm:items-center sm:justify-center sm:text-center sm:min-w-fit ${index == selectedPanel ? "bg-[#6A717D] font-[700] text-[#ffffff]" : "text-[#6A717D]"}`}>{panelItem}</div>
                  )
                })
              }
            </div>

            {selectedPanel === 0 && <TokenSale />}
            {selectedPanel === 1 && <Overview />}
            {selectedPanel === 2 && <Vesting />}
            {selectedPanel === 3 && <TokenInfo />}
            {selectedPanel === 4 && <RestrictedCountries />}

          </div>

          {/* Right Part */}
          <div className="w-[35%] sm:w-full flex flex-col gap-[20px]">


            {/* Sale Timer */}
            <div className="flex flex-col px-[24px] py-[24px] w-full border-[#D9D9D9] border-[1px] rounded-[16px] bg-[#ffffff]">
              <div className="font-[700] text-[#6A717D] text-[14px] leading-[18px]">SALE STARTS IN</div>

              <div className="flex flex-row items-center justify-between">

                <div className="flex flex-row gap-[8px] py-[15px]">
                  <div className="flex items-center justify-center w-[24px] h-[24px] rounded-[50px] bg-[#FF4DAA]">
                    <img className="w-[12px] h-[15px]" src={logoImage} alt="" />
                  </div>
                  <div className="flex items-center justify-center font-[700] text-[16px] leading-[20px]">EARLY POOL</div>
                </div>

                <div>14D : 16H : 45M : 12S</div>

              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

              <div className="flex flex-row items-center justify-between">


                <div className="flex flex-row gap-[8px] py-[15px]">
                  <div className="flex items-center justify-center w-[24px] h-[24px] rounded-[50px] bg-[#706AD0]">
                    <img className="w-[12px] h-[15px]" src={logoImage} alt="" />
                  </div>
                  <div className="flex items-center justify-center font-[700] text-[16px] leading-[20px]">OPEN POOL</div>
                </div>

                <div>19D : 23H : 45M : 12S</div>

              </div>

            </div>

            {/* fund raising details */}
            <div className="flex flex-col px-[24px] py-[24px] w-full border-[#D9D9D9] border-[1px] rounded-[20px] bg-[#ffffff]">
              <div className="text-[14px] leading-[18px] font-[700] text-[#6A717D] pb-[16px]">RAISE DETAILS</div>
              <div className="font-[400] text-[#6A717D] text-[16px] leading-[20px]">Fundraise Goal:</div>
              <div className="flex flex-row justify-between text-[48px] font-[700] pb-[15px]">
                <div className="font-[Thunder] text-[48px] leading-[52px] font-[700]">3,000,000</div>
                <div className="text-gradient font-[Thunder] leading-[52px] text-[48px] font-[700]">0%</div>
              </div>

              <div className="font-[400] text-[#6A717D] text-[16px] leading-[20px]">Current Progress:</div>

              <div className="w-full h-[20px] rounded-[500px] bg-[#F2F2F2] mt-[8px] mb-[6px] border-solid border-[1px] border-[#D9D9D9]">
                <div className={`h-full w-[15%] relative progress-bar-gradient `}>
                </div>
              </div>

              <div className="flex flex-row justify-between mb-[40px]">
                <span>$0</span>
                <span>$3,000,000</span>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

              <div className="flex flex-col gap-[4px] my-[14px]">
                <span className="text-[16px] leading-[20px] text-[#6A717D] font-[400]">Token Address</span>
                <span className="text-[16px] leading-[20px] text-[#222222] font-[700]">TBA</span>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

              <div className="flex flex-row justify-between gap-[4px] my-[14px]">
                <span className="text-[16px] leading-[20px] text-[#6A717D] font-[400]">Price per Token</span>
                <span className="text-[16px] leading-[20px] text-[#222222] font-[700]">$0.05</span>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

              <div className="flex flex-row justify-between gap-[4px] my-[14px]">
                <span className="text-[16px] leading-[20px] text-[#6A717D] font-[400]">Raising on</span>
                <span className="text-[16px] leading-[20px] text-[#222222] font-[700]">TBA</span>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9]"></div>

              <div className="flex flex-row justify-between gap-[4px] my-[14px]">
                <span className="text-[16px] leading-[20px] text-[#6A717D] font-[400]">Raising in</span>
                <span className="text-[16px] leading-[20px] text-[#222222] font-[700]">TBA</span>
              </div>
            </div>

          </div>

        </div>


        {/* Launch Project Section */}
        <div className="flex flex-col justify-center bg-[#FFFfff] relative z-[100] items-center text-[40px] leading-[50px] font-[700] mt-[160px] sm:mt-[160px] w-full mb-[56px] px-[70px] sm:px-[14px] py-[56px] sm:py-[24px] rounded-[32px] sm:rounded-[16px] shadow-[0px_0.08px_2.74px_0px_#99A1B00F,0px_0.2px_6.58px_0px_#99A1B016,0px_0.38px_12.4px_0px_#99A1B01B,0px_0.67px_22.11px_0px_#99A1B020,0px_1.25px_41.36px_0px_#99A1B026,0px_3px_99px_0px_#99A1B036]">
          <h2 className="text-center w-[85%] sm:w-full sm:text-[22px] sm:leading-[26px]">
            Are you spearheading a project that's setting the next era of innovation?
          </h2>
          <p className="text-[#6A717D] text-[16px] sm:text-[14px] sm:leading-[16px] pt-[24px] w-[85%] sm:w-full pb-[40px] leading-[20px] font-[400] text-center">
            Contact us today to explore the launch possibilities with BOOST Ignition's collaborative incubation and funding solutions. Join the BOOST community—one of the most expansive and dynamic networks in the industry—and unlock a world of opportunities.
          </p>
          <div className="flex justify-center">
            <button className='px-[45px] sm:px-[15px] text-[20px] sm:text-[16px] leading-[24px] sm:leading-[20px] font-[700] py-[12px] sm:py-[6px] bg-[#FED73C] border-solid border-2 border-[#222222] rounded-[100px] shadow-[#222222] shadow-[6px_5px_0_0] sm:shadow-[3px_2px_0_0]'>
              LAUNCH PROJECT
            </button>
          </div>
        </div>


        {/* Footer */}
        <Footer />

      </div >
    </div>

  )
}



export default Project