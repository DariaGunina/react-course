import PropTypes from "prop-types";

export const Input = ({value, setValue, className, placeholder}) => 
  <input
    type="text"
    onChange={e => setValue(e.target.value)}
    value={value}
    placeholder={placeholder}
    className={className}
  />;

  Input.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};