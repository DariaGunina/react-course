import styled from "@emotion/styled";

export const WelcomeImage = styled("img")(() => ({
  marginBottom: "25px"
}));

export const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  flex: "1 0 auto",
}));

export const Text = styled("h1")(({theme}) => ({
  fontSize: "32px",
  color: theme.palette.secondary.main,
}));