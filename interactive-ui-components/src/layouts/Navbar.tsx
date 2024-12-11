import { useEffect } from "react";
import { Button } from "../components/uiComponents/button";
import CustomTypography from "../components/uiComponents/Typography";
import { COLORS } from "../constants/gym";
import { navbarData } from "../data/gym/NavigationData";
import { motion, useAnimate } from "framer-motion";

const Navbar = ({ data }: { data: any }) => {
  const [scope, animate] = useAnimate()
  const { links, button } = data;


  useEffect(() => {
 
    animate("li", { opacity: 1 })
  })
  return (
    <div className="sticky z-50 top-0 bg-white">
    <div className="navbar bg-base-100 max-w-[1320px] mx-auto px-[15px]">
      {/* Navbar Start */}
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link, index) =>
              link.submenu ? (
                <li key={index}>
                  <p className={CustomTypography({
                    fontSize:'title'
                  })}>{link.label}</p>
                  <ul className="p-2">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <a className={CustomTypography({
                            fontSize:'subTitle'
                        })} href={subLink.href}>{subLink.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <a className={CustomTypography({
            fontSize:'logo',background:'logo'
        })}>
        FitSphere</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, index) =>
            link.submenu ? (
              <li key={index}>
                <details>
                  <summary className={`${CustomTypography({
                    fontSize:'cardTitle'
                  })} hover:bg-accent`}>{link.label}</summary>
                  <ul ref={scope}  className="p-2">
                    {link.submenu.map((subLink, subIndex) => 
                    {console.log('subLink',subLink)
                      return(
                      <li key={subIndex} className="flex grow">
                      
                       <motion.a
                      
                      href={subLink.href}
                        key={subIndex}
                        className="block py-[15px] px-[20px] text-white relative"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: COLORS.Accent,
                        }}
                      >
                       <p className={CustomTypography({
                        fontSize:'cardSubTitle'
                       })}>{subLink.label} </p> 
                     </motion.a>
                      </li>
                    )})}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={index}>
                <a className={`${CustomTypography({
                    fontSize:'cardTitle'
                })} hover:bg-accent hover:text-Text` } href={link.href}>{link.label}</a>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a href={button.href} className={Button({
            color:'primary'
        })}>
          {button.label}
        </a>
      </div>
    </div>
    </div>
     );
};

export default Navbar;
