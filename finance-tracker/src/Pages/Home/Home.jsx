import React, { useRef } from "react";
import Typography from "../../components/Typography";
import finance from "../../assets/creditcard.png";
import Button from "../../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home() {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".containerr", { stagger: 0.5 });
      // gsap.to(".image", { x: -100, duration: 2 });
      gsap.to(".title", {  x: 100, duration: 2 });
      // gsap.to(".text-block", { duration: 2, delay: 1 });
      gsap.to(".midtext", {  x: 100,duration: 3, delay: 1 });
      gsap.to(".button", {   x: 100,duration: 4, delay: 1.5 });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="containerr grid grid-cols-2 gap-4 place-items-center h-[100%] pt-16 pb-10 px-6"
    >
      <div className=" text-block text-[60px] font-bold text-white">
        <p className="title">
          Take control of your finances <br />
          with our intuitive Financial Tracker –<br />
        </p>
        <p className="midtext text-[20px] my-2 ">
          <span className="text-green mx-2 capitalize">Manage, track,</span>
          <span className="mx-2">&</span>
          <span className="text-green mx-2 capitalize">grow</span>
          our wealth effortlessly.
        </p>
        <div className="button">
          <Button fontSize={"[16px]"} label={"View my reports"} />
        </div>
      </div>
      <div className="image">
        <img src={finance} alt="hero" />
      </div>
    </div>
  );
}
