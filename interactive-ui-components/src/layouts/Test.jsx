import React from "react";

export default function Test() {
  return (
    <div className="sticky z-50 top-0 bg-white">
      <div className="max-w-[1320px] mx-auto px-[15px]">
        <div className="flex justify-between items-center h-[90px] font-[Teko]">
          <div className="">
            <a className="flex items-center gap-[5px]" href="index.html">
              <img
                className=""
                src="https://raw.githubusercontent.com/uiaextend/gymfito/main/home/logo.svg"
                alt=""
              />
              <div className="text-[28px] font-semibold">GYMFITO</div>
            </a>
          </div>
          <div className="hidden xl:block">
            <div className="flex text-[20px] font-medium">
              {links?.map((link, index) => (
                <div className="group relative" key={index}>
                  <motion.div
                    className="relative"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={{
                      hover: { scaleY: 1, transition: { duration: 0.3 } },
                      rest: { scaleY: 0 },
                    }}
                  >
                    {Array(4)
                      .fill()
                      .map((_, layer) => (
                        <motion.div
                          key={layer}
                          className="absolute top-0 right-0 bottom-0 left-0"
                          style={{
                            backgroundColor:
                              layer === 0
                                ? COLORS.Accent
                                : layer === 1
                                ? COLORS.Primary
                                : COLORS.Secondary,
                          }}
                          variants={{
                            hover: {
                              scaleY: 1,
                              transition: {
                                delay: 0.06 * layer,
                                duration: 0.3,
                              },
                            },
                            rest: {
                              scaleY: 0,
                              transition: {
                                delay: 0.06 * (3 - layer),
                                duration: 0.3,
                              },
                            },
                          }}
                        />
                      ))}
                    <div className="relative h-[90px] flex items-center gap-[5px] px-[20px]">
                      <motion.div
                        className="relative"
                        whileHover={{ color: COLORS.Primary }}
                      >
                        {link.label}
                      </motion.div>
                      <div className="text-[12px]">
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute w-[230px] bg-opacity-10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link?.submenu?.map((submenuItem, subIndex) => (
                      <motion.a
                        href="#"
                        // href={link.hrefs[subIndex]}
                        key={subIndex}
                        className="block py-[15px] px-[20px] text-white relative"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: COLORS.Accent,
                        }}
                      >
                        {submenuItem}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="flex items-center text-white">
              <a
                className="xl:hidden group relative"
                data-c-toggle="a"
                href="#offcanvas"
              >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
                <div className="relative h-[54px] w-[54px] flex justify-center items-center">
                  <div className="relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
                      <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
                      <i className="fa-solid fa-bars"></i>
                    </div>
                  </div>
                </div>
              </a>
              <div className="xl:hidden md:px-[20px] border-t-[1px] border-[#F67A45]"></div>
              {/* <a className="hidden md:block group relative" href="#">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
          <div className="relative h-[54px] w-[144px] flex justify-center items-center">
            <div className="relative">
              <div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
                JOIN NOW
              </div>
              <div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
                JOIN NOW
              </div>
            </div>
          </div>
        </a> */}
              <div className="navbar-end">
                <a
                  href={button.href}
                  className={Button({
                    color: "primary",
                  })}
                >
                  {button.label}
                </a>
              </div>
              <div className="hidden md:block px-[20px] border-t-[1px] border-[#F67A45]"></div>
              <a className="hidden md:block group relative" href="#">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
                <div className="relative h-[30px] w-[30px] flex justify-center items-center text-[12px] leading-[1]">
                  <div className="relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                  </div>
                </div>
              </a>
              <div className="hidden md:block px-[5px] border-t-[1px] border-[#F67A45]"></div>
              <a className="hidden md:block group relative" href="#">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-hover:scale-y-0 group-hover:delay-0 delay-[.4s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#D5BDA2] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.4s] delay-0 transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.3s] delay-[.1s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#01010F] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.2s] delay-[.2s] transition-all duration-[.3s]"></div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#F67A45] bg-opacity-10 border-[1px] border-[#F67A45] group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-[.1s] delay-[.3s] transition-all duration-[.3s]"></div>
                <div className="relative h-[30px] w-[30px] flex justify-center items-center text-[12px] leading-[1]">
                  <div className="relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0 group-[:not(:hover)]:scale-y-0 group-[:not(:hover)]:delay-0 delay-[.3s] transition-all duration-[.3s]">
                      <i className="fa-brands fa-x-twitter"></i>
                    </div>
                    <div className="group-hover:scale-y-0 group-hover:delay-0 delay-[.3s] transition-all duration-[.3s]">
                      <i className="fa-brands fa-x-twitter"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        //{" "}
      </div>
      //{" "}
    </div>
  );
}
