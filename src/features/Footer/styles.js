import styled from "@emotion/styled";

export const Container = styled('div')(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  color: theme.palette.secondary.main,
  fontSize: "16px",
  borderTop: "4px dashed #808080",
  flex: "0 0 auto",
  padding: "20px",
}));

export const Info = styled("p")(() => ({
  margin: 0,
}));