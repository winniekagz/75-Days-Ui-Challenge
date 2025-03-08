import  { useContext, useRef } from "react";
import Navbar from "../layout.tsx/Navbar/Navbar"
import WrapperContainer from "../components/WrapperContainer/WrapperContainer" 
import MidFilterSection from "../components/MidSection/MidFilterSection"
import MidComponentParent from "../components/MidSection/MidComponentParent";
import TabsComponent from "../components/MidSection/TabsComponent" 
import FurnitureFlow from "../components/MidSection/FurnitureFlow"
import NewsLetter from "../components/MidSection/NewsLetter";
import Cards from "../components/MidSection/Cards";
import Footer from "../layout.tsx/Footer";
import PopUpButton from "../components/PopUpButton/PopUpButton";
import MobileNav from "../layout.tsx/Navbar/MobileNav";
import LandingPage from "./LandingPage";
import { ThemeBgContext } from "../components/ContextWrapper/ThemeContext";
import ContactPage from "./ContactPage";

const Home = () => {
  const sectionTop = useRef();
  const { theme } = useContext(ThemeBgContext);
  const handleScroll = () => {
    sectionTop.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative">
      <MobileNav></MobileNav>
      <div>
        <PopUpButton handleScroll={handleScroll}></PopUpButton>
      </div>
      <div className={theme === "light" ? "bg-white" : "bg-dark"}>
        <WrapperContainer navHead>
          <Navbar></Navbar>
          <LandingPage topRef={sectionTop}></LandingPage>
        </WrapperContainer>
      </div>
      <div className="bg-gray-100 w-full">
        <WrapperContainer>
          <MidFilterSection></MidFilterSection>
          {/* <MidComponentParent></MidComponentParent> */}
          <TabsComponent></TabsComponent>
          {/* <FurnitureFlow></FurnitureFlow> */}
          {/* <Cards></Cards> */}
          <ContactPage/>
          {/* <NewsLetter></NewsLetter> */}
        </WrapperContainer>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};
export default Home;
