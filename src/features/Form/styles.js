import styled from "@emotion/styled";
import SendIcon from '@mui/icons-material/Send';

export const Send = styled(SendIcon)`
  cursor: pointer;
  color: #808080;
`;

export const FormContainer = styled('div')(() => ({
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
  marginLeft: "20px",
  marginRight: "35px",
  paddingTop: "10px",
}));