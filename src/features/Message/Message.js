import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../store/messages";

import { 
  Container,
  Author,
  Text,
  Time,
  Close,
  Box
} from './styles';

import styles from "./Message.module.css";

export const Message = ({ user, author, message, roomId, messageId, time}) => {
  const dispatch = useDispatch();

  return (
    <Container 
      className={
        classNames({
          [styles.currentMessage]: author !== user,
      })}
    >
      <Box>
        <Author>
          {author === user ? "Я" : "Бот"}
        </Author> 
        <Text>{message}</Text>
      </Box>
      <Box>
        <Close 
          onClick = {
            () => dispatch(deleteMessage(roomId, messageId))
          } 
        />
        <Time>{time}</Time>
      </Box>
   </Container>
  )
};

Message.propTypes = {
  user: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};