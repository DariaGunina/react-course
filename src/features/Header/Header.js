import React from "react";
import PropTypes from "prop-types";

import { 
  Container, 
  Head, 
  Title, 
  Subtitle, 
  Counter,
  Content,
  Count,
  Icon,
  Inscription
} from './styles';

export const Header = ({title, subtitle}) => {
  const [count, setCount] = React.useState(1);

  return (
    <Container>
      <Head>
       <Title>{title}</Title>
       <Subtitle>{subtitle}</Subtitle>
      </Head>
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