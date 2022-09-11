import styled from "@emotion/styled";
import SearchIcon from '@mui/icons-material/Search';

export const Container = styled('div')(() => ({
  margin: "20px",
}));

export const Title = styled('h1')(({theme}) => ({
  fontSize: "20px",
  color: theme.palette.primary.main
}));

export const Button = styled('button')(({theme}) => ({
  fontSize: "14px",
  color: theme.palette.primary.main,
  margin: "20px 5px 20px",
}));

export const Box = styled('div')(({theme}) => ({
  fontSize: "12px",
  color: theme.palette.primary.main,
}));

export const Search = styled(SearchIcon)(({theme}) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
}));