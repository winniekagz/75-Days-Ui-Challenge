import { useEffect, useRef, useState } from "react";
import FlipCard from "../../components/uiComponents/animatedComponents/FlipCard";
import { classData } from "../../data/gym/classes";
import { motion } from "framer-motion";

interface ClassData {
  name: string;
  status: string;
  sessionTime: string;
  imageSrc: string;
  classDescription: string;
}

export default function Classes() {
 

  return (
    <div>
      <div className="bg-Accent py-6">
        <div className="max-w-[1320px] mx-auto px-[15px]">
          {/* Title Section */}
          <div className="flex justify-between">
            <div>
              <div className="font-[Teko] flex items-center gap-[15px] uppercase">
                <div className="font-semibold text-[60px] leading-[1]">
                  Our Upcoming
                </div>
                <div className="hidden md:block font-medium text-[12px] text-[#F67A45] relative top-[-5px] border-r-[2px] border-l-[2px] border-[#F67A45] px-[5px] [writing-mode:tb]">
                  Top Ten
                </div>
                <div className="hidden md:block font-semibold text-[60px] leading-[1]">
                  classes
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full overflow-hidden mt-10">
          
              {classData.map((classItem: ClassData) => (
                <motion.div
                  key={classItem.name}
                  className="w-[90%]  h-auto bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <FlipCard
                    name={classItem.name}
                    status={classItem.status}
                    sessionTime={classItem.sessionTime}
                    imageSrc={classItem.imageSrc}
                    classDescription={classItem.classDescription}
                    // onSelect={handleCardSelect}
                    // isSelected={selectedClassName === classItem.name}
                  />
                </motion.div>
              ))}
            {/* </motion.div> */}

          
          </div>
        </div>
      </div>
    </div>
  );
}
