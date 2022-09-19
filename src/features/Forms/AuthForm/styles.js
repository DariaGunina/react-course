import styled from "@emotion/styled";

export const Title = styled('h1')(({theme}) => ({
  fontSize: "20px",
  color: theme.palette.primary.main
}));

export const Container = styled('div')(() => ({
  display: "flex",
  margin: "40px 40px",
  flexDirection: "column",
  flex: "1 0 auto",
}));

export const Input = styled("input")(() => ({
  fontSize: "14px",
  color: "#808080",
  border: "1px solid #9c27b0",
  borderRadius: "20px",
  marginRight: "10px",
  marginBottom: "10px",
  padding: "10px",
  width: "600px"
}));

export const Button = styled("button")(() => ({
  borderRadius: "20px",
  border: "1px solid #9c27b0",
  width: "150px",
  padding: "10px",
  color: "#808080",
}));