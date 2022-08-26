import PropTypes from "prop-types";
import Input from '@mui/material/Input';
import { InputAdornment } from "@mui/material";
import { FormContainer, Send } from "./styles";

export const Form = ({
  value, 
  setValue, 
  handlePressInput, 
  onSubmit
}) => {
  const focusInput = input => {
    if (input) {
      setTimeout(() => {input.focus()}, 100);
    }
  };
  
  return (
    <FormContainer>
      <Input
        fullWidth
        autoFocus
        value={value}
        onChange={e => setValue(e.target.value)} 
        placeholder="Сообщение..."
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={onSubmit} color="primary" />}
          </InputAdornment>
        }
        inputRef={focusInput}
      />
    </FormContainer>  
  )
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  handlePressInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

