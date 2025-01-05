import React from "react";
import { motion } from "framer-motion";
import { Boxing2 } from "../../../assets/images";
import { cardStyles } from "../CustomImageCard";
import { Button } from "../button";
import "../../../styles/animationn.css";
import CustomButtom from "./CustomButtom";

interface ClassCardProps {
  name: string;
  status: string;
  sessionTime: string;
  classDescription: string;
  imageSrc: string;
  onSelect: (className: string) => void;  
  isSelected: boolean;
}

const FlipCard: React.FC<ClassCardProps> = ({ onSelect,
    isSelected, name, status, sessionTime, classDescription, imageSrc }) => {
  const {
    base,
    image,
    infoBox,
    infoWrapper,
    name: nameStyle,
    details,
    status: statusStyle,
    backDetails,
    backInfoWrapper,
  } = cardStyles();



  return (
    <div onClick={()=>onSelect(name)} className={`${base()} w-full  perspective-1000 h-[300px]`}>
      <motion.figure
      
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-full transform-style-3d"
      >
        {/* Front Side */}
        <motion.div className="absolute w-full h-full backface-hidden">
          <motion.img
            className={image()}
            src={imageSrc}
            alt="Class Image"
          />
          <div className={infoWrapper()}>
            <div className={infoBox()}>
              <div className={nameStyle()}>{name}</div>
              <div className={statusStyle()}>{status}</div>
            </div>
            <div className={infoBox()}>
              <div className={details()}>{sessionTime}</div>
              <div className={details()}>Status: Live</div>
            </div>
            <div className={backDetails()}>
              {classDescription}
            </div>
            <CustomButtom customClass={Button({ color: 'primary' })} text='Book'/>
           
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className={`${backInfoWrapper()} absolute w-full h-full backface-hidden transform `}
        >
          <motion.img
            className={image()}
            src={imageSrc}
            alt="Class Image"
          />
          <div className={infoWrapper()}>
            <div className={infoBox()}>
              <div className={nameStyle()}>{name}</div>
              <div className={statusStyle()}>{status}</div>
            </div>
            <div className={infoBox()}>
              <div className={details()}>{sessionTime}</div>
              <div className={details()}>Status: Live</div>
            </div>
            <div className={backDetails()}>
              {classDescription}
            </div>
            <button className={Button({ color: 'primary' })}>Book</button>
          </div>
        </motion.div>
      </motion.figure>
    </div>
  );
};

export default FlipCard;
