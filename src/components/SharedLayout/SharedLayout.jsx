import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Logo,
  Link,
  Icon,
  Footer,
  FooterContainer,
  API,
  Info,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderContainer>
          <Logo>
            <Icon role="img" aria-label="tweet icon">
              💬
            </Icon>{' '}
            VIOLET APP
          </Logo>
          <nav>
            <Link to="/" end>
              HOME
            </Link>
            <Link to="/tweets">TWEETS</Link>
          </nav>
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer>
        <FooterContainer>
          <Info>Copyright © 2023. Created by Prysiazhnaia Anastasiia</Info>
          <Info>
            Thanks for API <API>mockapi</API>
          </Info>
        </FooterContainer>
      </Footer>
    </Wrapper>
  );
};
