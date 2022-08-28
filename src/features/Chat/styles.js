import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';

export const Time = styled('p')(({theme}) => ({
  marginRight: "auto",
  color: theme.palette.secondary.main,
  fontSize: "12px",
}));

export const Container = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const Close = styled(CloseIcon)(({theme}) => ({
  fill: theme.palette.primary.main,
  cursor: "pointer",
}));

export const Box = styled("div")(({theme}) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center", 
}));