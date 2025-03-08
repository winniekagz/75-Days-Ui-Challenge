
import PropTypes from "prop-types";
import PushButton from "../../styles/pushButton";

const Button = ({ text, onClick, className }) => {
  return (
    <PushButton>
    <button
      onClick={onClick}
      className={`relative border-0 bg-transparent text-white uppercase font-inter ${className}`}
    >
      {/* <span className="absolute inset-0 z-[-1] rounded-[25px] bg-blue-700 transition-transform duration-200 transform translate-y-1 translate-x-1"></span> */}
      <span className="relative">{text}</span>
    </button>
    </PushButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
};

export default Button;
