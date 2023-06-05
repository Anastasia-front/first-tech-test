import styled from 'styled-components';

export const Dropdown = styled.button`
  margin: 0 auto;
  background-color: ${props =>
    props.condition ? '#EBD8FF' : 'rgb(159 137 209)'};
  color: ${props => (props.condition ? '#000' : '#fff')};
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

  :hover {
    background-color: rgb(117 88 185);
    color: #fff;
  }
`;

export const List = styled.div`
  background-color: rgb(159 137 209);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0px;
  padding: 0 10px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
export const Button = styled.button`
  color: #fff;
  background-color: rgb(159 137 209);
  border-style: none;
  text-transform: uppercase;
  padding: 10px;
  :hover,
  :focus {
    color: #000;
  }
`;
