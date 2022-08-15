import styled from "@emotion/styled";

export const Container = styled('div')(({theme}) => ({
  padding: "20px",
  wordBreak: "break-all",
  backgroundColor: theme.palette.secondary.light,
  width: "50%",
  borderRadius: "20px",
  marginBottom: "20px",
}));
  
export const Author = styled("p")(({theme}) => ({
  color: theme.palette.secondary.main,
  fontSize: "12px"
}));
  
export const Text = styled("p")(({theme}) => ({
  color: theme.palette.primary.main,
}));

export const Time = styled("p")(({theme}) => ({
  color: theme.palette.secondary.main,
  fontSize: "12px",
  display: "flex",
  justifyContent: "flex-end",
}));