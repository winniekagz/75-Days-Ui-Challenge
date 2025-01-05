import { Boxing, Gym2 } from "../../assets/images";
import CustomTypography from "../../components/uiComponents/Typography";
import { COLORS } from "../../constants/gym";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      {/* Left Side Content */}
      {/* <div className="col-span-2 flex flex-col items-center justify-center px-2 md:px-[15px] lg:pl-[48px] pr-3">
        <h1 className={CustomTypography({
            fontSize:'display',color:'fire'
        })}>Empower Your Fitness Journey: Book, Track, Achieve!</h1>
        <p className={CustomTypography({fontSize:'subTitle',color:'Secondary'})}>Join our gym platform to easily explore available classes, set your fitness goals, and track your progress. Whether you're a beginner or a pro, we provide all the tools you need to stay motivated and achieve your personal fitness milestones.</p>
   <div className=""></div>
     
      </div> */}
      <div className="group/s col-span-2 px-2 md:px-[15px] lg:pl-[48px] pr-3">
        <div className="relative">
          <div className="absolute top-0 right-0 bottom-0 left-0 hidden xl:grid grid-cols-2 gap-[200px]">
            <div className=""></div>
            <div className="relative">
              <div
                className={`${CustomTypography({
                  color: "fire",
                })} absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.7s] delay-[.3s] transition-all duration-[.3s]`}
              ></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-Primary group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.6s] delay-[.4s] transition-all duration-[.3s]"></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.5s] delay-[.5s] transition-all duration-[.3s]"></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-Primary group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.4s] delay-[.6s] transition-all duration-[.3s]"></div>
              <img
                className="absolute top-0 left-0 w-full h-full object-cover object-center group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.3s] delay-[.7s] transition-all duration-[.3s]"
                src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/image-slider.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative  mx-auto px-[15px] py-[100px] ">
            <div className="font-bold leading-[1] uppercase">
              <div className="font-poppins break-words gap-2 items-center flex flex-wrap justify-start text-center">
              
                <div className="text-[40px] md:text-[80px] text-transparent">
                  <div className="inline-flex">
                    {["E", "M", "P", "O", "W", "E", "R"].map((char, index) => (
                      <span key={index} className="relative inline-block">
                        <span className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Secondary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Primary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0">
                          <p
                            className={`${CustomTypography({
                              color: "fire",
                            })} group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]`}
                          >
                            {char}
                          </p>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-transparent text-[70px]">
                  <div className="inline-flex flex-wrap justify-center">
                    {["Y", "0", "U", "R"].map((char, index) => (
                      <span key={index} className="relative inline-block">
                        <span className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Secondary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Primary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0">
                          <p
                            className={`text-Secondary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]`}
                          >
                            {char}
                          </p>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-[40px] md:text-[70px] text-transparent">
                  <div className="inline-flex">
                    {["F", "I", "T", "N", "E", "S", "S"].map((char, index) => (
                      <span key={index} className="relative inline-block">
                        <span className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Secondary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Primary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0">
                          <p
                            className={`text-gray-600 group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]`}
                          >
                            {char}
                          </p>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-[40px] md:text-[70px] text-transparent">
                  <div className="inline-flex">
                    {["J", "O", "U", "R","N", "E", "Y"].map((char, index) => (
                      <span key={index} className="relative inline-block">
                        <span className="[-webkit-text-stroke:1px_#F67A45] group-[:not(.tns-slide-active)]/s:scale-y-0 group-[:not(.tns-slide-active)]/s:delay-[.04s] delay-0 transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Secondary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.03s] delay-[.01s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-Primary group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.02s] delay-[.02s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0 text-[#01010F] group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-[.01s] delay-[.03s] transition-all duration-[.3s]">
                          {char}
                        </span>
                        <span className="absolute top-0 right-0 bottom-0 left-0">
                          <p
                            className={`text-gray-600 group-[.tns-slide-active]/s:scale-y-0 group-[.tns-slide-active]/s:delay-0 delay-[.04s] transition-all duration-[.3s]`}
                          >
                            {char}
                          </p>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              
                
              </div>
         
            </div>
            <div className="pt-[50px]"></div>
            <div className="">
              <div className="">
                Discover fitness excellence at our premier gym. With top
                equipment, expert trainers,
              </div>
              <div className="md:flex gap-[20px] pt-[10px]">
                <div className="">
                  <div className="flex items-center">
                    <a className="group relative" href="#">
                      <div className="absolute top-0 right-0 bottom-0 left-0 border-[1px] border-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
                      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
                      <div className="relative h-[54px] w-[175px] flex justify-center items-center">
                        <div className="relative font-[Teko] font-medium text-[20px]">
                          <div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.4s] transition-all duration-[.3s]">
                            <div className="flex items-center gap-[10px]">
                              <div className="">JOIN CLASS</div>
                              <div className="">
                                <img
                                  className=""
                                  src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]">
                            <div className="flex items-center gap-[10px]">
                              <div className="">JOIN CLASS</div>
                              <div className="">
                                <img
                                  className=""
                                  src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/hero-arrow.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative top-[-5px]">
                    and dynamic classes, we're committed to helping you reach
                  </div>
                  <div className="">
                    your goals. Join us today and unleash your full potential!
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-[100px]"></div>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-1 col-span-3">
        <div className="relative w-full h-[700px] overflow-hidden">
          {/* Base Image */}
          <img
            src={Boxing}
            alt="Diagonal styled"
            className="absolute inset-0 w-full h-full object-cover transform -rotate-2 scale-105 clip-path-custom"
            style={{
              clipPath: "polygon(15% 0%, 100% 0%, 100% 100%, 0% 120%)",
            }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#fafafa", opacity: 0.2 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
