import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { chatList } from "../../mock";
import img from "../../assets/avatar.jpg";

import { Time, Container } from "./styles";

export const ChatList = () => {
  return (
    <>
      <List 
        sx={{ 
          width: "50%",
          borderRight: "1px solid #80808038",
        }}
      >
        {
          chatList.map((item) => 
            <ListItem 
              key={item.id} 
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Avatar"
                    src={img}
                  />
                </ListItemAvatar>
                <Container>
                  <ListItemText 
                  primary = {item.title} 
                  sx={{ 
                    color: "#b8383d"
                  }}
                />
                <ListItemText 
                  primary = {item.subtitle} 
                  sx={{ 
                    color: "#808080",
                    fontSize: "12px",
                  }}
                />
                </Container>
                <ListItemText />
                <Time>{item.time}</Time>
            </ListItem>
          )
        }
      </List>
    </>
  )
};