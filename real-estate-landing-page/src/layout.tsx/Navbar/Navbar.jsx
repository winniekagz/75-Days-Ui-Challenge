
import { useState, useEffect, useContext } from "react";
import { navbarData } from "../../data"; 
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { ThemeBgContext } from "../../components/ContextWrapper/ThemeContext";
import { Switch } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme,handleTheme } = useContext(ThemeBgContext);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  return (
    <div>
      <div
        className={
          scroll
            ? "sm:hidden h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-white-200 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
            : "sm:hidden bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center z-20"
        }
      >
        <div className="flex justify-between items-center   px-20 w-full bg-royalBlue/10">
          <div className=" ">
            <img className="h-[64px] w-auto object-contain" src={logo} alt="logo-img"></img>
          </div>
          <div className="flex flex-row items-center w-auto  rounded p-4">
            {navbarData.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink
                    to={item.link}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offse={50}
                    duration={500}
                    isDynamic={true}
                    ignoreCancelEvents={false}
                    spyThrottle={500}
                    className={
                      theme === "light"
                        ? "cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                        : "cursor-pointer text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-blue-500"
                    }
                  >
                    {item.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
          <Switch className="text-"
            label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            ripple={true}
            defaultChecked={theme === "dark" ? true : false}
            onClick={handleTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
