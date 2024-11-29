import { Button, Card } from '@material-tailwind/react'
import React, { useContext, useRef } from 'react'
import WrapperContainer from '../components/WrapperContainer/WrapperContainer'
import MidFilterSection  from '../components/MidSection/MidFilterSection'
import MidComponentParent from "../components/MidSection/MidComponentParent";
import TabsComponent from "../components/MidSection/TabsComponent";
import FurnitureFlow from "../components/MidSection/FurnitureFlow";
import NewsLetter from "../components/MidSection/NewsLetter";
import Footer from '../layout.tsx/Footer';
import Header from '../layout.tsx/Header';
import Navbar from '../layout.tsx/Navbar/Navbar';
import { ThemeBgContext } from '../components/ContextWrapper/ThemeContext';
import PopUpButton from '../components/PopUpButton/PopUpButton'
import MobileNav from '../layout.tsx/Navbar/MobileNav';

export default function Home() {
    const sectionTop = useRef();
    const themeCtx = useContext(ThemeBgContext);
    const handleScroll = () => {
      sectionTop.current?.scrollIntoView({ behavior: "smooth" });
    };

    
  return (
    <div className='relative'>
         <MobileNav></MobileNav>
         <div>
        <PopUpButton handleScroll={handleScroll}></PopUpButton>
      </div>
        <div className={themeCtx?.theme === "light" ? "bg-white" : "bg-dark"}>
        <WrapperContainer navHead>
          <Navbar></Navbar>
          <Header topRef={sectionTop}></Header>
        </WrapperContainer>
      </div>

      <div className="bg-gray-100 w-full">
        <WrapperContainer>
          <MidFilterSection></MidFilterSection>
          <MidComponentParent></MidComponentParent>
          <TabsComponent></TabsComponent>
          <FurnitureFlow></FurnitureFlow>
          <Card/>
          <NewsLetter/>
        </WrapperContainer>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
