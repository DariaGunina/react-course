import PropTypes from "prop-types";

export const Button = ({onClick, className, name}) => {
  return (
    <button 
      onClick={onClick}
      className={className}>
        {name}
    </button>
  )
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};