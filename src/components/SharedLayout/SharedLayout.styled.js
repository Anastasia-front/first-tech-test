import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  border-bottom: 1px solid black;
  box-shadow: 30px 10px 80px rgb(187, 187, 187);
  margin-bottom: 40px;
  padding: 12px 30px;
`;
export const HeaderContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  nav {
    display: flex;
    gap: 10px;
  }
`;
export const Container = styled.div`
  flex-shrink: 0;
  max-width: 1400px;
  margin: 0;
  padding: 0 30px 100px;

  @media screen and (min-width: 555px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 950px) {
    padding: 0 20px 50px;
  }
`;
export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  &:hover {
    color: #673ab7;
  }

  &.active {
    color: white;
    text-shadow: #673ab7 2px 4px 3px, #673ab7 6px 8px 30px, #9c27b0 1px 3px 30px;
    font-weight: 900;
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
  font-size: 25px;
`;

export const Footer = styled.footer`
  flex-shrink: 0;
  border-top: 1px solid black;
  box-shadow: 30px 10px 80px rgb(187, 187, 187);
  margin-top: auto;
  background-color: rgb(244, 232, 255);
  padding: 12px 30px;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Info = styled.p`
  padding: 7px;
  margin: 0;
  font-size: 10px;
  text-align: center;
`;

export const API = styled.a`
  color: #673ab7;
`;
