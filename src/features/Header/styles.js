import styled from "@emotion/styled";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from "react-router-dom";

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

export const Icon = styled(FavoriteIcon)(({theme}) => ({
  cursor: "pointer",
  color: theme.palette.primary.main,
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

export const Link = styled(NavLink)(({theme}) => ({
  cursor: "pointer",
  color: theme.palette.primary.main,
  padding: "20px",
}));