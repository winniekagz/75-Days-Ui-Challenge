import  { useContext } from "react";
import header1 from "../assets/bluehouse.jpg";
import { Switch } from "@material-tailwind/react";
import { ThemeBgContext } from "../components/ContextWrapper/ThemeContext";
import Button from "../components/shared/Button";
import propTypes from 'prop-types'

const LandingPage = ({ topRef }) => {
  const themeCtx= useContext(ThemeBgContext);
  

  return (
    <div ref={topRef} className="mx-auto pt-16">
      <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          <Switch
            label={themeCtx?.theme === "light" ? "Switch to Dark" : "Switch to Light"}
            defaultChecked={themeCtx?.theme === "dark" ? true : false}
            onClick={themeCtx?.handleTheme}
          />
          <h1
            className={
              themeCtx?.theme === "light"
                ? "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                : "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
            }
          >
             Find Your  { " "}
            <span
              className={
                themeCtx?.theme === "light"
                  ? "sm:text-4xl text-royalBlue text-6xl font-petitFormal font-bold"
                  : "sm:text-4xl text-white text-6xl font-petitFormal font-bold"
              }
            >
           Dream  Home <span 
             className={
              themeCtx?.theme === "light"
                ? "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                : "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
            
           }>in</span> Kenya, 
            </span>{" "}
            
            
            No Matter Where You Are
          </h1>
          <div className="mt-4">
            <p
              className={
                themeCtx?.theme === "light"
                  ? "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl"
                  : "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white text-2xl"
              }
            >
           {" Explore a wide range of homes across Kenya. Whether you're local or abroad, we've made finding and owning your ideal home effortless, secure, and tailored to your needs."}
            </p>
          </div>
          <div className="pb-20">
            <Button className={''} onClick={()=>console.log('clicled')} text="Get Started"/>
           
          </div>
        </div>
        <div className="sm:pl-4 mt-4">
          <div>
         
          </div>
          <img
            className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
            src={header1}
            alt="header-phone"
          ></img>
        </div>
      </div>
    </div>
  );
};

LandingPage.propTypes= {topRef: propTypes.oneOfType([
  propTypes.func,
  propTypes.shape({ current: propTypes.instanceOf(Element) })
]),
}

export default LandingPage;
