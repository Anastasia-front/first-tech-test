import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 70px;
`;
export const Content = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;

  font-family: sans-serif;
  font-size: 48px;
  background: linear-gradient(90deg, violet, indigo, violet);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Text = styled.p`
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 10px;
  font-weight: bold;
  color: rgb(73 48 77);
  text-shadow: rgb(217 196 255) 2px 4px 3px, rgb(207 179 255) 6px 8px 30px,
    rgb(255 255 255) 1px 3px 30px;
`;
