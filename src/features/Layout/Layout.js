import { MessageList } from "../MessageList";
import { ChatList } from "../ChatList";

import { Container } from "./styles";

export const Layout = () => {
  return (
    <Container>
      <ChatList />
      <MessageList />
    </Container>
  )
};