import styled from "@emotion/styled";

export const Container = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "40px",
  flexDirection: "column",
  flex: "1 0 auto",
}));

export const Text = styled("h1")(({theme}) => ({
  fontSize: "32px",
  color: theme.palette.secondary.main,
}));

export const Avatar = styled("img")(() => ({
  width: "180px",
  height: "235px",
  borderRadius: "100px",
}));