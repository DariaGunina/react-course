import styled from "@emotion/styled";

export const Time = styled('p')(({theme}) => ({
  marginRight: "auto",
  color: theme.palette.secondary.main,
  fontSize: "12px",
}));

export const Container = styled('div')(({theme}) => ({
  display: "flex",
  flexDirection: "column",
}));