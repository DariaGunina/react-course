import { useState, useEffect } from "react";
import { USERS } from "../../constants";
import { Form } from "../Form";
import { Message } from "../Message";

import styles from "./MessageList.module.css";

export const MessageList = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (inputValue) {
      setData([...data, {author: USERS.USER, message: inputValue}])
    }
    setInputValue("");
  };

  useEffect(() => {
    let timer;
    if(data.length && data.at(-1).author === USERS.USER) {
      timer = setTimeout(() => {
        setData([...data, {author: USERS.OPPONENT, message: "Хорошего дня!"}])
      }, 1500)}

      return () => {
        clearInterval(timer);
        window.scrollTo(0, document.body.scrollHeight);
      };
    }
  , [data]);
    
  return (
    <div className={styles.container}>
      {
        data.map((item, index) => 
          <div key={index}>
            <Message 
              user={USERS.USER}
              author={item.author}
              message={item.message} 
            />
          </div>
        )
      }
      <Form 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        onSubmit={handleSubmit} 
      />
    </div>
  )
};