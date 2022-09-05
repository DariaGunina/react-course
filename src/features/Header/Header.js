import {useContext} from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { menu } from "../../constants";
import { ThemeContext } from "../../styles/theme";
import { 
  increment, 
  decrement, 
  countSelector 
} from "../../store/counter";

import { 
  Container, 
  Head, 
  Title, 
  Subtitle, 
  Counter,
  Content,
  Count,
  IconLike,
  IconDislike,
  Inscription,
  Link,
  LinkContainer,
  Text,
  Box,
  ButtonBox,
  Button
} from './styles';

export const Header = ({title, subtitle}) => {
  const { theme, themeSetter } = useContext(ThemeContext);
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  
  return (
    <Container>
      <Head>
       <Title>{title}</Title>
       <Subtitle>{subtitle}</Subtitle>
      </Head>
      <LinkContainer>
        {menu.map((item) => (
          <Link key={item.to} to={item.to} style={{ textDecoration: 'none' }}>
            {item.title}
          </Link>
        ))}
      </LinkContainer>
      <Box>
        <Text>Выбрать тему</Text>
        <ButtonBox>
          <Button
            disabled={theme.name === "light"}
            onClick={() => themeSetter("light")}
          >
            light
          </Button>
          <Button
            disabled={theme.name === "dark"}
            onClick={() => themeSetter("dark")}
          >
            dark
          </Button>
        </ButtonBox>
      </Box>
      <Counter>
        <Content>
          <Count>{count}</Count>
          <IconLike onClick={() => dispatch(increment())} />
          <IconDislike onClick={() => dispatch(decrement())} />
        </Content>
        <Inscription>Click me!</Inscription>
      </Counter>
        
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};