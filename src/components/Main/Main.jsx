import React from 'react'
import { Container } from '../Container'
import { Wrapper } from './styles';

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
}

export default Main