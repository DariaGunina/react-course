import styles from "./Message.module.css";

export const Message = ({ user, author, message}) => {
  return (
    <div className={styles.container}>
      <p className={styles.author}>
        {author === user ? "Я" : "Бот"}:
      </p> 
      <p className={styles.message}>{message}</p>
    </div>
  ) 
};