export const Input = ({value, setValue, className, placeholder}) => 
  <input
    type="text"
    onChange={e => setValue(e.target.value)}
    value={value}
    placeholder={placeholder}
    className={className}
  />;