import React, { useContext } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import { tabsData } from "../../data";

const TabsComponent = () => {
  const { theme } = useContext(ThemeBgContext);
  const initialTabValue = tabsData[0]?.value || "default";
  return (
    <div id="featured Houses">
      <Tabs
        id="custom-animation"
        value={initialTabValue}
        className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center content-between w-full"
      >
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          <h1
            className={
              theme === "light"
                ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-royalBlue"
                : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }
          >
            Featured Homes
          </h1>
          <p
            className={
              theme === "light"
                ? "sm:text-xl text-2xl  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                : "sm:text-xl text-2xl  pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
            }
          >
            Truenest Realty offers many great features. You can explore exquisite properties, request personalized services, list your property for sale, find your dream home, and so much more. Take a sneak peek at everything we offer
          </p>

          <TabsHeader className="sm:flex-col flex justify-center items-center content-center bg-gray-100">
            {tabsData.map(({ label, value }) => (
              <Tab className="" key={value??initialTabValue} value={value}>
                <p className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case">
                  {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, desc, linkText }) => (
              <TabPanel key={value} value={value}>
                <p
                  className={
                    theme === "light"
                      ? "text-lg relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                      : "text-lg relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
                  }
                >
                  {desc}
                </p>
                <span className="text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case relative cursor-pointer right-3 hover:animate-puls">
                  {linkText}
                </span>
              </TabPanel>
            ))}
          </TabsBody>
        </div>
        <div>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value, img }) => (
              <TabPanel key={value} value={value}>
                <img className="h-[650px] object-contain rounded-lg" src={img} alt="phone"></img>
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
