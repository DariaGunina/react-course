import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from '@mui/material/Input';
import { InputAdornment } from "@mui/material";
import { getGists, searchGists, gistsSelector } from "../../store/gists";

import { 
    Box, 
    Container, 
    Title,
    Button,
    Search
  } from "./styles";

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export const Gists = () => {
  const {
    gists,
    pending,
    error,
    gistsBySearch,
    pendingBySearch,
    errorBySearch,
  } = useSelector(gistsSelector);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);

  if (error || errorBySearch) {
    return <h1>error ...</h1>;
  }

  return (
    <Container>
      <Title>Gists</Title>
      <Input
        fullWidth
        value={value}
        onChange={e => setValue(e.target.value)} 
        placeholder="Search..."
        endAdornment={
          <InputAdornment position="end">
            {
              value && 
                <Search 
                  onClick={() => dispatch(searchGists(value))} 
                  color="primary" 
                />
            }
          </InputAdornment>
        }
      />
      {buttons.map((btn, index) => {
        return (
          <Button onClick={() => dispatch(getGists(btn))} key={index}>
            {btn}
          </Button>
        );
      })}

      <Box>
        {pending ? (
          <h1>pending...</h1>
        ) : (
          gists.map((gist, index) => {
            return (
              <div key={index}>
                <h2>{gist.url}</h2>
              </div>
            );
          })
        )}
      </Box>

      <hr />

      <Box>
        {pendingBySearch ? (
          <h1>pending...</h1>
        ) : (
          gistsBySearch.length ? gistsBySearch.map((gist, index) => {
            return (
              <div key={index}>
                <h2>{gist.url}</h2>
              </div>
            );
          }) : <p>Нет данных</p>
        )} 
      </Box>  
    </Container>
  );
};