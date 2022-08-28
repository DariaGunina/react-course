import { useParams } from "react-router-dom";
import { useState } from 'react';
import List from '@mui/material/List';
import { chatList } from "../../mock";
import  { Chat}  from "../Chat";

import { 
  AddChat, 
  Text, 
  HeaderContainer, 
  Box
} from "./styles";

export const ChatList = () => {
  const { roomId } = useParams();
  const [chats, setChats] = useState(chatList);

  const addChat = () => setChats(chats => {
    const newChatCounter = chats.length + 1;
    return [...chats, {
      title: `Chat-${newChatCounter}`,
      subtitle: "Data",
      time: new Date().toLocaleTimeString().slice(0,-3),
      id: String(newChatCounter),
    }]
  });
 
  return (
    <Box>
      <HeaderContainer>
        <Text> Создать новый чат</Text>
        <AddChat onClick={addChat} />
      </HeaderContainer>
      <List component="nav" sx={{maxHeight: '60vh', overflow: 'auto'}}>
        {
          chats.map((item) =>
            <Chat 
              id={item.id}
              roomId={roomId}
              title={item.title}
              subtitle={item.subtitle}
              time={item.time}
              key={item.id}
            />
          )
        }
      </List>
    </Box>
  )
};