import React, { useEffect, useRef } from 'react';
import { motion ,useAnimation,useInView} from 'framer-motion';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
}

export default function OnScrollReveal({ children, width = 'fit-content' }: Props) {
 const ref=useRef(null)
 const isInView=useInView(ref, {once: true, amount: 0.7})
 const mainControl=useAnimation()


 useEffect(() => {
  if (isInView){
mainControl.start('visible')
  }
 }, [isInView,mainControl])
 
 
    return (
    <div ref={ref} className={`relative w-${width}`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControl}
        // whileInView="visible" // Ensures animation triggers on scroll
        // viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the component is visible
        transition={{ duration: 1, ease: 'easeIn', delay: 0.25 }}
        className=""
      >
        {children}
      </motion.div>
    </div>
  );
}
