import styled from 'styled-components';

export const ButtonStyle = styled.button`
  margin: 0 auto;
  background-color: rgb(159 137 209);
  color: #fff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;

  padding: 14px 28px;
  gap: 6px;
  font-family: 'Montserrat, sans-serif';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  border-style: none;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  :hover,
  :focus {
    background-color: #ebd8ff;
    color: #000;
  }
`;
