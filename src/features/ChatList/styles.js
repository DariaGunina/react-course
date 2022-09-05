import styled from "@emotion/styled";
import AddCommentIcon from '@mui/icons-material/AddComment';

export const AddChat = styled(AddCommentIcon)(({theme}) => ({
  fill: theme.palette.primary.main,
}));

export const HeaderContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
  alignItems: "center",
}));

export const Text = styled.p(({theme}) => ({
  color: theme.palette.secondary.main,
}));

export const Box = styled.div(({theme}) => ({
  width: "50%",
  borderRight: "1px solid #80808038",
}));