import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import PropTypes from "prop-types";

const MidChild = ({ data, click }) => {
  const { theme } = useContext(ThemeBgContext);

  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="sm:pt-10 relative flex flex-col z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                y: click ? 20 : 0,
                x: click ? 20 : 0,
                opacity: 1,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 1.5 }}
            >
              <div className="sm:w-full w-[500px]">
                <h3
                  className={
                    theme === "light"
                      ? "sm:text-4xl text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-royalBlue pb-4"
                      : "sm:text-4xl text-6xl font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white pb-4"
                  }
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex flex-col items-start w-full">
                <p
                  className={
                    theme === "light"
                      ? "sm:text-2xl text-royalBlue text-3xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none  mb-4"
                      : "sm:text-2xl text-3xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white mb-4"
                  }
                >
                  {item.text}
                </p>
                <motion.img
                  className="w-full mt-4 object-contain"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: click ? "525px" : "525px", opacity: 1 }}
                  transition={{ type: "tween", duration: 3 }}
                  src={item.img}
                  alt={item.title}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

MidChild.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired, // Added missing prop type for text
      img: PropTypes.string.isRequired, // Updated to expect `img` as a string (URL)
    })
  ).isRequired,
  click: PropTypes.bool.isRequired, // Updated `click` to boolean as per its usage
};

export default MidChild;
