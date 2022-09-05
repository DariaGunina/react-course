import { 
  useState, 
  useEffect, 
  useRef, 
  useCallback, 
  useMemo 
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { USERS } from "../../constants";
import { Form } from "../Form";
import { Message } from "../Message";
import { sendMessage, messagesSelector } from "../../store/messages";

import { Container, Wrapper } from './styles'

export const MessageList = () => {
  const [inputValue, setInputValue] = useState("");
  const { roomId } = useParams();
  const scrollAnchor = useRef();
  const selector = useMemo(() => messagesSelector(roomId), [roomId]);
  const messages = useSelector(selector);
  const dispatch = useDispatch();

  const handleSubmit = useCallback((message, author = USERS.USER) => {
    if (message) {
      dispatch(sendMessage(roomId, { message, author }));
      setInputValue("");
    }
  }, [roomId, dispatch]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      handleSubmit(inputValue);
    }
  };

  useEffect(() => {
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
  }, [messages, handleSubmit]);
    
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
                roomId={roomId}
                messageId={item.id}
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