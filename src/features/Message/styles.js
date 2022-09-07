import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';

export const Container = styled('div')(({theme}) => {
  return ({
    padding: "20px",
    wordBreak: "break-all",
    backgroundColor: theme.palette.secondary.light,
    width: "50%",
    borderRadius: "20px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
  })
});
  
export const Author = styled("p")(({theme}) => ({
  color: theme.palette.secondary.main,
  fontSize: "12px",
  margin: 0,
}));
  
export const Text = styled("p")(({theme}) => ({
  color: theme.palette.primary.main,
  margin: "20px 0 0",
}));

export const Time = styled("p")(({theme}) => ({
  color: theme.palette.secondary.main,
  fontSize: "12px",
  display: "flex",
  justifyContent: "flex-end",
  margin: "20px 0 0",
}));

export const Close = styled(CloseIcon)(({theme}) => ({
  fill: theme.palette.primary.main,
  cursor: "pointer",
}));

export const Box = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

