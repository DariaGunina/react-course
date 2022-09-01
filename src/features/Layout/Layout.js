import PropTypes from "prop-types";

import { Container } from "./styles";

export const Layout = ({chatList, messageList}) => {
  return (
    <Container>
      {chatList}
      {messageList}
    </Container>
  )
};

Layout.propTypes = {
  chatList: PropTypes.element,
  messageList: PropTypes.element,
};