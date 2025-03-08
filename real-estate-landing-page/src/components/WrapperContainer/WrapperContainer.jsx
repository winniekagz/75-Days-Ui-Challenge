import  { useContext } from "react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import PropTypes from "prop-types"; 

const WrapperContainer = ({ navHead, children }) => {
  const { theme } = useContext(ThemeBgContext);
  return (
    <div
      className={
        !navHead
          ? `container mx-auto px-4 ${
              theme === "light" ? " bg-wrapperBg" : "bg-wrapperDark"
            } h-full w-full bg-cover bg-no-repeat bg-center rounded-xl -translate-y-36 drop-shadow-2xl`
          : "container mx-auto px-4"
      }
    >
      {children}
    </div>
  );
};
WrapperContainer.propTypes = {
  navHead: PropTypes.bool, 
  children: PropTypes.node.isRequired, 
};
export default WrapperContainer;
