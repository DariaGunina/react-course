import {useContext} from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { signOut } from "firebase/auth";
import { menuWithSession, menuWithoutSession } from "../../constants";
import { auth } from "../../api/firebase";
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
  Button,
  UserContainer,
  User,
  Close
} from './styles';

export const Header = ({title, subtitle, email}) => {
  const { theme, themeSetter } = useContext(ThemeContext);
  const count = useSelector(countSelector);
  const dispatch = useDispatch();
  
  return (
    <Container>
      <Head>
       <Title>{title}</Title>
       <Subtitle>{subtitle}</Subtitle>
      </Head>
      {email && (
        <UserContainer>
          <User>USER: {email}</User>
          <Close
            onClick={() => {
              signOut(auth);
            }}
          />
        </UserContainer>
      )}
      <LinkContainer>
        {email ? menuWithSession.map((item) => (
          <Link 
            key={item.to} 
            to={item.to} 
            style={{ textDecoration: 'none' }}
          >
            {item.title}
          </Link>
        )) : menuWithoutSession.map((item) => (
          <Link 
            key={item.to} 
            to={item.to} 
            style={{ textDecoration: 'none' }}
          >
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
  email: PropTypes.string,
};