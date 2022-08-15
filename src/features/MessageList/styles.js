import styled from "@emotion/styled";

export const Container = styled('div')(() => ({
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 144px - 63px)",
  width: "100%",
}));
  
export const Wrapper = styled("div")(() => ({
  overflow: "auto",
  padding: "20px",
}));
  
export const Box = styled("div")(() => ({
  display: "flex",
  alignItems: "flex-end",
}));