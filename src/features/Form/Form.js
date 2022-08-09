import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import styles from "./Form.module.css";

export const Form = ({inputValue, setInputValue, onSubmit}) => {
  return (
    <div className={styles.form}>
      <Input 
        setValue={setInputValue} 
        value={inputValue} 
        className={styles.input} 
        placeholder="Сообщение..."
      />
      <Button 
        onClick={onSubmit} 
        className={styles.button} 
        name="Отправить сообщение" 
      />
    </div>
  )
};