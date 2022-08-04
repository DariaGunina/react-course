import styles from "./Message.module.css";

export const Message = ({text}) => {
    return (
        <h2 className={styles.text}>{text}</h2>
          
    )
};