import styled from "@emotion/styled";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled('div')(() => ({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "4px dashed #808080",
  flex: "0 0 auto",
  padding: "20px 20px",
}));

export const Head = styled('div')(() => ({
  textTransform: "uppercase",
}));

export const Title = styled('h1')(({theme}) => ({
  color: theme.palette.primary.main,
  marginTop: 0,
  marginBottom: "10px",
}));

export const Subtitle = styled('p')(({theme}) => ({
  fontSize: "18px",
  color: theme.palette.secondary.main,
  margin: 0,
}));

export const Counter = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const Content = styled('div')(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px"
}));

export const Count = styled('div')(() => ({
  marginRight: "10px",
  fontSize: "14px"
}));

export const IconLike = styled(FavoriteIcon)(({theme}) => ({
  cursor: "pointer",
  color: theme.palette.primary.main,
}));

export const IconDislike = styled(FavoriteIcon)(({theme}) => ({
  cursor: "pointer",
  color: "green",
}));

export const Inscription = styled('div')(({theme}) => ({
  fontSize: "14px",
  color: theme.palette.secondary.main,
  margin: 0,
}));

export const LinkContainer = styled('div')(() => ({
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
}));

export const UserContainer = styled('div')(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const User = styled('p')(({theme}) => ({
  fontSize: "16px",
  color: theme.palette.primary.main,
  margin: "10px",
}));


export const Link = styled(NavLink)(({theme}) => ({
  cursor: "pointer",
  color: theme.palette.primary.main,
  padding: "20px",
}));

export const Text = styled('p')(({theme}) => ({
  fontSize: "16px",
  color: theme.palette.secondary.main,
  margin: 0,
}));

export const Box = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}));

export const ButtonBox = styled('div')(() => ({
  display: "flex",
  flexDirection: "row"
}));

export const Button = styled('button')(({theme}) => ({
  marginRight: "3px",
  marginTop: "10px",
  fontSize: "12px",
  border: "1px solid #b8383d17",
  borderRadius: "5px",
  padding: "5px",
}));

export const Close = styled(CloseIcon)(({theme}) => ({
  fill: theme.palette.primary.main,
  cursor: "pointer",
}));

