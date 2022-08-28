import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ListItemButton from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import img from "../../assets/avatar.jpg";

import { 
  Time, 
  Container, 
  Close,
  Box
} from "./styles";

export const Chat = ({
  id,
  roomId,
  title,
  subtitle,
  time,
  onDelete,
}) => {
    return (
      <Link 
        key={id} 
        to={`/chat/${id}`} 
        style={{ textDecoration: 'none' }}
      >
        <ListItemButton 
          selected={id === roomId} 
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
                <ListItemText 
                  primary = {subtitle} 
                  sx={{ 
                    color: "#808080",
                    fontSize: "12px",
                  }}
                />
              </Container>
            </Box>
            <Container>
              <Close onClick={onDelete}/>
              <Time>{time}</Time>
            </Container>
        </ListItemButton>
      </Link>
    )
};

Chat.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  roomId: PropTypes.string,
  time: PropTypes.string,
  onClose: PropTypes.func,
};