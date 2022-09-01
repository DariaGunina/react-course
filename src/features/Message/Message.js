import classNames from "classnames";
import PropTypes from "prop-types";
import { time } from "../../utils";
import { 
  Container,
  Author,
  Text,
  Time
} from './styles';

import styles from "./Message.module.css";

export const Message = ({ user, author, message}) => {
  console.log(user, author, "0")
  return (
    <Container 
      className={
        classNames({
          [styles.currentMessage]: author !== user,
      })}
    >
      <Author>
        {author === user ? "Я" : "Бот"}
      </Author> 
      <Text>{message}</Text>
      <Time>{time}</Time>
   </Container>
  )
};

Message.propTypes = {
  user: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};