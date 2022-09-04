import styled from "@emotion/styled";

export const Container = styled("div")(() => ({
  display: "flex",
  margin: "40px 40px",
  flexDirection: "column",
  flex: "1 0 auto",
}));

export const Text = styled("p")(({theme}) => ({
  fontSize: "20px",
  margin: "10px",
  color: "#808080",
}));

export const Avatar = styled("img")(() => ({
  width: "80px",
  height: "80px",
  borderRadius: "100px",
}));

export const Button = styled("button")(() => ({
  borderRadius: "20px",
  border: "1px solid #9c27b0",
  width: "150px",
  padding: "10px",
  color: "#808080",
  margin: "10px",
}));