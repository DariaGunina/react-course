import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from 'react';
import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteConversation,
  createConversation,
  conversationsSelector,
} from "../../store/conversations";
import  { Chat}  from "../Chat";

import { 
  AddChat, 
  Text, 
  HeaderContainer, 
  Box
} from "./styles";

export const ChatList = () => {
  const { roomId } = useParams();
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteConversationByName = useCallback(
    (name, e) => {
      e.preventDefault();
      dispatch(deleteConversation(name));
      navigate("/chat");
    },
    [dispatch, navigate]
  );

  const createConversationByName = () => {
    const name = prompt("Введите имя: ");
    const isValidName = !conversations.includes(name);

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Не валидное имя");
    }
  };
 
  return (
    <Box>
      <HeaderContainer>
        <Text> Создать новый чат</Text>
        <AddChat onClick={createConversationByName} />
      </HeaderContainer>
      <List component="nav" sx={{maxHeight: '60vh', overflow: 'auto'}}>
        {
          conversations.map((item) =>
            <Link 
              key={item.title} 
              to={`/chat/${item.title}`} 
              style={{ textDecoration: 'none' }}
            >
              <Chat 
                id={item.id}
                roomId={roomId}
                title={item.title}
                subtitle={item.subtitle}
                time={item.time}
                key={item.id}
                onDelete={deleteConversationByName}
              />
            </Link>  
          )
        }
      </List>
    </Box>
  )
};