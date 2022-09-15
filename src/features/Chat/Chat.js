import PropTypes from "prop-types";
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import img from "../../assets/avatar.jpg";

import {  
  Container, 
  Close,
  Box
} from "./styles";

export const Chat = ({
  roomId,
  title,
  onDelete,
}) => {
    return (
      <ListItemButton 
        selected={title === roomId} 
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        >
          <Box>
            <ListItemAvatar>
              <Avatar
                alt="Avatar"
                src={img}
              />
            </ListItemAvatar>
            <Container>
              <ListItemText 
                primary = {title} 
                sx={{ 
                  color: "#b8383d"
                }}
              />
            </Container>
          </Box>
          <Container>
            <Close onClick={(e) => onDelete(title, e)}/>
          </Container>
      </ListItemButton>
    )
};

Chat.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  id: PropTypes.string,
  roomId: PropTypes.string,
  onClose: PropTypes.func,
};