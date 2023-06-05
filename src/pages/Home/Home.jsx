import React from 'react';
import { Container, Content, Title, Text } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Content>
        <Title>Hello!</Title>
        <Text>
          This is a test assignment by Anastasia Prisyazhnaya, completed in one
          day.
        </Text>
        <Text>
          Please don't judge harshly, I did my best given the time constraints -
          and I believe that with more time and fewer life circumstances, it
          could have been much better!)
        </Text>
      </Content>
    </Container>
  );
};

export default Home;
