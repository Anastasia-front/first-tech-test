import styled from 'styled-components';

export const StyleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;
export const Title = styled.h1`
  margin-top: 50px;
  font-family: sans-serif;
  font-size: 48px;
  background: linear-gradient(
    45deg,
    violet,
    indigo,
    rgb(75, 42, 153),
    darkblue,
    rgb(75, 42, 153),
    indigo,
    violet
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
