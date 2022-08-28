import React from "react";
import PropTypes from "prop-types";
import { menu } from "../../constants";

import { 
  Container, 
  Head, 
  Title, 
  Subtitle, 
  Counter,
  Content,
  Count,
  Icon,
  Inscription,
  Link,
  LinkContainer
} from './styles';

export const Header = ({title, subtitle}) => {
  const [count, setCount] = React.useState(1);

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
      <Counter>
        <Content>
          <Count>{count}</Count>
          <Icon onClick={() => setCount(count + 1)} />
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