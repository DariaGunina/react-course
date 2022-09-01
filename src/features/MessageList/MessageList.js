import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { USERS } from "../../constants";
import { Form } from "../Form";
import { Message } from "../Message";

import { Container, Wrapper } from './styles'

export const MessageList = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({
    1: [{ author: USERS.USER, message: "test" }],
  });
  const scrollAnchor = useRef();
  const { roomId } = useParams();

  const handleSubmit = useCallback((message, author = USERS.USER) => {
    if (message) {
      setData((state) => ({
        ...state,
        [roomId]: [
          ...(state[roomId] ?? []),
          { author, message },
        ],
      }));
      setInputValue("");
    }
  }, [roomId]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      handleSubmit(inputValue);
    }
  };

  useEffect(() => {
    const messages = data[roomId] ?? [];
    let timer;
    scrollAnchor.current?.scrollIntoView();

    if (messages.length && messages.at(-1).author === USERS.USER) {
      timer = setTimeout(() => {
        handleSubmit("Хорошего дня!",  USERS.OPPONENT)
        scrollAnchor.current?.scrollIntoView();
      }, 1500)
    }

    return () => {
      clearInterval(timer);
    };
  }, [data, roomId, handleSubmit]);

  const messages = data[roomId] ?? [];
  console.log(data)
    
  return (
    <Container>
      <Wrapper>
        {
          messages.map((item, index) => 
            <div key={index}>
              <Message 
                user={USERS.USER}
                author={item.author}
                message={item.message} 
              />
            </div>
          )
        }
        <div ref={scrollAnchor} />
      </Wrapper>
      <Form 
        value={inputValue} 
        setValue={setInputValue}
        handlePressInput={handlePressInput} 
        onSubmit={handleSubmit}
      />
    </Container>
  )
};