import styled from "@emotion/styled";

export const WelcomeImage = styled("img")(() => ({
  width: "300px",
  height: "400px",
  marginBottom: "25px"
}));

export const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  flex: "1 0 auto",
}));

export const Text = styled("h1")(({theme}) => ({
  fontSize: "32px",
  color: theme.palette.secondary.main,
}));