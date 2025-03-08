import { motion } from "framer-motion";
import React from "react";

const PushButton = ({ children }) => {
  return (
    <motion.button
      className=" px-8 py-3 shadow-button text-white bg-royalBlue rounded-lg hover:bg-secondary transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      {children}
    </motion.button>
  );
};



PushButton.propTypes = {
    children:React.ReactNode
  };
  

export default PushButton;
